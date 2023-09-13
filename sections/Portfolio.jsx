import { LiaComment } from 'react-icons/lia';
const Portfolio = () => {
	return (
		<section
			id="portfolio"
			className="section">
			<div className="section-header">
				<LiaComment className="text-[16px] mr-2" />
				<h4>Portfolio</h4>
			</div>
			<div className="mb-[50px]">
				<h1 className="text-[38px] md:text-[42px] lg:text-[48px] font-[300] mb-[50px]">
					Featured
					<span className="text-secondary"> Projects</span>
				</h1>
			</div>
		</section>
	);
};

export default Portfolio;
