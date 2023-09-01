import { AiOutlineHome } from 'react-icons/ai';
export default function Home() {
	return (
		<section
			id="home"
			className="section">
			<div className="title-area flex items-center font-[300] w-max border-[1px] border-border-color text-[12px] mb-[50px] px-[20px] py-[9px] rounded-[30px] uppercase">
				<AiOutlineHome className="text-[16px] mr-2" />
				<h4>Introduce</h4>
			</div>
			<div>
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
		</section>
	);
}
