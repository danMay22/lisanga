import Footer from "@/components/Footer";
import StaticLogoCloud from "@/components/home/animation/partner";
import Blogs from "@/components/home/blogs";
import Features from "@/components/home/features";
import { Header } from "@/components/home/Header";
import Hero from "@/components/home/hero";
import Leader from "@/components/home/leader";
import Promo from "@/components/home/promo";
import Stats from "@/components/home/stats";
import OurTeam from "@/components/home/team";

export default function Home() {
  return (
   <div> 
    <Header />   
    <Hero />
    <StaticLogoCloud/>
    <Leader/>
    <Features/>
    <Stats/>
    <OurTeam/>
    <Blogs />
    <Promo/>
    <Footer/>
   </div> 
  );
}