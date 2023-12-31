import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@components/Footer"));
const About = dynamic(() => import("@sections/About"));
const Contact = dynamic(() => import("@sections/Contact"));
const Hero = dynamic(() => import("@sections/Hero"), { ssr: false });
const Portfolio = dynamic(() => import("@sections/Portfolio"));
const Resume = dynamic(() => import("@sections/Resume"));
const Skills = dynamic(() => import("@sections/Skills"));
const Testimonial = dynamic(() => import("@sections/Testimonial"));

export default function Home() {
    return (
        <div className="w-full md:w-[80%] xl:w-[70%] md:mx-auto overflow-hidden">
            <Hero />
            <About />
            <Resume />
            <Skills />
            <Portfolio />
            <Testimonial />
            <Contact />
            <Footer />
        </div>
    );
}
