import Image from 'next/image';
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
			<div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mb-[50px]">
				<div className="col-spam-1 border-[1px] border-border-color rounded-[30px] hover:border-secondary px-8 py-10 justify-center duration-300">
					<div className="w-full">
						<h6 className="pt-10 text-xl mb-3">Basic Plan </h6>
						<h1 className="text-secondary text-4xl mb-10">199$</h1>
						<ul className="flex flex-col gap-3 list-outside">
							<li className="flex items-start text-sm gap-2">
								<Image
									src="/images/extras/check.svg"
									width={20}
									height={20}
									alt="check"
								/>
								Basic Website Development with Essential
								Features and Functionality
							</li>
							<li className="flex items-start text-sm gap-2">
								<Image
									src="/images/extras/check.svg"
									width={20}
									height={20}
									alt="check"
								/>
								Fully Responsive, optimized for various screen
								sizes and devices
							</li>
							<li className="flex items-start text-sm gap-2">
								<Image
									src="/images/extras/check.svg"
									width={20}
									height={20}
									alt="check"
								/>
								Basic SEO Optimization to improve search engine
								visibility
							</li>
							<li className="flex items-start text-sm gap-2">
								<Image
									src="/images/extras/check.svg"
									width={20}
									height={20}
									alt="check"
								/>
								Domain and Hosting Setup
							</li>
							<li className="flex items-start text-sm gap-2">
								<Image
									src="/images/extras/check.svg"
									width={20}
									height={20}
									alt="check"
								/>
								Contact Form and Basic Integration
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
