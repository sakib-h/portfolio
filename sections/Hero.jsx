'use client'
import Counter from '@components/Counter'
import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
const Hero = () => {
	return (
		<section
			id="home"
			className="">
			<motion.div
				className="section-header"
				initial={{ y: -300, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, type: 'spring' }}>
				<AiOutlineHome className="text-[16px] mr-2" />
				<h4>Introduction</h4>
			</motion.div>
			<motion.div
				className="mb-[100px]"
				initial={{ x: -1000, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.8, type: 'spring' }}>
				<div className="flex flex-col gap-16 justify-start">
					<h1 className="text-[38px] md:text-[42px] lg:text-[48px]  xl:text-[60px] font-[300]">
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

					<p className="text-secondary-text text-[16px]">
						Passionate MERN stack developer with expertise in
						building robust, scalable, and interactive web
						applications. Proficient in MongoDB, Express.js, React,
						and Node.js. Let's turn your ideas into dynamic digital
						solutions!
					</p>

					<div className="button">
						<Link
							className="max-w-max  text-alternative text-[16px] font-[400] rounded-[30px] py-2 px-10 bg-secondary hover:bg-transparent  hover:text-secondary  border-[2px] border-secondary duration-300 gap-2 "
							href="/files/resume.pdf"
							download="Sakib_Hasan_Resume">
							Download Resume
						</Link>
					</div>
				</div>
			</motion.div>
			<motion.div
				className="flex flex-col lg:flex-row justify-between gap-10 items-center mb-[50px]"
				initial={{ x: 1000, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.8, type: 'spring' }}>
				<div className="w-full grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4  gap-10 items-center">
					<Counter value="3" title="Years of Experience"/>
					<Counter value="150" title="Hours of Code Time"/>
					<Counter value="50" title="Projects Completed"/>
					<Counter value="20" title="Happy Clients"/>
				</div>
			</motion.div>
		</section>
	);
};

export default Hero