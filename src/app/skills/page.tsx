import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function SkillsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Skills />
      </div>
      <Footer />
    </main>
  );
} 