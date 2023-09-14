import Image from 'next/image';
import Link from 'next/link';
import {
	AiOutlineTwitter,
	AiOutlineGithub,
	AiOutlineLinkedin,
	AiFillFacebook,
	AiOutlineInstagram,
	AiOutlineMail,
	AiOutlineSetting,
} from 'react-icons/ai';
const Profile = () => {
	return (
		<div className=" my-[15px] p-8 flex flex-col items-center rounded-[30px] border-[1px] border-border-color">
			<div className="top-area w-full flex justify-between items-center">
				<h1 className="text-3xl font-bold">Sakib Hasan</h1>
				<AiOutlineSetting className="text-2xl cursor-pointer" />
			</div>
			<div className="image-area">
				<Image
					src="/images/personal/sakib-hasan.jpg"
					alt="Sakib Hasan"
					width={300}
					height={300}
					quality={100}
					loading="lazy"
					className="my-[15px] rounded-[30px]"
				/>
			</div>
			<div className="bottom-area text-center">
				<h2 className="text-[24px] text-right">MERN Stack Developer</h2>
				<p>sakib100.sa@gmail.com</p>
			</div>
			<div className="icon-group flex justify-between my-[15px]">
				<Link
					className="social-icon"
					href="https://github.com/sakib-h"
					target="_blank"
					title="github">
					<AiOutlineGithub className="profile-icon" />
				</Link>
				<Link
					className="social-icon"
					href="https://www.linkedin.com/in/abdullah-al-sakib/"
					target="_blank"
					title="linkedin">
					<AiOutlineLinkedin className="profile-icon" />
				</Link>
				<Link
					className="social-icon"
					href="https://twitter.com/Sakib_365"
					target="_blank"
					title="twitter">
					<AiOutlineTwitter className="profile-icon" />
				</Link>
				<Link
					className="social-icon"
					href="https://www.facebook.com/sakib.hasan1998/"
					target="_blank"
					title="facebook">
					<AiFillFacebook className="profile-icon" />
				</Link>
				<Link
					className="social-icon"
					href="https://www.instagram.com/__sakibhasan/"
					target="_blank"
					title="instagram">
					<AiOutlineInstagram className="profile-icon" />
				</Link>
			</div>
			<div className="footer-area w-full flex justify-center">
				<button className="w-full bg-secondary flex justify-center items-center text-alternative py-[10px] text-[14px]  rounded-[30px]">
					<AiOutlineMail className=" mr-1" />
					Hire Me
				</button>
			</div>
		</div>
	);
};

export default Profile;
