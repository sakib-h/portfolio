'use client';
import CountUp from 'react-countup';
import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';
import Typewriter from 'typewriter-effect';
const Hero = () => {
	return (
		<section
			id="home"
			className="">
			<div className="section-header">
				<AiOutlineHome className="text-[16px] mr-2" />
				<h4>Introduction</h4>
			</div>
			<div className="mb-[50px]">
				<div className="flex flex-col gap-10 justify-start">
					<h1 className="text-[38px] md:text-[42px] lg:text-[48px]  xl:text-[60px] font-[300] mb-[50px]">
						Hello, I'm{' '}
						<em className="text-secondary font-[500]">
							Sakib Hasan
						</em>{' '}
						<br />
						<Typewriter
							options={{
								strings: [
									'Full Stack Developer',
									'Competitive Programmer',
									'Open-Source Enthusiast',
								],
								autoStart: true,
								loop: true,
								changeDelay: 300,
							}}
						/>
					</h1>

					<div className="button">
						<Link
							className="max-w-max  text-alternative text-[16px] font-[400] rounded-[30px] py-2 px-10 bg-secondary hover:bg-transparent  hover:text-secondary  border-[2px] border-secondary duration-300 gap-2"
							href="https://www.fiverr.com/s/z5jw2R"
							target="_blank">
							DOWNLOAD RESUME
						</Link>
					</div>
				</div>
			</div>
			<div className="flex flex-col lg:flex-row justify-between gap-10 items-center mb-[50px]">
				<div className="w-full grid grid-cols-3  gap-5 items-center justify-between">
					<div className="flex flex-col items-center">
						<CountUp
							end={3}
							duration={1}
							className="text-[48px] md:text-[56px] xl:text-[72px] leading-[56px] text-secondary mb-4"
						/>
						<div className="flex flex-col items-center text-[14px] text-secondary-text font-[400]">
							<span>YEARS</span>
							<span>Experience</span>
						</div>
					</div>
					<div className="flex flex-col items-center">
						<CountUp
							end={52}
							duration={1}
							className="text-[48px] md:text-[56px] xl:text-[72px] leading-[56px] text-secondary mb-4"
						/>
						<div className="flex flex-col items-center text-[14px] text-secondary-text font-[400]">
							<span>PROJECTS</span>
							<span>COMPLETED</span>
						</div>
					</div>
					<div className="flex flex-col items-center">
						<CountUp
							end={27}
							duration={1}
							className="text-[48px] md:text-[56px] xl:text-[72px] leading-[56px] text-secondary mb-4"
						/>
						<div className="flex flex-col items-center text-[14px] text-secondary-text font-[400]">
							<span>HAPPY</span>
							<span>CLIENTS</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero