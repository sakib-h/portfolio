import Image from 'next/image';
import Portfolio_2 from '../public/images/portfolio/portfolio-2.jpg';
import { AiOutlineDatabase } from 'react-icons/ai';
import Link from 'next/link';
const Portfolio = () => {
	return (
		<section
			id="portfolio"
			className="section">
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
					<div className="grid grid-cols-3 gap-5 items-center">
						<div className="col-span-1">
							<Image
								src={Portfolio_2}
								alt="portfolio-2"
								className="rounded-lg shadow-lg w-full h-auto object-contain"
							/>
						</div>
						<div className="col-span-2 flex flex-col gap-3">
							<Link
								href="https://restaurantly-modern-app.netlify.app/"
								className="text-[24px] cursor-pointer"
								target="_blank">
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

					<div className="grid grid-cols-3 gap-5 items-center">
						<div className="col-span-1">
							<Image
								src={Portfolio_2}
								alt="portfolio-2"
								className="rounded-lg shadow-lg w-full h-auto object-contain"
							/>
						</div>
						<div className="col-span-2 flex flex-col gap-3">
							<Link
								href="https://restaurantly-modern-app.netlify.app/"
								className="text-[24px] cursor-pointer"
								target="_blank">
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
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
