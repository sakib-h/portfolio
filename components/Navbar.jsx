'use client';
import Link from 'next/link';
import {
	AiOutlineHome,
	AiOutlineUser,
	AiOutlineDatabase,
	AiOutlineMail,
} from 'react-icons/ai';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { MdOutlineWeb } from 'react-icons/md';
import { LiaComment } from 'react-icons/lia';
import ScrollspyNav from 'react-scrollspy-nav';

const Navbar = () => {
	return (
		<ScrollspyNav
			scrollTargetIds={[
				'home',
				'about',
				'resume',
				'skills',
				'portfolio',
				'testimonials',
				'contract',
			]}
			activeNavClass="is-active"
			scrollDuration="500">
			<nav className="w-max flex flex-col py-[24px] gap-6 items-center border-[1px] border-border-color rounded-[30px]">
				<Link
					className="cursor-pointer"
					href="#home"
					title="Home">
					<AiOutlineHome className="nav-icon" />
				</Link>

				<Link
					className="cursor-pointer"
					href="#about"
					title="About">
					<AiOutlineUser className="nav-icon" />
				</Link>
				<Link
					className="cursor-pointer"
					href="#resume"
					title="Resume">
					<IoBriefcaseOutline className="nav-icon" />
				</Link>

				<Link
					className="cursor-pointer"
					href="#skills"
					title="Skills">
					<MdOutlineWeb className="nav-icon" />
				</Link>
				<Link
					className="cursor-pointer"
					href="#portfolio"
					title="Portfolio">
					<AiOutlineDatabase className="nav-icon" />
				</Link>
				<Link
					className="cursor-pointer"
					href="#testimonials"
					title="Testimonials">
					<LiaComment className="nav-icon" />
				</Link>
				<Link
					className="cursor-pointer"
					href="#contract"
					title="Contract">
					<AiOutlineMail className="nav-icon" />
				</Link>
			</nav>
		</ScrollspyNav>
	);
};

export default Navbar;
