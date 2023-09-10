import { GoProjectRoadmap } from 'react-icons/go';
const Services = () => {
	return (
		<section
			className="section"
			id="services">
			<div className="section-header">
				<GoProjectRoadmap className="text-[16px] mr-2" />
				<h4>Services</h4>
			</div>
			<div className="mb-[50px]">
				<h1 className="text-[38px] md:text-[42px] lg:text-[48px] font-[300] mb-[50px]">
					My
					<span className="text-secondary"> Services</span>
				</h1>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				<div className="col-spam-1 border-[1px] border-border-color rounded-[30px] hover:border-secondary px-10 py-5 justify-center duration-300">
					<div className="w-full flex flex-col  items-center">
						<em className="text-base pb-10">Starter</em>
						<h2 className="text-xl">Front End Application</h2>
						<p className="text-left">
							<span>
								Responsive and Mobile Friendly web app design
							</span>
							<span>Eye-catching and animated frontend design</span>
							<span>Eye-catching and animated frontend design</span>
							<span>Eye-catching and animated frontend design</span>
						</p>
					</div>
				</div>
				<div className="col-spam-1 border-[1px] border-border-color rounded-[30px] hover:border-secondary px-10 py-5 justify-center text-center">
					<h5>Professional</h5>
					<h2></h2>
				</div>
				<div className="col-spam-1 border-[1px] border-border-color rounded-[30px] hover:border-secondary px-10 py-5 justify-center text-center">
					<h5>Enterprise</h5>
					<h3></h3>
				</div>
			</div>
		</section>
	);
};

export default Services;
