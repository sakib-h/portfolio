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
					<div className="col-span-12 xl:col-span-2">
						<div className="text-left mb-4 before:block before:w-24 before:h-[3px] before:mb-3 before:rounded-sm  before:bg-secondary">
							<h3 className="text-xl text-secondary-text">
								Experience
							</h3>
						</div>
					</div>
					<div className="col-span-12 xl:col-span-10 relative border-l-[1px] border-[#333333]">
						<div className="pl-10 before:block before:absolute before:left-[-5px] before:top-0 before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#656565]">
							<span className="text-secondary-text text-base">
								DEC 2020 – PRESENT
							</span>
							<h2 className="text-2xl my-8">
								FULL STACK DEVELOPER
							</h2>
							<ul className="text-secondary-text text-[13px] ml-[15px] list-disc">
								<li>
									Code Full Stack project using HTML, CSS,
									Bootstrap, JavaScript, React.js, Next.js,
									Node.js, Firebase, MongoDB, Express.js and
									Tailwind CSS to develop features for both
									mobile and desktop platforms.
								</li>
								<li>
									Tested web-based product functionality and
									delivered iterations to customers.
								</li>
								<li>
									Design and update layouts to meet usability
									and performance requirements.
								</li>
								<li>
									Produced websites compatible with multiple
									browsers.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Resume;
