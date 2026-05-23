import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import Registrations from "@/components/Registrations";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Documents from "@/components/Documents";
import Clients from "@/components/Clients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Team from "@/components/Team";
import Consultants from "@/components/Consultants";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <Hero />
        <Marquee />
        <StatsBar />
        <About />
        <Registrations />
        <Services />
        <Process />
        <Documents />
        <Clients />
        <WhyChooseUs />
        <Team />
        <Consultants />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
