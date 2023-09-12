import Image from 'next/image';
import { MdOutlineWeb } from 'react-icons/md';

const Skills = () => {
	const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next", "Node", "Express", "Mongo DB", "Responsive Design", "Tailwind CSS", "Bootstrap", "Git", "GitHub", "Netlify", "Firebase", "Figma",]
	return (
		<section
			id="skills"
			className="section">
			<div className="section-header">
				<MdOutlineWeb className="text-[16px] mr-2" />
				<h4>Skills</h4>
			</div>

			<div className="mb-[50px]">
				<h1 className="text-[38px] md:text-[42px] lg:text-[48px] font-[300] mb-[50px]">
					Get to
					<span className="text-secondary"> Know Me</span>
				</h1>
				<p className="text-secondary-text text-[16px] mb-[30px]">As a MERN (MongoDB, Express.js, React, Node.js) stack developer, I possess a comprehensive skill set to create robust and <strong>Dynamic Web Applications</strong>. My proficiency in MongoDB allows me to design <strong>Efficient</strong> and <strong>Scalable</strong> databases, while Express.js enables me to build <strong>Secure</strong> and seamless back-end systems. With React & Next, I craft intuitive and interactive user interfaces, providing a rich and <strong>engaging</strong> front-end experience. Additionally, my expertise in Node.js empowers me to develop fast and scalable server-side applications, ensuring smooth communication between the front-end and back-end. I am adept at leveraging the full potential of the MERN stack to deliver <strong>High-Quality</strong>, <strong>Performance-Driven</strong> web solutions tailored to meet the unique needs of each project. Through a combination of strong <strong>Problem-Solving</strong> skills and a deep understanding of modern web development practices, I excel in creating applications that not only meet client expectations but also exceed them in terms of <strong>Functionality</strong>, <strong>Usability</strong>, and <strong>Aesthetics</strong>.</p>

				<h3 className="text-[24px] mb-5">Skill and <span className="text-secondary"> Expertise</span> </h3>

				<div className="flex flex-wrap">
					{skills.map((skill, index) => (
						<div key={index} className="flex items-center justify-center bg-[rgba(40,233,140,0.1)] text-white rounded-md px-4 py-2 mr-4 mb-4 ">
							<p className="text-[16px]">{skill}</p>
						</div>
					))}
				</div>
			</div>

		</section>
	);
};

export default Skills;
