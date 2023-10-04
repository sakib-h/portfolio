import Form from "@components/Form";
import { AiOutlineMail } from "react-icons/ai";
const Contact = () => {
    return (
        <section id="contact">
            <div className="section-header">
                <AiOutlineMail className="text-[1rem] mr-2" />
                <h4>Contact</h4>
            </div>
            <div className="mb-[1rem] md:mb-[2rem] lg:mb-[3rem]">
                <h1 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-[300] mb-[1rem] md:mb-[2rem] lg:mb-[3rem]">
                    Let's Work
                    <span className="text-secondary"> Together!</span>
                </h1>
                <h3 className="text-[1.5rem] mb-[1rem] md:mb-[2rem] lg:mb-[3rem]">
                    sakib100.sa@gmail.com
                </h3>
                <div>
                    <Form />
                </div>
            </div>
        </section>
    );
};
export default Contact;
