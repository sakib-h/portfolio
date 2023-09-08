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
			<div className="grid gap-4 grid-cols-12 mb-10">
				<div className="col-span-12 xl:col-span-2">
					<div className="text-left mb-4 before:block before:w-24 before:h-[3px] before:mb-3 before:rounded-sm  before:bg-secondary">
						<h3 className="text-xl text-secondary-text">
							Experience
						</h3>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-10">
					<div className="relative border-l-[1px] border-[#333333] group mb-5">
						<div className="pl-10 before:block before:absolute before:left-[-5px] before:top-0 before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#656565] group-hover:before:bg-secondary duration-300">
							<span className="text-secondary-text text-base group-hover:text-secondary duration-300">
								DEC 2020 – PRESENT
							</span>
							<h2 className="text-2xl my-4">
								FULL STACK DEVELOPER
							</h2>
							<ul className="text-secondary-text text-[13px] ml-[14px] list-disc">
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

					<div className="relative border-l-[1px] border-[#333333] group">
						<div className="pl-10 before:block before:absolute before:left-[-5px] before:top-0 before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#656565] group-hover:before:bg-secondary duration-300">
							<span className="text-secondary-text text-base group-hover:text-secondary duration-300">
								JUNE 2019 – PRESENT
							</span>
							<h2 className="text-2xl my-4">GRAPHICS DESIGNER</h2>
							<ul className="text-secondary-text text-[13px] ml-[14px] list-disc">
								<li>
									Created digital image files for use in
									digital and traditional printing methods.
								</li>
								<li>
									Contributed design ideas in early planning
									stages with customers and project managers.
								</li>
								<li>
									Designed creative digital displays used in
									online advertising for local businesses.
								</li>
								<li>
									Researched trends and projected industry
									changes to capitalize on emerging
									opportunities
								</li>
								<li>
									Met with customers to present mockups and
									collect information for adjustments.
								</li>
								<li>
									Worked with clients to gather and define
									requirements, establish scopes and manage
									project milestones.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="grid gap-4 grid-cols-12 mb-[50px]">
				<div className="col-span-12 xl:col-span-2">
					<div className="text-left mb-4 before:block before:w-24 before:h-[3px] before:mb-3 before:rounded-sm  before:bg-secondary">
						<h3 className="text-xl text-secondary-text">
							Education
						</h3>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-10">
					<div className="relative border-l-[1px] border-[#333333] group mb-5">
						<div className="pl-10 before:block before:absolute before:left-[-5px] before:top-0 before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#656565] group-hover:before:bg-secondary duration-300">
							<span className="text-secondary-text text-base group-hover:text-secondary duration-300">
								2022 - PRESENT
							</span>
							<h2 className="text-2xl mt-4 mb-2">
								B. SC. IN COMPUTER SCIENCE & ENGINEERING
							</h2>
							<div className="flex flex-col gap-2 justify-start text-secondary-text text-[13px]">
								<em>DAFFODIL INTERNATIONAL UNIVERSITY</em>
								<span>CGPA 3.42</span>
							</div>
						</div>
					</div>

					<div className="relative border-l-[1px] border-[#333333] group mb-5">
						<div className="pl-10 before:block before:absolute before:left-[-5px] before:top-0 before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#656565] group-hover:before:bg-secondary duration-300">
							<span className="text-secondary-text text-base group-hover:text-secondary duration-300">
								2015 - 2017
							</span>
							<h2 className="text-2xl mt-4 mb-2">
								HIGHER SECONDARY SCHOOL CERTIFICATE
							</h2>
							<div className="flex flex-col gap-2 justify-start text-secondary-text text-[13px]">
								<em>GOVT. KADAM RASUL COLLEGE</em>
								<span>Passed with a GPA of 4.25</span>
							</div>
						</div>
					</div>

					<div className="relative border-l-[1px] border-[#333333] group">
						<div className="pl-10 before:block before:absolute before:left-[-5px] before:top-0 before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#656565] group-hover:before:bg-secondary duration-300">
							<span className="text-secondary-text text-base group-hover:text-secondary duration-300">
								2013 – 2015
							</span>
							<h2 className="text-2xl mt-4 mb-2">
								SECONDARY SCHOOL CERTIFICATE
							</h2>
							<div className="flex flex-col gap-2 justify-start text-secondary-text text-[13px]">
								<em>B. M. UNION HIGH SCHOOL & COLLEGE</em>
								<span>Passed with a GPA of 4.61</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Resume;
