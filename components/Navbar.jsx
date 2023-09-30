"use client";
import { useState } from "react";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    AiOutlineDatabase,
    AiOutlineHome,
    AiOutlineMail,
    AiOutlineUser,
} from "react-icons/ai";
import { IoBriefcaseOutline } from "react-icons/io5";
import { LiaComment } from "react-icons/lia";
import { MdOutlineWeb } from "react-icons/md";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import ScrollspyNav from "react-scrollspy-nav";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <LazyMotion features={domAnimation}>
            <div className="hidden md:flex md:fixed md:top-[50%] md:translate-y-[-50%] md:right-10">
                <ScrollspyNav
                    scrollTargetIds={[
                        "home",
                        "about",
                        "resume",
                        "skills",
                        "portfolios",
                        "testimonial",
                        "contact",
                    ]}
                    activeNavClass="is-active"
                    scrollDuration="500"
                >
                    <m.nav
                        className="w-max flex flex-col py-[24px] gap-6 items-center border-[1px] border-border-color rounded-[30px]"
                        initial={{ opacity: 0, x: 500 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.3,
                            type: "spring",
                        }}
                    >
                        <Link
                            className="cursor-pointer"
                            href="#home"
                            title="Home"
                        >
                            <AiOutlineHome className="nav-icon" />
                        </Link>

                        <Link
                            className="cursor-pointer"
                            href="#about"
                            title="About"
                        >
                            <AiOutlineUser className="nav-icon" />
                        </Link>
                        <Link
                            className="cursor-pointer"
                            href="#resume"
                            title="Resume"
                        >
                            <IoBriefcaseOutline className="nav-icon" />
                        </Link>

                        <Link
                            className="cursor-pointer"
                            href="#skills"
                            title="Skills"
                        >
                            <MdOutlineWeb className="nav-icon" />
                        </Link>
                        <Link
                            className="cursor-pointer"
                            href="#portfolios"
                            title="Portfolio"
                        >
                            <AiOutlineDatabase className="nav-icon" />
                        </Link>
                        <Link
                            className="cursor-pointer"
                            href="#testimonial"
                            title="Testimonial"
                        >
                            <LiaComment className="nav-icon" />
                        </Link>
                        <Link
                            className="cursor-pointer"
                            href="#contact"
                            title="Contact"
                        >
                            <AiOutlineMail className="nav-icon" />
                        </Link>
                    </m.nav>
                </ScrollspyNav>
            </div>

            {/* Mobile Nav */}
            <div className="md:hidden fixed top-3 right-3 z-[999]">
                <div className="relative">
                    <div className="absolute right-5 top-2 z-50">
                        {open ? (
                            <div
                                className="p-2 rounded-full bg-main border-[1px] border-border-color cursor-pointer text-border-color text-[24px] hover:border-secondary duration-300 group"
                                onClick={() => setOpen(false)}
                            >
                                <RiMenuUnfoldLine
                                    onClick={() => setOpen(true)}
                                    className="group-hover:text-secondary duration-300"
                                />
                            </div>
                        ) : (
                            <div
                                className="p-2 rounded-full bg-main border-[1px] border-border-color cursor-pointer text-border-color text-[24px] hover:border-secondary duration-300 group"
                                onClick={() => setOpen(true)}
                            >
                                <RiMenuFoldLine
                                    onClick={() => setOpen(true)}
                                    className="group-hover:text-secondary duration-300"
                                />
                            </div>
                        )}
                    </div>

                    <AnimatePresence>
                        {open && (
                            <ScrollspyNav
                                scrollTargetIds={[
                                    "home",
                                    "about",
                                    "resume",
                                    "skills",
                                    "portfolios",
                                    "testimonial",
                                    "contact",
                                ]}
                                activeNavClass="is-active"
                                scrollDuration="500"
                            >
                                <m.nav
                                    className="absolute top-20 right-5 max-w-max bg-main flex flex-col py-10 px-5  gap-6 items-start border-[1px] border-border-color rounded-[30px]"
                                    initial={{ opacity: 0, x: 500 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 500 }}
                                    transition={{
                                        duration: 1,
                                        type: "spring",
                                    }}
                                >
                                    <Link
                                        className="flex flex-row gap-2 items-center cursor-pointer"
                                        href="#home"
                                        title="Home"
                                    >
                                        <AiOutlineHome className="nav-icon" />{" "}
                                        Home
                                    </Link>

                                    <Link
                                        className="flex flex-row gap-2 items-center cursor-pointer"
                                        href="#about"
                                        title="About"
                                    >
                                        <AiOutlineUser className="nav-icon" />{" "}
                                        About
                                    </Link>
                                    <Link
                                        className="flex flex-row gap-2 items-center cursor-pointer"
                                        href="#resume"
                                        title="Resume"
                                    >
                                        <IoBriefcaseOutline className="nav-icon" />{" "}
                                        Resume
                                    </Link>

                                    <Link
                                        className="flex flex-row gap-2 items-center cursor-pointer"
                                        href="#skills"
                                        title="Skills"
                                    >
                                        <MdOutlineWeb className="nav-icon" />{" "}
                                        Skills
                                    </Link>
                                    <Link
                                        className="flex flex-row gap-2 items-center cursor-pointer"
                                        href="#portfolios"
                                        title="Portfolio"
                                    >
                                        <AiOutlineDatabase className="nav-icon" />{" "}
                                        Portfolio
                                    </Link>
                                    <Link
                                        className="flex flex-row gap-2 items-center cursor-pointer"
                                        href="#testimonial"
                                        title="Testimonial"
                                    >
                                        <LiaComment className="nav-icon" />{" "}
                                        Testimonial
                                    </Link>
                                    <Link
                                        className="flex flex-row gap-2 items-center cursor-pointer"
                                        href="#contact"
                                        title="Contact"
                                    >
                                        <AiOutlineMail className="nav-icon" />{" "}
                                        Contact
                                    </Link>
                                </m.nav>
                            </ScrollspyNav>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </LazyMotion>
    );
};

export default Navbar;
