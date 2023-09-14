import Expertise from '@components/Expertise';
import Image from 'next/image';
import { MdOutlineWeb } from 'react-icons/md';

const Skills = () => {
	const languages = ['JavaScript', 'TypeScript', 'Python', 'PHP'];
	const frontend = [
		'HTML',
		'CSS',
		'React',
		'Next',
		'Tailwind CSS',
		'Bootstrap',
		'Redux',
	];
	const backend = ['Node', 'Express', 'Mongo DB', 'Firebase'];
	const tools = ['Git', 'GitHub', 'Netlify', 'Figma', 'Sketch'];
	return (
		<section
			id="skills"
			className="section">
			<div className="section-header">
				<MdOutlineWeb className="text-[16px] mr-2" />
				<h4>Skills</h4>
			</div>

			<div className="mb-[50px]">
				<div>
					<h1 className="text-[38px] md:text-[42px] :text-[48px] font-[300] mb-[50px]">
						Get to
						<span className="text-secondary"> Know Me</span>
					</h1>
					<div className="text-secondary-text text-[16px] mb-[30px]">
						<p className="mb-10">
							As a MERN (MongoDB, Express.js, React, Node.js)
							stack developer, I possess a comprehensive skill set
							to create robust and{' '}
							<strong>Dynamic Web Applications</strong>.
						</p>
						<div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
							<div className="border-[1px] border-border-color rounded-[10px] px-5 py-10 group">
								<h4 className="text-lg text-primary mb-5 group-hover:text-secondary duration-300">
									Proficiency in MongoDB and Express.js
								</h4>
								<p>
									My proficiency in MongoDB allows me to
									design <strong>Efficient</strong> and{' '}
									<strong>Scalable</strong> databases, while
									Express.js enables me to build{' '}
									<strong>Secure</strong> and seamless
									back-end systems.
								</p>
							</div>
							<div className="border-[1px] border-border-color rounded-[10px] px-5 py-10 group">
								<h4 className="text-lg text-primary mb-5 group-hover:text-secondary duration-300">
									Crafting Intuitive UI with React & Next
								</h4>
								<p>
									With React & Next, I craft intuitive and
									interactive user interfaces, providing a
									rich and <strong>engaging</strong> front-end
									experience.
								</p>
							</div>
							<div className="border-[1px] border-border-color rounded-[10px] px-5 py-10 group">
								<h4 className="text-lg text-primary mb-5 group-hover:text-secondary duration-300">
									Expertise in Node.js for Server-Side
									Applications
								</h4>
								<p>
									My expertise in Node.js empowers me to
									develop fast and scalable server-side
									applications, ensuring smooth communication
									between the front-end and back-end.
								</p>
							</div>
							<div className="border-[1px] border-border-color rounded-[10px] px-5 py-10 group">
								<h4 className="text-lg text-primary mb-5 group-hover:text-secondary duration-300">
									Delivering High-Quality MERN Stack Solutions
								</h4>
								<p>
									I am adept at leveraging the full potential
									of the MERN stack to deliver{' '}
									<strong>High-Quality</strong>,{' '}
									<strong>Performance-Driven</strong> web
									solutions tailored to meet the unique needs
									of each project.
								</p>
							</div>
							<div className="border-[1px] border-border-color rounded-[10px] px-5 py-10 group">
								<h4 className="text-lg text-primary mb-5 group-hover:text-secondary duration-300">
									Strong Problem-Solving Skills
								</h4>
								<p>
									Through a combination of strong
									<strong> Problem-Solving</strong> skills and
									a deep understanding of modern web
									development practices, I excel in creating
									applications that not only meet client
									expectations but also exceed them in terms
									of <strong>Functionality</strong>,
									<strong> Usability</strong>, and
									<strong> Aesthetics</strong>.
								</p>
							</div>
							<div className="border-[1px] border-border-color rounded-[10px] px-5 py-10 group">
								<h4 className="text-lg text-primary mb-5 group-hover:text-secondary duration-300">
									Proficient in using Git and GitHub
								</h4>
								<p>
									I am proficient in using Git and GitHub for
									version control and collaborative
									development. This enables me to effectively
									manage code repositories, track changes, and
									work seamlessly in team environments,
									ensuring smooth project workflows.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div>
					<h3 className="text-[24px] mb-5">
						Skill and{' '}
						<span className="text-secondary"> Expertise</span>{' '}
					</h3>
					<Expertise
						title="Programming Languages"
						data={languages}
					/>

					<Expertise
						title="Front-End"
						data={frontend}
					/>

					<Expertise
						title="Backend"
						data={backend}
					/>

					<Expertise
						title="Tools"
						data={tools}
					/>
				</div>
			</div>
		</section>
	);
};

export default Skills;
