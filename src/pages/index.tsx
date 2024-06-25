import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/NavBar";
import Landing from "@/components/Landing";
import ColorQuestions from "@/components/ColorQuestions";
import FeaturesSection from "@/components/FeaturesSection";
import Accordion from "@/components/Accordian";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <>
    <Navbar />
    <Landing />
    <FeaturesSection />
    <ColorQuestions />
    <Accordion />
    <Footer />
    </>
  );
}
