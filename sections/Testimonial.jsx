import { LiaComment } from 'react-icons/lia';
const Testimonial = () => {
	return (
		<section
			id="testimonial"
			className="section">
			<div className="section-header">
				<LiaComment className="text-[16px] mr-2" />
				<h4>Testimonial</h4>
			</div>
			<div className="mb-[50px]">
				<h1 className="text-[38px] md:text-[42px] lg:text-[48px] font-[300] mb-[50px]">
					Trusted by
					<span className="text-secondary"> Hundred Clients</span>
				</h1>
			</div>
		</section>
	);
};
export default Testimonial;
