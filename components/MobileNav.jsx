"use client";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import {
    AiOutlineDatabase,
    AiOutlineHome,
    AiOutlineMail,
    AiOutlineUser,
} from "react-icons/ai";
import { IoBriefcaseOutline } from "react-icons/io5";
import { LiaComment } from "react-icons/lia";
import { MdOutlineWeb, MdMenuOpen } from "react-icons/md";
import ScrollspyNav from "react-scrollspy-nav";
const MobileNav = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="relative">
            <LazyMotion features={domAnimation}>
                <MdMenuOpen
                    layout
                    onClick={() => setOpen((prev) => !prev)}
                    className={`${
                        open ? "rotate-180" : "rotate-0"
                    } absolute right-2 top-2 text-[32px] text-secondary-text cursor-pointer z-50`}
                />
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
                                className="absolute top-20 right-2 w-max flex flex-col py-[24px] gap-6 items-center border-[1px] border-border-color rounded-[30px]"
                                initial={{ opacity: 0, x: 500 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 500 }}
                                transition={{
                                    duration: 0.8,
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
                    )}
                </AnimatePresence>
            </LazyMotion>
        </div>
    );
};
export default MobileNav;
