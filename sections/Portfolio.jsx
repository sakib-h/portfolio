"use client";
import Image from "next/image";
import { AiOutlineDatabase } from "react-icons/ai";
import Link from "next/link";
import { LazyMotion, domAnimation, m } from "framer-motion";
const Portfolio = () => {
    return (
        <section id="portfolios">
            <LazyMotion features={domAnimation}>
                <div className="section-header">
                    <AiOutlineDatabase className="text-[1rem] mr-2" />
                    <h4>Portfolio</h4>
                </div>
                <div className="mb-[3rem]">
                    <h1 className="text-[2.4rem] md:text-[2.6rem] lg:text-[3rem] font-[300] mb-[3rem]">
                        Featured
                        <span className="text-secondary"> Projects</span>
                    </h1>
                    <div className="grid grid-cols-1 gap-10 relative">
                        <m.div
                            className="flex flex-col md:flex-row gap-5 md:items-start  lg:items-center group"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.3,
                                type: "spring",
                            }}
                        >
                            <div className="basis-[40%] xl:basis-[30%]">
                                <Image
                                    src="/images/portfolio/portfolio-2.jpg"
                                    width={500}
                                    height={500}
                                    alt="Restaurantly"
                                    className="rounded-lg shadow-lg w-full h-auto object-contain"
                                />
                            </div>
                            <div className="basis-[60%] xl:basis-[70%] flex flex-col gap-3">
                                <Link
                                    href="https://restaurantly-modern-app.netlify.app/"
                                    className="text-[1.5rem] cursor-pointer group-hover:text-secondary duration-300"
                                    target="_blank"
                                    title="Restaurantly - Modern Restaurant Website"
                                >
                                    Restaurantly - Modern Restaurant Website
                                </Link>
                                <p className="text-[1rem]">
                                    Modern restaurant website, crafted a sleek
                                    and interactive experience using React and
                                    Tailwind CSS. With dynamic animations
                                    powered by Framer Motion, immersive
                                    galleries with Light Gallery, and seamless
                                    media integration through React Player,
                                    we've ensured an engaging visit.
                                </p>
                                <div className="flex flex-wrap">
                                    {[
                                        "React",
                                        "Tailwind CSS",
                                        "Framer-Motion",
                                        "Light Gallery",
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between bg-[rgba(40,233,140,0.1)] text-white rounded-md px-4 py-2 mr-4 mb-4 "
                                        >
                                            <p className="text-[1rem]">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </m.div>

                        <m.div
                            className="flex flex-col md:flex-row gap-5 md:items-start  lg:items-center group"
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.3,
                                type: "spring",
                            }}
                        >
                            <div className="basis-[40%] xl:basis-[30%]">
                                <Image
                                    src="/images/portfolio/portfolio-1.jpg"
                                    width={500}
                                    height={500}
                                    alt="Hoo Bank"
                                    className="rounded-lg shadow-lg w-full h-auto object-contain"
                                />
                            </div>
                            <div className="basis-[60%] xl:basis-[70%] flex flex-col gap-3">
                                <Link
                                    href="https://hoo-bank-modern-bank-app.netlify.app"
                                    className="text-[1.5rem] cursor-pointer group-hover:text-secondary duration-300"
                                    target="_blank"
                                    title="Hoo Bank - Modern Bank App"
                                >
                                    Hoo Bank - Modern Bank App
                                </Link>
                                <p className="text-[1rem]">
                                    Welcome to the future of online banking.
                                    Translated a meticulously designed Figma
                                    prototype into a highly responsive
                                    React-based interface. Our goal is to
                                    provide you with a modern, user-friendly
                                    experience for all your banking needs.
                                    Explore intuitive navigation, polished UI
                                    elements, and a seamless responsive design
                                    that adapts to your device, ensuring an
                                    effortless banking experience.
                                </p>
                                <div className="flex flex-wrap">
                                    {["Vite", "Tailwind CSS"].map(
                                        (item, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center justify-between bg-[rgba(40,233,140,0.1)] text-white rounded-md px-4 py-2 mr-4 mb-4 "
                                            >
                                                <p className="text-[1rem]">
                                                    {item}
                                                </p>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </m.div>

                        <m.div
                            className="flex flex-col md:flex-row gap-5 md:items-start  lg:items-center group"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.3,
                                type: "spring",
                            }}
                        >
                            <div className="basis-[40%] xl:basis-[30%]">
                                <Image
                                    src="/images/portfolio/portfolio-3.jpg"
                                    width={500}
                                    height={500}
                                    alt="GPT-3"
                                    className="rounded-lg shadow-lg w-full h-auto object-contain"
                                />
                            </div>
                            <div className="basis-[60%] xl:basis-[70%] flex flex-col gap-3">
                                <Link
                                    href="https://gpt-3-modern.netlify.app/"
                                    className="text-[1.5rem] cursor-pointer group-hover:text-secondary duration-300"
                                    target="_blank"
                                    title="Hoo Bank - Modern Bank App"
                                >
                                    GPT-3 - Modern AI Platform
                                </Link>
                                <p className="text-[1rem]">
                                    Welcome to the world of CHAT GPT 3, where
                                    artificial intelligence meets intuitive
                                    design. With a Figma blueprint as our guide,
                                    transformed it into a responsive
                                    React-powered interface, ensuring seamless
                                    interaction on any device. Dynamic
                                    animations, courtesy of Framer Motion,
                                    breathe life into our UI, while React Icons
                                    add a touch of flair.
                                </p>
                                <div className="flex flex-wrap">
                                    {[
                                        "Tailwind CSS",
                                        "Framer Motion",
                                        "React Icons",
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between bg-[rgba(40,233,140,0.1)] text-white rounded-md px-4 py-2 mr-4 mb-4 "
                                        >
                                            <p className="text-[1rem]">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </m.div>
                    </div>
                </div>
            </LazyMotion>
        </section>
    );
};

export default Portfolio;
