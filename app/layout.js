import Navbar from '@components/Navbar';
import Profile from '@components/Profile';
import '@styles/globals.css';
import { Inter } from 'next/font/google';
export const metadata = {
	title: 'sakib-h | Full Stack Developer',
	description: 'Personal Portfolio website',
};

const inter = Inter({
	weight: ['300','400', '500', '600', '700'],
	subsets: ['latin'],
});

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={inter.className}>
			<body
				className="min-w-screen min-h-screen  bg-main text-primary overflow-x-hidden"
				suppressHydrationWarning={true}>
				<main className="container">
					<section className="w-full relative md:flex flex-row justify-between items-center">
						<div className="md:fixed md:top-[50%] md:translate-y-[-50%]">
							<Profile />
						</div>
						<div className="md:ml-[500px] md:mr-[100px]">
							{children}
						</div>
						<div className="hidden md:inline-block md:fixed md:top-[50%] md:translate-y-[-50%] md:right-10">
							<Navbar />
						</div>
					</section>
				</main>
			</body>
		</html>
	);
}
