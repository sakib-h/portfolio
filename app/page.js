import { AiOutlineHome } from 'react-icons/ai';
export default function Home() {
	return (
		<section
			id="home"
			className="section">
			<div className="flex  top-icon w-max border-[1px] border-border-color text-[12px] px-[20px] py-[9px] rounded-[30px] uppercase font-[300]">
				<AiOutlineHome className="text-[16px] mr-2" />
				<h4>Introduce</h4>
			</div>
		</section>
	);
}
