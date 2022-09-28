import Image from 'next/image';
import Link from 'next/link';
import {
	AiOutlineTwitter,
	AiOutlineGithub,
	AiOutlineLinkedin,
	AiFillFacebook,
	AiOutlineInstagram,
	AiOutlineMail,
} from 'react-icons/ai';
const Profile = () => {
	return (
		<div className="max-w-[767px] my-[15px]  p-8 flex flex-col items-center rounded-[30px] border-[1px] border-[#565656]">
			<div className="top-area w-full flex justify-between items-start">
				<h1 className="text-4xl font-bold">Sakib-H</h1>
			</div>
			<div className="image-area">
				<Image
					src="/images/personal/sakib-hasan.jpg"
					alt="Sakib Hasan"
					width={300}
					height={300}
					quality={100}
					className="my-[15px] rounded-[30px]"
				/>
			</div>
			<div className="bottom-area text-center">
				<h2 className="text-[24px] text-right">MERN Stack Developer</h2>
				<p>sakib100.sa@gmail.com</p>
			</div>
			<div className="icon-group flex justify-between my-[15px]">
				<Link
					className="icon"
					href="https://github.com/sakib-h"
					target="_blank">
					<AiOutlineGithub className="profile-icon" />
				</Link>
				<Link
					className="icon"
					href="https://www.linkedin.com/in/abdullah-al-sakib/"
					target="_blank">
					<AiOutlineLinkedin className="profile-icon" />
				</Link>
				<Link
					className="icon"
					href="https://twitter.com/Sakib_365"
					target="_blank">
					<AiOutlineTwitter className="profile-icon" />
				</Link>
				<Link
					className="icon"
					href="https://www.facebook.com/sakib.hasan1998/"
					target="_blank">
					<AiFillFacebook className="profile-icon" />
				</Link>
				<Link
					className="icon"
					href="https://www.instagram.com/__sakibhasan/"
					target="_blank">
					<AiOutlineInstagram className="profile-icon" />
				</Link>
			</div>
			<div className="footer-area w-full bg-[#28e98c] flex justify-center rounded-[30px]">
				<button className="flex justify-center items-center text-[#000] py-[10px] ">
					<AiOutlineMail />
					Hire Me
				</button>
			</div>
		</div>
	);
};

export default Profile;
