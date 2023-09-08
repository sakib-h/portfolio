import { IoBriefcaseOutline } from 'react-icons/io5';
const Resume = () => {
	return (
		<section
			className="section"
			id="resume">
			<div className="section-header">
				<IoBriefcaseOutline className="text-[16px] mr-2" />
				<h4>Resume</h4>
			</div>
			<div className="mb-[50px]">
				<h1 className="text-[38px] md:text-[42px] lg:text-[48px] font-[300] mb-[50px]">
					Education &
					<span className="text-secondary"> Experience</span>
				</h1>
			</div>
			<div className="">
				<div className="grid gap-4 grid-cols-12">
					<div className="col-span-12 xl:col-span-3">
						<div className="text-left mb-4 before:block before:w-24 before:h-[3px] before:mb-3 before:rounded-sm  before:bg-secondary">
							<h3 className="text-2xl font-semibold">
								Experience
							</h3>
						</div>
					</div>
					<div className="col-span-12 xl:col-span-9">
						<div className=""></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Resume;
