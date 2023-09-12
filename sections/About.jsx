import { AiOutlineUser } from 'react-icons/ai';
const About = () => {
	return (
		<section
			className="section"
			id="about">
			<div className="section-header">
				<AiOutlineUser className="text-[16px] mr-2" />
				<h4>About</h4>
			</div>
			<div className="mb-[50px]">
				<h1 className="text-[38px] md:text-[42px] lg:text-[48px] font-[300] mb-[50px]">
					In the Realm of the WEB, Every Masterpiece begins with a
					<span className="text-secondary"> Compelling Story</span>
				</h1>
				<p className="text-secondary-text text-[16px]">
					For the past three years, I've been working as a <strong>MERN Stack </strong>
					full-stack developer, tackling various web projects. I've
					had the privilege to be a part of more than <strong>50 Projects </strong>,
					collaborating with startups, agencies, and talented
					individuals. My journey in web development has been filled
					with challenges, but I approach them with quiet confidence
					and a never-ending desire to learn. I've been working on
					both the front-end, using tools like React / Next, and the back-end
					with Node.js, to create dynamic web applications. I'm
					committed to staying up-to-date with the latest trends in
					web development to provide top-notch solutions.
				</p>
			</div>
		</section>
	);
};

export default About;
