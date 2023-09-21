import Image from 'next/image';
import Portfolio_1 from '../public/images/portfolio/portfolio-1.jpg';
import Portfolio_2 from '../public/images/portfolio/portfolio-2.jpg';
import Portfolio_3 from '../public/images/portfolio/portfolio-3.jpg';
import { AiOutlineDatabase } from 'react-icons/ai';
import Link from 'next/link';
const Portfolio = () => {
	return (
		<section id="portfolios">
			<div className="section-header">
				<AiOutlineDatabase className="text-[16px] mr-2" />
				<h4>Portfolio</h4>
			</div>
			<div className="mb-[50px]">
				<h1 className="text-[38px] md:text-[42px] lg:text-[48px] font-[300] mb-[50px]">
					Featured
					<span className="text-secondary"> Projects</span>
				</h1>
				<div className="grid grid-cols-1 gap-10 relative">
					<div className="grid grid-cols-3 gap-5 items-center group">
						<div className="col-span-1">
							<Image
								src={Portfolio_2}
								alt="Restaurantly"
								className="rounded-lg shadow-lg w-full h-auto object-contain"
							/>
						</div>
						<div className="col-span-2 flex flex-col gap-3">
							<Link
								href="https://restaurantly-modern-app.netlify.app/"
								className="text-[24px] cursor-pointer group-hover:text-secondary duration-300"
								target="_blank"
								title="Restaurantly - Modern Restaurant Website">
								Restaurantly - Modern Restaurant Website
							</Link>
							<p className="text-[14px]">
								Modern restaurant website, crafted a sleek and
								interactive experience using React and Tailwind
								CSS. With dynamic animations powered by Framer
								Motion, immersive galleries with Light Gallery,
								and seamless media integration through React
								Player, we've ensured an engaging visit.
							</p>
							<div className="flex flex-wrap">
								{[
									'React',
									'Tailwind CSS',
									'Framer-Motion',
									'Light Gallery',
								].map((item, index) => (
									<div
										key={index}
										className="flex items-center justify-between bg-[rgba(40,233,140,0.1)] text-white rounded-md px-4 py-2 mr-4 mb-4 ">
										<p className="text-[14px]">{item}</p>
									</div>
								))}
							</div>
						</div>
					</div>

					<div className="grid grid-cols-3 gap-5 items-center group">
						<div className="col-span-1">
							<Image
								src={Portfolio_1}
								alt="Hoo Bank"
								className="rounded-lg shadow-lg w-full h-auto object-contain"
							/>
						</div>
						<div className="col-span-2 flex flex-col gap-3">
							<Link
								href="https://hoo-bank-modern-bank-app.netlify.app"
								className="text-[24px] cursor-pointer group-hover:text-secondary duration-300"
								target="_blank"
								title="Hoo Bank - Modern Bank App">
								Hoo Bank - Modern Bank App
							</Link>
							<p className="text-[14px]">
								Welcome to the future of online banking.
								Translated a meticulously designed Figma
								prototype into a highly responsive React-based
								interface. Our goal is to provide you with a
								modern, user-friendly experience for all your
								banking needs. Explore intuitive navigation,
								polished UI elements, and a seamless responsive
								design that adapts to your device, ensuring an
								effortless banking experience.
							</p>
							<div className="flex flex-wrap">
								{['Vite', 'Tailwind CSS'].map((item, index) => (
									<div
										key={index}
										className="flex items-center justify-between bg-[rgba(40,233,140,0.1)] text-white rounded-md px-4 py-2 mr-4 mb-4 ">
										<p className="text-[14px]">{item}</p>
									</div>
								))}
							</div>
						</div>
					</div>

					<div className="grid grid-cols-3 gap-5 items-center group">
						<div className="col-span-1">
							<Image
								src={Portfolio_3}
								alt="GPT-3"
								className="rounded-lg shadow-lg w-full h-auto object-contain"
							/>
						</div>
						<div className="col-span-2 flex flex-col gap-3">
							<Link
								href="https://gpt-3-modern.netlify.app/"
								className="text-[24px] cursor-pointer group-hover:text-secondary duration-300"
								target="_blank"
								title="Hoo Bank - Modern Bank App">
								GPT-3 - Modern AI Platform
							</Link>
							<p className="text-[14px]">
								Welcome to the world of CHAT GPT 3, where
								artificial intelligence meets intuitive design.
								With a Figma blueprint as our guide, transformed
								it into a responsive React-powered interface,
								ensuring seamless interaction on any device.
								Dynamic animations, courtesy of Framer Motion,
								breathe life into our UI, while React Icons add
								a touch of flair.
							</p>
							<div className="flex flex-wrap">
								{[
									'Tailwind CSS',
									'Framer Motion',
									'React Icons',
								].map((item, index) => (
									<div
										key={index}
										className="flex items-center justify-between bg-[rgba(40,233,140,0.1)] text-white rounded-md px-4 py-2 mr-4 mb-4 ">
										<p className="text-[14px]">{item}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
