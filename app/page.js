'use client';
import { AiOutlineHome } from 'react-icons/ai';
import CountUp from 'react-countup';
export default function Home() {
	return (
		<section
			id="home"
			className="section">
			<div className="title-area flex items-center font-[300] w-max border-[1px] border-border-color text-[12px] mb-[50px] px-[20px] py-[9px] rounded-[30px] uppercase">
				<AiOutlineHome className="text-[16px] mr-2" />
				<h4>Introduce</h4>
			</div>
			<div className="mb-[50px]">
				<h1 className="text-[75px] font-[300] mb-[50px]">
					Say Hi from Sakib,{' '}
					<em className="text-secondary font-[500]">MERN</em> based
					Full Stack Web Developer
				</h1>
				<p className="text-secondary-text text-[16px]">
					I design and code beautifully simple things and i love what
					i do. Just simple like that!
				</p>
			</div>
			<div className="flex flex-row justify-start gap-20 items-center mb-[50px]">
				<div>
					<p className="flex items-center text-[72px] leading-[56px] text-secondary mb-[38px]">
						<CountUp
							end={3}
							duration={1}
						/>
						<span>+</span>
					</p>
					<p className="text-[14px] text-secondary-text font-[400]">
						YEARS OF EXPERIENCE
					</p>
				</div>

				<div>
					<p className="flex items-center text-[72px] leading-[56px] text-secondary mb-[38px]">
						<CountUp end={50} />
						<span>+</span>
					</p>
					<p className="text-[14px] text-secondary-text font-[400]">
						PROJECTS COMPLETED ON 15 COUNTRIES
					</p>
				</div>
			</div>
		</section>
	);
}
