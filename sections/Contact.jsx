import Form from '@components/Form';
import { AiOutlineMail } from 'react-icons/ai';
const Contact = () => {
	return (
		<section id="contact">
			<div className="section-header">
				<AiOutlineMail className="text-[16px] mr-2" />
				<h4>Contact</h4>
			</div>
			<div className="mb-[50px]">
				<h1 className="text-[38px] md:text-[42px] lg:text-[48px] font-[300] mb-[50px]">
					Let's Work
					<span className="text-secondary"> Together!</span>
				</h1>
				<h3 className="text-[24px] mb-[50px]">sakib100.sa@gmail.com</h3>
				<div>
					<Form />
				</div>
			</div>
		</section>
	);
};
export default Contact;
