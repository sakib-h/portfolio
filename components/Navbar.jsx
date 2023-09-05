import Link from 'next/link';
import {
	AiOutlineHome,
	AiOutlineUser,
	AiOutlineDatabase,
	AiOutlineMail,
} from 'react-icons/ai';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { GoProjectRoadmap } from 'react-icons/go';
import { MdOutlineWeb } from 'react-icons/md';
import { LiaComment } from 'react-icons/lia';
const Navbar = () => {
	return (
		<nav className="w-max flex flex-col py-[24px] gap-6 items-center border-[1px] border-border-color rounded-[30px]">
			<Link
				className="cursor-pointer"
				href="/"
				id="#home"
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
				href="#services"
				title="Services">
				<GoProjectRoadmap className="nav-icon" />
			</Link>
			<Link
				className="cursor-pointer"
				href="#skills"
				title="Skills">
				<MdOutlineWeb className="nav-icon" />
			</Link>
			<Link
				className="cursor-pointer"
				href="#portfolios"
				title="Portfolios">
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
	);
};

export default Navbar;
