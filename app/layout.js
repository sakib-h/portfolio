import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@components/Navbar"));
const SideBar = dynamic(() => import("@components/SideBar"));
const ScrollToTop = dynamic(() => import("@components/ScrollToTop"));
import LoadingProvider from "@providers/LoadingProvider";
import "@styles/globals.css";
import { Inter } from "next/font/google";
export const metadata = {
    title: "sakib-h | Full Stack Developer",
    description: "Personal Portfolio website",
};

const inter = Inter({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
});

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.className}`}>
            <body
                className="min-w-screen min-h-screen bg-main text-primary overflow-x-hidden"
                suppressHydrationWarning={true}
            >
                <main className="container">
                    <LoadingProvider>
                        <div className="w-full relative lg:flex flex-row justify-between items-center">
                            <SideBar />
                            {children}
                            <Navbar />
                            <ScrollToTop />
                        </div>
                    </LoadingProvider>
                </main>
            </body>
        </html>
    );
}
