"use client";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Link from "next/link";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoDiscordAlt, BiLogoLinkedin } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { LiaTelegramPlane } from "react-icons/lia";
import { VscGithubAlt } from "react-icons/vsc";
const SideBar = () => {
    return (
        <LazyMotion features={domAnimation}>
            <m.div
                className="hidden md:flex md:fixed bottom-0 md:left-10 flex-col gap-6 items-center"
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1, type: "spring" }}
            >
                <p className="text-[0.8rem] text-secondary-text rotate-90 mb-6">
                    Follow Me
                </p>
                <Link
                    href="https://github.com/sakib-h"
                    target="_blank"
                    title="Github"
                >
                    <VscGithubAlt className="sidebar-icon" />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/abdullah-al-sakib/"
                    target="_blank"
                    title="Linkedin"
                >
                    <BiLogoLinkedin className="sidebar-icon" />
                </Link>
                <Link
                    href="https://twitter.com/Sakib_365"
                    target="_blank"
                    title="Twitter"
                >
                    <FiTwitter className="sidebar-icon" />
                </Link>
                <Link
                    href="https://www.facebook.com/sakib.hasan1998/"
                    target="_blank"
                    title="Facebook"
                >
                    <FaFacebookF className="sidebar-icon" />
                </Link>
                <Link
                    href="https://www.instagram.com/__sakibhasan/"
                    target="_blank"
                    title="Instagram"
                >
                    <AiOutlineInstagram className="sidebar-icon" />
                </Link>
                <Link
                    href="https://discord.gg/HPkkKEwn"
                    target="_blank"
                    title="Discord"
                >
                    <BiLogoDiscordAlt className="sidebar-icon" />
                </Link>
                <Link
                    href="https://t.me/sakib_ha"
                    target="_blank"
                    title="Telegram"
                >
                    <LiaTelegramPlane className="sidebar-icon" />
                </Link>
                <div className="h-[75px] w-[3px] bg-border-color" />
            </m.div>
        </LazyMotion>
    );
};
export default SideBar;
