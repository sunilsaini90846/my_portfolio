import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Experience />
      </div>
      <Footer />
    </main>
  );
} 