import Link from "next/link";
const Footer = () => {
    return (
        <footer className="flex justify-center mb-10">
            <p className="text-[14px]">
                Design by
                <em className="text-secondary">
                    {" "}
                    <Link
                        href="https://www.behance.net/nayemhassan"
                        title="Behance"
                        target="_blank"
                    >
                        Nayem Hasan
                    </Link>
                </em>{" "}
                & Developed by{" "}
                <em className="text-secondary">
                    {" "}
                    <Link
                        href="https://github.com/sakib-h"
                        title="Github"
                        target="_blank"
                    >
                        Sakib Hasan
                    </Link>{" "}
                </em>
            </p>
        </footer>
    );
};
export default Footer;
