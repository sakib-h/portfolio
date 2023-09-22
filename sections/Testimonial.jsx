import Slider from '@components/Slider';
import Image from 'next/image';
import { LiaComment } from 'react-icons/lia';

const Testimonial = () => {
	return (
		<section id="testimonial">
			<div className="section-header">
				<LiaComment className="text-[16px] mr-2" />
				<h4>Testimonial</h4>
			</div>
			<div className="mb-[50px]">
				<h1 className="text-[38px] md:text-[42px] lg:text-[48px] font-[300] mb-[50px]">
					Trusted by
					<span className="text-secondary"> 20+ Clients</span>
				</h1>
			</div>

			<div className="w-full mb-[50px]">
				<Slider />
			</div>
			<div>
				<p className="text-[14px] font-[300] mb-[50px]">
					WORK WITH 20+ BRANDS WORLDWIDE
				</p>

				<div className="grid grid-cols-3 lg:grid-cols-4 gap-y-20 justify-items-center  items-center">
					<Image
						src="/images/clients/client-1.png"
						width={100}
						height={100}
						className="brightness-50 hover:brightness-90 cursor-pointer duration-300"
					/>

					<Image
						src="/images/clients/client-2.png"
						width={100}
						height={100}
						className="brightness-50 hover:brightness-90 cursor-pointer duration-300"
					/>

					<Image
						src="/images/clients/client-3.png"
						width={100}
						height={100}
						className="brightness-50 hover:brightness-90 cursor-pointer duration-300"
					/>

					<Image
						src="/images/clients/client-4.png"
						width={100}
						height={100}
						className="brightness-50 hover:brightness-90 cursor-pointer duration-300"
					/>

					<Image
						src="/images/clients/client-5.png"
						width={100}
						height={100}
						className="brightness-50 hover:brightness-90 cursor-pointer duration-300"
					/>

					<Image
						src="/images/clients/client-6.png"
						width={100}
						height={100}
						className="brightness-50 hover:brightness-90 cursor-pointer duration-300"
					/>

					<Image
						src="/images/clients/client-7.png"
						width={100}
						height={100}
						className="brightness-50 hover:brightness-90 cursor-pointer duration-300"
					/>

					<Image
						src="/images/clients/client-8.png"
						width={100}
						height={100}
						className="brightness-50 hover:brightness-90 cursor-pointer duration-300"
					/>
				</div>
			</div>
		</section>
	);
};
export default Testimonial;
