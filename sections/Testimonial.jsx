'use client';
import { LiaComment } from 'react-icons/lia';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
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

			<div>
				<Swiper>
					<SwiperSlide>Slide 1</SwiperSlide>
					<SwiperSlide>Slide 2</SwiperSlide>
					<SwiperSlide>Slide 3</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
};
export default Testimonial;
