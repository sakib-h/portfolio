'use client';
import Image from 'next/image';
import Link from 'next/link';
// Swiper import
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Slider = () => {
	return (
		<Swiper
			pagination={{
				type: 'fraction',
				clickable: true,
			}}
			navigation={true}
			// autoplay={{
			// 	delay: 2500,
			// 	disableOnInteraction: false,
			// }}
			// loop={true}
			modules={[Pagination, Navigation, Autoplay]}
			className="mySwiper">
			<SwiperSlide className="rounded-[30px] border-[1px] border-border-color py-10 px-10">
				<div className="client-profile flex gap-3 items-center mb-[35px]">
					<Image
						src="/images/testimonials/testimonials-1.jpg"
						width={45}
						height={45}
						className="rounded-full"
						alt="Tym Mills"
					/>
					<div className="flex flex-col justify-start">
						<h6 className="text-[18px]">Tym Mills</h6>
						<p className="text-[13px] text-secondary-text">
							CEO of{' '}
							<span className="text-secondary">IMB Global</span>
						</p>
					</div>
				</div>
				<div className="client-feedback">
					<p className="text-[24px] mb-[24px]">
						"Sakib - A Developer with the creativity, professional
						and master of code. Much more than what i'm expect. High
						quality product & flexible price. Recommended!.”
					</p>
					<Link
						href="https://restaurantly-modern-app.netlify.app/"
						target="_blank"
						title="Restaurantly - Modern Restaurant Website"
						className="cursor-pointer text-[12px]">
						Project
					</Link>
				</div>
			</SwiperSlide>

			<SwiperSlide className="rounded-[30px] border-[1px] border-border-color py-10 px-10">
				<div className="client-profile flex gap-3 items-center mb-[35px]">
					<Image
						src="/images/testimonials/testimonials-2.jpg"
						width={45}
						height={45}
						className="rounded-full"
						alt="Ema Grace"
					/>
					<div className="flex flex-col justify-start">
						<h6 className="text-[18px]">Ema Grace</h6>
						<p className="text-[13px] text-secondary-text">
							Product Manager of{' '}
							<span className="text-secondary">
								Invision App Inc
							</span>
						</p>
					</div>
				</div>
				<div className="client-feedback">
					<p className="text-[24px] mb-[24px]">
						"Sakib was a real pleasure to work with and we look
						forward to working with him again. He's definitely the
						kind of designer that you can trust with any project
						from A-Z.”
					</p>
					<Link
						href="https://hoo-bank-modern-bank-app.netlify.app"
						target="_blank"
						title="Hoo Bank - Modern Bank App"
						className="cursor-pointer text-[12px]">
						Project
					</Link>
				</div>
			</SwiperSlide>
		</Swiper>
	);
};
export default Slider;
