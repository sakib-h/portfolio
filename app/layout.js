import Navbar from '@components/Navbar';
import Profile from '@components/Profile';
import SideBar from '@components/SideBar';
import '@styles/globals.css';
import { Inter } from 'next/font/google';
export const metadata = {
	title: 'sakib-h | Full Stack Developer',
	description: 'Personal Portfolio website',
};

const inter = Inter({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
});

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={`${inter.className}`}>
			<body
				className="min-w-screen min-h-screen bg-main text-primary overflow-x-hidden"
				suppressHydrationWarning={true}>
				<main className="container">
					<div className="w-full relative lg:flex flex-row justify-between items-center">
						<div className="hidden md:flex md:fixed md:bottom-0 md:left-10">
							<SideBar />
						</div>
						<div className="w-full md:w-[80%] xl:w-[70%] md:mx-auto overflow-hidden">
							{children}
						</div>
						<div className="hidden md:flex md:fixed md:top-[50%] md:translate-y-[-50%] md:right-10">
							<Navbar />
						</div>
					</div>
				</main>
			</body>
		</html>
	);
}
