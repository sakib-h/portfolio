import Profile from '@components/Profile';
import '@styles/globals.css';
import { Inter } from 'next/font/google';
export const metadata = {
	title: 'sakib-h | Full Stack Developer',
	description: 'Personal Portfolio website',
};

const inter = Inter({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
});

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={inter.className}>
			<body className="min-w-screen min-h-screen bg-[#1f1f1f] text-[#fff]">
				<div className="container">
					<section className="lg:flex flex-row justify-between ">
						<div className="">
							<Profile />
						</div>
						<div className="">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Expedita, nihil.
						</div>
						<div className="">Lorem.</div>
					</section>
				</div>
			</body>
		</html>
	);
}
