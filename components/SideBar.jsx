'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AiOutlineInstagram } from 'react-icons/ai';
import { VscGithubAlt } from 'react-icons/vsc';
import { BiLogoLinkedin } from 'react-icons/bi';
import { FiTwitter } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa';
const SideBar = () => {
	return (
		<motion.div
			className="flex flex-col gap-10 items-center"
			initial={{ opacity: 0, y: 500 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, delay: 1.1, type: 'spring' }}>
			<Link
				href="https://github.com/sakib-h"
				target="_blank"
				title="github">
				<VscGithubAlt className="profile-icon" />
			</Link>
			<Link
				href="https://www.linkedin.com/in/abdullah-al-sakib/"
				target="_blank"
				title="linkedin">
				<BiLogoLinkedin className="profile-icon" />
			</Link>
			<Link
				href="https://twitter.com/Sakib_365"
				target="_blank"
				title="twitter">
				<FiTwitter className="profile-icon" />
			</Link>
			<Link
				href="https://www.facebook.com/sakib.hasan1998/"
				target="_blank"
				title="facebook">
				<FaFacebookF className="profile-icon" />
			</Link>
			<Link
				href="https://www.instagram.com/__sakibhasan/"
				target="_blank"
				title="instagram">
				<AiOutlineInstagram className="profile-icon" />
			</Link>
			<div className="h-[150px] w-[3px] bg-border-color" />
		</motion.div>
	);
};
export default SideBar;
