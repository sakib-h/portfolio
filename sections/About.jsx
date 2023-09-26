'use client'
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { LazyMotion, domAnimation, m  } from 'framer-motion';
const About = () => {
    return (
        <section id="about">
<LazyMotion features={domAnimation}>
            <div className="section-header">
                <AiOutlineUser className="text-[16px] mr-2" />
                <h4>About</h4>
            </div>
            <div>
                <h1 className="text-[38px] md:text-[42px] lg:text-[48px] font-[300] mb-[50px]">
                    In the Realm of the WEB, Every Masterpiece begins with a
                    <span className="text-secondary"> Compelling Story</span>
                </h1>
            </div>
            <div className="mb-[50px] flex flex-col lg:flex-row gap-10 items-center">
                <m.div
                    className="image-area lg:basis-[30%]"
                    whileInView={{ x: [-300,0], opacity:[0,1] }}
                    transition={{duration:0.8, type:'spring'}}
                    >
                    <Image
                        src='/images/personal/sakib-hasan.png'
                        alt="Sakib Hasan"
                        title="Sakib Hasan"
                        width={500}
						height={500}
						loading="lazy"
                        className="rounded-[30px] border-[3px] border-border-color"
                    />
                </m.div>
                <m.div className="lg:basis-[70%]" whileInView={{ x: [300,0], opacity:[0,1] }}
                    transition={{duration:0.8, type:'spring'}}>
                    <div
                        className="flex flex-col gap-5 text-secondary-text text-[16px] mb-[50px]"
                       >
                        <p>
                            For the past three years, I've been working as a{' '}
                            <strong>MERN Stack </strong>
                            Full-Stack developer, tackling various web projects.
                            I've had the privilege to be a part of more than{' '}
                            <strong>50 Projects </strong>, collaborating with
                            startups, agencies, and talented individuals.
                        </p>
                        <p>
                            My journey in web development has been filled with
                            Challenges, but I approach them with quiet
                            confidence and a never-ending desire to learn. I've
                            been working on both the <strong>Front-End</strong>,
                            using tools like React / Next, and the{' '}
                            <strong>Back-End</strong> with Node.js, to create
                            dynamic web applications.
                        </p>
                    </div>
                    <div className="button">
                        <Link
                            className="max-w-max flex justify-center items-center text-alternative text-[16px] font-[400] rounded-[30px] py-2 px-10 bg-secondary hover:bg-transparent  hover:text-secondary  border-[2px] border-secondary duration-300 gap-2"
                            href="https://www.fiverr.com/s/z5jw2R"
                            target="_blank">
                            <AiOutlineMail />
                            Hire Me
                        </Link>
                    </div>
                </m.div>
            </div>

            </LazyMotion>
        </section>
    );
};

export default About;
