import About from '@sections/About';
import Contact from '@sections/Contact';
import Hero from '@sections/Hero';
import Portfolio from '@sections/Portfolio';
import Resume from '@sections/Resume';
import Skills from '@sections/Skills';
import Testimonial from '@sections/Testimonial';

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Resume />
			<Skills />
			<Portfolio />
			<Testimonial />
			<Contact />
		</>
	);
}
