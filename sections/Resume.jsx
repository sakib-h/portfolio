"use client";
import { IoBriefcaseOutline } from "react-icons/io5";
import { LazyMotion, domAnimation, m } from "framer-motion";
const Resume = () => {
    const animateFromLeft = {
        initial: {
            x: 100,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.3,
                duration: 0.8,
                type: "spring",
            },
        },
    };
    const animateFromRight = {
        initial: {
            x: -100,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.3,
                duration: 0.8,
                type: "spring",
            },
        },
    };

    return (
        <section id="resume">
            <LazyMotion features={domAnimation}>
                <div className="section-header">
                    <IoBriefcaseOutline className="text-[1rem] mr-2" />
                    <h4>Resume</h4>
                </div>
                <div className="mb-[1rem] md:mb-[2rem] lg:mb-[3rem]">
                    <h1 className="text-[2.4rem] md:text-[2.6rem] lg:text-[3rem] font-[300] mb-[1rem] md:mb-[2rem] lg:mb-[3rem]">
                        Education &
                        <span className="text-secondary"> Experience</span>
                    </h1>
                </div>
                <div className="grid gap-4 grid-cols-12 mb-10">
                    <div className="col-span-12 xl:col-span-2">
                        <div className="text-left mb-4 before:block before:w-24 before:h-[3px] before:mb-3 before:rounded-sm  before:bg-secondary">
                            <h3 className="text-[1.2rem] text-secondary-text">
                                Experience
                            </h3>
                        </div>
                    </div>
                    <div className="col-span-12 xl:col-span-10 gap-10">
                        <m.div
                            className="relative ml-[5px] xl:ml-0 border-l-[1px] border-[#333333] group mb-5"
                            initial="initial"
                            whileInView="animate"
                            variants={animateFromLeft}
                        >
                            <div className="pl-10 before:block before:absolute before:left-[-5px] before:top-0 before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#656565] group-hover:before:bg-secondary duration-300">
                                <h2 className="text-2xl group-hover:text-secondary duration-300">
                                    FULL STACK DEVELOPER
                                </h2>
                                <p className="text-secondary-text text-[0.8rem] my-4">
                                    DEC 2020 – PRESENT
                                </p>
                                <ul className="text-secondary-text text-[1rem] ml-[14px] list-disc">
                                    <li>
                                        Code Full Stack project using HTML, CSS,
                                        Bootstrap, JavaScript, React.js,
                                        Next.js, Node.js, Firebase, MongoDB,
                                        Express.js and Tailwind CSS to develop
                                        features for both mobile and desktop
                                        platforms.
                                    </li>
                                    <li>
                                        Tested web-based product functionality
                                        and delivered iterations to customers.
                                    </li>
                                    <li>
                                        Design and update layouts to meet
                                        usability and performance requirements.
                                    </li>
                                    <li>
                                        Produced websites compatible with
                                        multiple browsers.
                                    </li>
                                </ul>
                            </div>
                        </m.div>

                        <m.div
                            className="relative ml-[5px] xl:ml-0 border-l-[1px] border-[#333333] group"
                            initial="initial"
                            whileInView="animate"
                            variants={animateFromRight}
                        >
                            <div className="pl-10 before:block before:absolute before:left-[-5px] before:top-0 before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#656565] group-hover:before:bg-secondary duration-300">
                                <h2 className="text-2xl group-hover:text-secondary duration-300">
                                    GRAPHICS DESIGNER
                                </h2>
                                <p className="text-secondary-text text-[0.8rem] my-4">
                                    JUNE 2019 – PRESENT
                                </p>
                                <ul className="text-secondary-text text-[1rem] ml-[14px] list-disc">
                                    <li>
                                        Created digital image files for use in
                                        digital and traditional printing
                                        methods.
                                    </li>
                                    <li>
                                        Contributed design ideas in early
                                        planning stages with customers and
                                        project managers.
                                    </li>
                                    <li>
                                        Designed creative digital displays used
                                        in online advertising for local
                                        businesses.
                                    </li>
                                    <li>
                                        Researched trends and projected industry
                                        changes to capitalize on emerging
                                        opportunities
                                    </li>
                                    <li>
                                        Met with customers to present mockups
                                        and collect information for adjustments.
                                    </li>
                                    <li>
                                        Worked with clients to gather and define
                                        requirements, establish scopes and
                                        manage project milestones.
                                    </li>
                                </ul>
                            </div>
                        </m.div>
                    </div>
                </div>

                <div className="grid gap-4 grid-cols-12 mb-[1rem] md:mb-[2rem] lg:mb-[3rem]">
                    <div className="col-span-12 xl:col-span-2">
                        <div className="text-left mb-4 before:block before:w-24 before:h-[3px] before:mb-3 before:rounded-sm  before:bg-secondary">
                            <h3 className="text-[1.2rem] text-secondary-text">
                                Education
                            </h3>
                        </div>
                    </div>
                    <div className="col-span-12 xl:col-span-10">
                        <m.div
                            className="relative ml-[5px] xl:ml-0 border-l-[1px] border-[#333333] group"
                            initial="initial"
                            whileInView="animate"
                            variants={animateFromLeft}
                        >
                            <div className="pl-10 before:block before:absolute before:left-[-5px] before:top-0 before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#656565] group-hover:before:bg-secondary duration-300">
                                <h2 className="text-2xl group-hover:text-secondary duration-300">
                                    B. SC. IN COMPUTER SCIENCE & ENGINEERING
                                </h2>
                                <p className="text-secondary-text text-[0.8rem] my-4">
                                    2022 - PRESENT
                                </p>
                                <div className="flex flex-col gap-2 justify-start text-secondary-text text-[1rem]">
                                    <em>DAFFODIL INTERNATIONAL UNIVERSITY</em>
                                    <span>CGPA 3.42</span>
                                </div>
                            </div>
                        </m.div>
                    </div>
                </div>
            </LazyMotion>
        </section>
    );
};

export default Resume;
