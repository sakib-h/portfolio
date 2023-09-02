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
					<section className="w-full relative lg:flex flex-row justify-between items-center">
						<div className="lg:fixed lg:top-[50%] lg:translate-y-[-50%]">
							<Profile />
						</div>
						<div className="lg:ml-[500px] lg:mr-[100px]">
							{children}
						</div>
						<div className="hidden lg:inline-block lg:fixed lg:top-[50%] lg:translate-y-[-50%] lg:right-10">
							<Navbar />
						</div>
					</section>
				</main>
			</body>
		</html>
	);
}
