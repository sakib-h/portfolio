'use client';
import Image from 'next/image';
import Link from 'next/link';
// Swiper import
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const Slider = () => {
	return (
		<Swiper
			pagination={{
				dynamicBullets: true,
				clickable: true,
			}}
			speed={1000}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			breakpoints={{
				1536: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
			}}
			spaceBetween={50}
			loop={true}
			modules={[Autoplay, Pagination]}
			lazy="true">
			<SwiperSlide className="slider-container">
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
					<p className="text-[18px] mb-[24px]">
						"Sakib - A Developer with the creativity, professional
						and master of code. Much more than what i'm expect. High
						quality product & flexible price. Recommended!.”
					</p>
					<Link
						href="https://restaurantly-modern-app.netlify.app/"
						target="_blank"
						title="Restaurantly - Modern Restaurant Website"
						className="cursor-pointer text-[14px]">
						Project
					</Link>
				</div>
			</SwiperSlide>

			<SwiperSlide className="slider-container">
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
					<p className="text-[18px] mb-[24px]">
						"Sakib was a real pleasure to work with and we look
						forward to working with him again. He's definitely the
						kind of designer that you can trust with any project
						from A-Z.”
					</p>
					<Link
						href="https://hoo-bank-modern-bank-app.netlify.app"
						target="_blank"
						title="Hoo Bank - Modern Bank App"
						className="cursor-pointer text-[14px]">
						Project
					</Link>
				</div>
			</SwiperSlide>

			<SwiperSlide className="slider-container">
				<div className="client-profile flex gap-3 items-center mb-[35px]">
					<Image
						src="/images/testimonials/testimonials-3.jpg"
						width={45}
						height={45}
						className="rounded-full"
						alt="James Wagner"
					/>
					<div className="flex flex-col justify-start">
						<h6 className="text-[18px]">James Wagner</h6>
						<p className="text-[13px] text-secondary-text">
							Founder & CEO of{' '}
							<span className="text-secondary">Zyratech</span>
						</p>
					</div>
				</div>
				<div className="client-feedback">
					<p className="text-[18px] mb-[24px]">
						"Sakib was an absolute delight to collaborate with, & I
						eagerly anticipate future projects with him. He is
						undoubtedly the type of developer you can entrust with
						any project."
					</p>
					<Link
						href="https://gpt-3-modern.netlify.app"
						target="_blank"
						title="GPT-3 Modern AI Website"
						className="cursor-pointer text-[14px]">
						Project
					</Link>
				</div>
			</SwiperSlide>

			<SwiperSlide className="slider-container">
				<div className="client-profile flex gap-3 items-center mb-[35px]">
					<Image
						src="/images/testimonials/testimonials-4.jpg"
						width={45}
						height={45}
						className="rounded-full"
						alt="Kate Ramsey"
					/>
					<div className="flex flex-col justify-start">
						<h6 className="text-[18px]">Kate Ramsey</h6>
						<p className="text-[13px] text-secondary-text">
							Founder of{' '}
							<span className="text-secondary">
								Kate Industry
							</span>
						</p>
					</div>
				</div>
				<div className="client-feedback">
					<p className="text-[18px] mb-[24px]">
						"Sakib has been an absolute pleasure to work with. His
						development skills are truly top-notch, and they
						consistently delivered beyond our expectations.
						Recommended!"
					</p>
					<Link
						href="https://hoo-bank-modern-bank-app.netlify.app"
						target="_blank"
						title="Hoo Bank - Modern Bank App"
						className="cursor-pointer text-[14px]">
						Project
					</Link>
				</div>
			</SwiperSlide>
		</Swiper>
	);
};
export default Slider;
