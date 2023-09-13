import About from '@sections/About';
import Hero from '@sections/Hero';
import Portfolio from '@sections/Portfolio';
import Resume from '@sections/Resume';
import Skills from '@sections/Skills';

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Resume />
			<Skills />
			<Portfolio />
		</>
	);
}
