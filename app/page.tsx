import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";



export default function Home(){
return (

<main className="min-h-screen bg-slate-50 font-sans text-slate-800" dir="rtl">
 <Hero />
 <Services />
 <Portfolio />
 <Pricing />
 <Contact />
</main>  
)

}