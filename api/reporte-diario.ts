// Reporte diario de analítica: se ejecuta una vez al día vía Vercel Cron
// (ver vercel.json), lee datos de Google Analytics (GA4) y envía un correo
// resumen. Vive fuera de src/ porque Vercel detecta cualquier archivo en
// /api en la raíz del proyecto como función serverless, sin importar el
// framework (Astro) usado para el resto del sitio.
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { GoogleAuth } from "google-auth-library";

const GA4_PROPERTY_ID = process.env.GA4_PROPERTY_ID;
const GA4_SERVICE_ACCOUNT_EMAIL = process.env.GA4_SERVICE_ACCOUNT_EMAIL;
const GA4_SERVICE_ACCOUNT_PRIVATE_KEY = process.env.GA4_SERVICE_ACCOUNT_PRIVATE_KEY;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const REPORT_EMAIL_TO = process.env.REPORT_EMAIL_TO;
const REPORT_EMAIL_FROM = process.env.REPORT_EMAIL_FROM || "onboarding@resend.dev";
const CRON_SECRET = process.env.CRON_SECRET;

interface FilaReporte {
  dimensionValues?: { value?: string }[];
  metricValues?: { value?: string }[];
}

interface RespuestaGA4 {
  rows?: FilaReporte[];
}

