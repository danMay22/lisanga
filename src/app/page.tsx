

import StaticLogoCloud from "@/components/home/animation/partner";
import Blogs from "@/components/home/blogs";
import Cta from "@/components/home/cta";
import Features from "@/components/home/features";
import { Header } from "@/components/home/Header";
import Hero from "@/components/home/hero";
import Leader from "@/components/home/leader";
import Promo from "@/components/home/promo";
import Resource from "@/components/home/ressource";
import Stats from "@/components/home/stats";
import OurTeam from "@/components/home/team";
import Testimonials from "@/components/home/testimonials";


export default function Home() {
  return (
   <div> 
    <Header />   
   <Hero />
   <StaticLogoCloud/>
   <Leader/>
   <Features/>
   <Resource/>
   <Stats/>
   <Cta/>
   <Testimonials/>
   <OurTeam/>
   <Blogs />
   <Promo/>
 </div> 
  );
}
