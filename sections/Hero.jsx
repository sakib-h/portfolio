'use client';
import { motion, useTime, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
	AiOutlineHome,
	AiOutlineArrowDown,
	AiOutlineCalendar,
} from 'react-icons/ai';
import CountUp from 'react-countup';

const Hero = () => {
	const time = useTime();
	const rotate = useTransform(time, [0, 5500], [0, 360], { clamp: false });
	return (
		<section id="home">
			<div className="section-header">
				<AiOutlineHome className="text-[16px] mr-2" />
				<h4>Introduce</h4>
			</div>
			<div className="mb-[50px]">
				<h1 className="text-[55px] md:text-[60px] lg:text-[64px]  xl:text-[75px] font-[300] mb-[50px]">
					Say Hi from Sakib,{' '}
					<em className="text-secondary font-[500]">MERN</em> based
					Full Stack Web Developer
				</h1>
				<p className="text-secondary-text text-[16px]">
					I design and code beautifully simple things and i love what
					i do. Just simple like that!
				</p>
			</div>
			<div className="flex flex-col lg:flex-row justify-between gap-10 items-center mb-[50px]">
				<div className="w-full grid grid-cols-3  gap-5 items-center justify-center">
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
				<div className="border-[1px] border-border-color rounded-full p-4 relative">
					<motion.div style={{ rotate }}>
						<Image
							src="/images/extras/round-text.png"
							alt="Resume"
							height={150}
							width={150}
						/>
					</motion.div>
					<Link
						href="#portfolio"
						className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[40px] cursor-pointer hover:text-[48px] duration-[0.4s]">
						<AiOutlineArrowDown />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Hero