async function ejecutarReporteGA4(accessToken: string, cuerpo: object): Promise<RespuestaGA4> {
  const respuesta = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/properties/${GA4_PROPERTY_ID}:runReport`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cuerpo),
    }
  );

  if (!respuesta.ok) {
    throw new Error(`Google Analytics Data API respondió ${respuesta.status}: ${await respuesta.text()}`);
  }

  return respuesta.json();
}

function numero(valor: string | undefined): number {
  return valor ? Number(valor) : 0;
}

function formatearDuracion(segundos: number): string {
  const minutos = Math.floor(segundos / 60);
  const resto = Math.round(segundos % 60);
  return minutos > 0 ? `${minutos} min ${resto}s` : `${resto}s`;
}

function formatearPorcentaje(fraccion: number): string {
  return `${(fraccion * 100).toFixed(1)}%`;
}

function construirHtml(
  resumenPorDia: Map<string, { usuarios: number; sesiones: number; vistas: number; duracion: number; rebote: number }>,
  nuevosVsRecurrentes: { tipo: string; usuarios: number }[],
  paginasVistas: { pagina: string; vistas: number; usuarios: number }[],
  paginasRebote: { pagina: string; sesiones: number; rebote: number }[]
): string {
  const ayer = resumenPorDia.get("ayer");
  const antier = resumenPorDia.get("antier");

  const diferencia = (actual = 0, previo = 0) => {
    const signo = actual - previo >= 0 ? "+" : "";
    return `${signo}${actual - previo}`;
  };

  const filaPagina = (p: { pagina: string; vistas: number; usuarios: number }) =>
    `<tr><td style="padding:6px 10px;border-bottom:1px solid #eee;">${p.pagina}</td><td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:right;">${p.vistas}</td><td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:right;">${p.usuarios}</td></tr>`;

  const filaRebote = (p: { pagina: string; sesiones: number; rebote: number }) =>
    `<tr><td style="padding:6px 10px;border-bottom:1px solid #eee;">${p.pagina}</td><td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:right;">${p.sesiones}</td><td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:right;">${formatearPorcentaje(p.rebote)}</td></tr>`;

  const filaTipoUsuario = (t: { tipo: string; usuarios: number }) =>
    `<tr><td style="padding:6px 10px;border-bottom:1px solid #eee;">${t.tipo === "new" ? "Nuevos" : "Recurrentes"}</td><td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:right;">${t.usuarios}</td></tr>`;

  return `
    <div style="font-family:Arial,sans-serif;color:#141210;max-width:560px;margin:0 auto;">
      <h2 style="margin-bottom:4px;">Sillarte — resumen de ayer</h2>
      <p style="color:#666;margin-top:0;">Datos de Google Analytics (GA4)</p>

      <table style="width:100%;border-collapse:collapse;margin-top:12px;">
        <tr style="background:#f5f2ec;"><th style="padding:6px 10px;text-align:left;">Métrica</th><th style="padding:6px 10px;text-align:right;">Ayer</th><th style="padding:6px 10px;text-align:right;">Antier</th><th style="padding:6px 10px;text-align:right;">Diferencia</th></tr>
        <tr><td style="padding:6px 10px;border-bottom:1px solid #eee;">Visitantes</td><td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:right;">${ayer?.usuarios ?? 0}</td><td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:right;">${antier?.usuarios ?? 0}</td><td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:right;">${diferencia(ayer?.usuarios, antier?.usuarios)}</td></tr>
        <tr><td style="padding:6px 10px;border-bottom:1px solid #eee;">Sesiones</td><td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:right;">${ayer?.sesiones ?? 0}</td><td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:right;">${antier?.sesiones ?? 0}</td><td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:right;">${diferencia(ayer?.sesiones, antier?.sesiones)}</td></tr>
        <tr><td style="padding:6px 10px;border-bottom:1px solid #eee;">Páginas vistas</td><td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:right;">${ayer?.vistas ?? 0}</td><td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:right;">${antier?.vistas ?? 0}</td><td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:right;">${diferencia(ayer?.vistas, antier?.vistas)}</td></tr>
        <tr><td style="padding:6px 10px;">Tiempo promedio en el sitio</td><td style="padding:6px 10px;text-align:right;">${formatearDuracion(ayer?.duracion ?? 0)}</td><td style="padding:6px 10px;text-align:right;">${formatearDuracion(antier?.duracion ?? 0)}</td><td style="padding:6px 10px;"></td></tr>
      </table>

      <h3 style="margin-top:24px;margin-bottom:8px;">Nuevos vs. recurrentes (ayer)</h3>
      <table style="width:100%;border-collapse:collapse;">
        <tr style="background:#f5f2ec;"><th style="padding:6px 10px;text-align:left;">Tipo</th><th style="padding:6px 10px;text-align:right;">Visitantes</th></tr>
        ${nuevosVsRecurrentes.map(filaTipoUsuario).join("")}
      </table>

      <h3 style="margin-top:24px;margin-bottom:8px;">Páginas más vistas (el recorrido de tus visitantes)</h3>
      <table style="width:100%;border-collapse:collapse;">
        <tr style="background:#f5f2ec;"><th style="padding:6px 10px;text-align:left;">Página</th><th style="padding:6px 10px;text-align:right;">Vistas</th><th style="padding:6px 10px;text-align:right;">Visitantes</th></tr>
        ${paginasVistas.map(filaPagina).join("") || `<tr><td colspan="3" style="padding:6px 10px;color:#666;">Sin datos suficientes todavía.</td></tr>`}
      </table>

      <h3 style="margin-top:24px;margin-bottom:8px;">Dónde se detienen (páginas de entrada con más rebote)</h3>
      <p style="color:#666;font-size:0.85rem;margin-top:0;">Rebote alto = llegaron a esa página y se fueron sin ver nada más.</p>
      <table style="width:100%;border-collapse:collapse;">
        <tr style="background:#f5f2ec;"><th style="padding:6px 10px;text-align:left;">Página de entrada</th><th style="padding:6px 10px;text-align:right;">Sesiones</th><th style="padding:6px 10px;text-align:right;">% Rebote</th></tr>
        ${paginasRebote.map(filaRebote).join("") || `<tr><td colspan="3" style="padding:6px 10px;color:#666;">Sin datos suficientes todavía.</td></tr>`}
      </table>

      <p style="color:#999;font-size:0.75rem;margin-top:24px;">Reporte automático diario — Sillarte</p>
    </div>
  `;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (CRON_SECRET && req.headers.authorization !== `Bearer ${CRON_SECRET}`) {
    res.status(401).json({ error: "No autorizado" });
    return;
  }

  if (!GA4_PROPERTY_ID || !GA4_SERVICE_ACCOUNT_EMAIL || !GA4_SERVICE_ACCOUNT_PRIVATE_KEY || !RESEND_API_KEY || !REPORT_EMAIL_TO) {
    res.status(500).json({ error: "Faltan variables de entorno (ver README de configuración)." });
    return;
  }

  try {
    const auth = new GoogleAuth({
      credentials: {
        client_email: GA4_SERVICE_ACCOUNT_EMAIL,
        // Las variables de entorno de Vercel no guardan saltos de línea
        // reales: la llave privada se pega con "\n" literal y hay que
        // restaurarlos aquí antes de usarla.
        private_key: GA4_SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
    });

    const cliente = await auth.getClient();
    const { token } = await cliente.getAccessToken();
    if (!token) throw new Error("No se pudo obtener el token de acceso de Google.");

    const [resumenGA4, nuevosVsRecurrentesGA4, paginasVistasGA4, paginasReboteGA4] = await Promise.all([
      ejecutarReporteGA4(token, {
        dateRanges: [
          { startDate: "yesterday", endDate: "yesterday", name: "ayer" },
          { startDate: "2daysAgo", endDate: "2daysAgo", name: "antier" },
        ],
        dimensions: [{ name: "dateRange" }],
        metrics: [
          { name: "activeUsers" },
          { name: "sessions" },
          { name: "screenPageViews" },
          { name: "averageSessionDuration" },
          { name: "bounceRate" },
        ],
      }),
      ejecutarReporteGA4(token, {
        dateRanges: [{ startDate: "yesterday", endDate: "yesterday" }],
        dimensions: [{ name: "newVsReturning" }],
        metrics: [{ name: "activeUsers" }],
      }),
      ejecutarReporteGA4(token, {
        dateRanges: [{ startDate: "yesterday", endDate: "yesterday" }],
        dimensions: [{ name: "pagePath" }],
        metrics: [{ name: "screenPageViews" }, { name: "activeUsers" }],
        orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
        limit: 5,
      }),
      ejecutarReporteGA4(token, {
        dateRanges: [{ startDate: "yesterday", endDate: "yesterday" }],
        dimensions: [{ name: "landingPage" }],
        metrics: [{ name: "sessions" }, { name: "bounceRate" }],
        orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
        limit: 5,
      }),
    ]);

    const resumenPorDia = new Map<
      string,
      { usuarios: number; sesiones: number; vistas: number; duracion: number; rebote: number }
    >();
    for (const fila of resumenGA4.rows ?? []) {
      const nombre = fila.dimensionValues?.[0]?.value ?? "";
      const [usuarios, sesiones, vistas, duracion, rebote] = fila.metricValues ?? [];
      resumenPorDia.set(nombre, {
        usuarios: numero(usuarios?.value),
        sesiones: numero(sesiones?.value),
        vistas: numero(vistas?.value),
        duracion: numero(duracion?.value),
        rebote: numero(rebote?.value),
      });
    }

    const nuevosVsRecurrentes = (nuevosVsRecurrentesGA4.rows ?? []).map((fila) => ({
      tipo: fila.dimensionValues?.[0]?.value ?? "",
      usuarios: numero(fila.metricValues?.[0]?.value),
    }));

    const paginasVistas = (paginasVistasGA4.rows ?? []).map((fila) => ({
      pagina: fila.dimensionValues?.[0]?.value ?? "",
      vistas: numero(fila.metricValues?.[0]?.value),
      usuarios: numero(fila.metricValues?.[1]?.value),
    }));

    const paginasRebote = (paginasReboteGA4.rows ?? []).map((fila) => ({
      pagina: fila.dimensionValues?.[0]?.value ?? "",
      sesiones: numero(fila.metricValues?.[0]?.value),
      rebote: numero(fila.metricValues?.[1]?.value),
    }));

    const html = construirHtml(resumenPorDia, nuevosVsRecurrentes, paginasVistas, paginasRebote);

    const envio = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: REPORT_EMAIL_FROM,
        to: REPORT_EMAIL_TO,
        subject: "Sillarte — resumen de visitas de ayer",
        html,
      }),
    });

    if (!envio.ok) {
      throw new Error(`Resend respondió ${envio.status}: ${await envio.text()}`);
    }

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
}
