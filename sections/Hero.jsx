"use client";
import { useState } from "react";
import Counter from "@components/Counter";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import Typewriter from "typewriter-effect";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";

const Hero = () => {
    // state for error handling
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    // download resume function
    const handleDownload = async () => {
        try {
            const response = await fetch("/files/resume.pdf");
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "resume.pdf";
            a.style.display = "none";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        } catch (error) {
            setError(true);
            setErrorMessage(error.message);
        }
    };
    // modal close function
    const handleClose = () => {
        setError(false);
        setErrorMessage("");
    };
    return (
        <section id="home">
            <LazyMotion features={domAnimation}>
                <m.div
                    className="section-header"
                    initial={{ y: -300, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                >
                    <AiOutlineHome className="text-[1rem] mr-2" />
                    <h4>Introduction</h4>
                </m.div>
                <m.div
                    className="mb-[100px]"
                    initial={{ x: -1000, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                >
                    <div className="flex flex-col gap-16 justify-start">
                        <h1 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem]  xl:text-[4rem] font-[300]">
                            Hello, I'm{" "}
                            <em className="text-secondary font-[500]">
                                Sakib Hasan
                            </em>{" "}
                            <br />
                            <Typewriter
                                options={{
                                    strings: [
                                        "Full Stack Developer",
                                        "Competitive Programmer",
                                        "Open-Source Enthusiast",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    changeDelay: 300,
                                }}
                            />
                        </h1>

                        <p className="text-secondary-text text-[1rem]">
                            Passionate MERN stack developer with expertise in
                            building robust, scalable, and interactive web
                            applications. Proficient in MongoDB, Express.js,
                            React, and Node.js. Let's turn your ideas into
                            dynamic digital solutions!
                        </p>

                        <div className="button">
                            <button
                                className="max-w-max  text-main text-[1rem] font-[400] rounded-[30px] py-2 px-10 bg-secondary hover:bg-transparent  hover:text-secondary  border-[2px] border-secondary duration-300 gap-2 "
                                onClick={handleDownload}
                            >
                                Download Resume
                            </button>
                        </div>
                    </div>
                </m.div>
                <m.div
                    className="flex flex-col lg:flex-row justify-between gap-10 items-center mb-[1rem] md:mb-[2rem] lg:mb-[3rem]"
                    initial={{ x: 1000, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                >
                    <div className="w-full grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4  gap-10 items-center">
                        <Counter value="3" title="Years of Experience" />
                        <Counter value="150" title="Hours of Code Time" />
                        <Counter value="50" title="Projects Completed" />
                        <Counter value="20" title="Happy Clients" />
                    </div>
                </m.div>
                <AnimatePresence>
                    {error && (
                        <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[99]">
                            <m.div
                                className="relative max-w-max px-20 py-10 bg-[#ffffff] rounded-[10px]"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                transition={{ duration: 0.5, type: "spring" }}
                            >
                                <p className="text-red-700 text-base">
                                    {errorMessage}
                                </p>
                                <button
                                    className="absolute top-2 right-2 z-[999]"
                                    onClick={handleClose}
                                >
                                    <MdOutlineClose className="text-main text-[1.5rem]" />
                                </button>
                            </m.div>
                        </div>
                    )}
                </AnimatePresence>
            </LazyMotion>
        </section>
    );
};

export default Hero;
