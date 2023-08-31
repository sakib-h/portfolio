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
			<body className="min-w-screen min-h-screen bg-main text-primary">
				<div className="container">
					<section className="w-full h-full relative md:flex flex-row justify-between items-center">
						<div className="md:fixed md:top-[50%] md:translate-y-[-50%]">
							<Profile />
						</div>
						<div className=""></div>
						<div className=""></div>
					</section>
				</div>
			</body>
		</html>
	);
}
