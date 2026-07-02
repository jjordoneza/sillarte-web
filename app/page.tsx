import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import Wholesale from "@/components/Wholesale";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EDE4CC] text-[#2E2E2E]">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Gallery />
      <Wholesale />
      <Footer />
      <WhatsappButton />
    </main>
  );
}
