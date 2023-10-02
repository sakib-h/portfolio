"use client";
import { useState, useRef } from "react";
const Form = () => {
    // declaring state
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");
    // const [subject, setSubject] = useState("");
    // const [budget, setBudget] = useState("");
    // const [message, setMessage] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        budget: "",
        message: "",
    });

    const [status, setStatus] = useState("");
    const [error, setError] = useState("");
    // declaring ref
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const subjectRef = useRef();
    const budgetRef = useRef();
    const messageRef = useRef();

    // form submit handler
    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("api/contact/route", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                body: JSON.stringify(formData),
            },
        });

        const data = await response.json();
        console.log(data);
        if (data.status === "success") {
            setStatus(data.message);
            setError("");
        } else {
            setStatus("");
            setError(data.message);
        }
    };

    return (
        <form
            action="mailto:sakib100.sa@gmail.com"
            method="post"
            encType="text/plain"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="flex flex-col justify-start gap-2">
                    <div className="flex items-center gap-1">
                        <label htmlFor="full_name">FULL NAME</label>
                        <sup className="text-[0.8rem] text-[#fc4545]">*</sup>
                    </div>
                    <input
                        type="text"
                        name="Full-Name"
                        id="full_name"
                        placeholder="Full Name"
                        required
                        ref={nameRef}
                        onChange={() => {
                            setFormData({
                                ...formData,
                                name: nameRef.current.value,
                            });
                        }}
                    />
                </div>

                <div className="flex flex-col justify-start gap-2">
                    <div className="flex items-center gap-1">
                        <label htmlFor="email">EMAIL</label>
                        <sup className="text-[0.8rem] text-[#fc4545]">*</sup>
                    </div>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter Your Email"
                        required
                        ref={emailRef}
                        onChange={() => {
                            setFormData({
                                ...formData,
                                email: emailRef.current.value,
                            });
                        }}
                    />
                </div>

                <div className="flex flex-col justify-start gap-2">
                    <div className="flex items-center gap-1">
                        <label htmlFor="phone">PHONE</label>
                        <span className="text-[0.8rem] text-secondary-text">
                            (Optional)
                        </span>
                    </div>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Your Phone Number"
                        ref={phoneRef}
                    />
                </div>

                <div className="flex flex-col justify-start gap-2">
                    <div className="flex items-center gap-1">
                        <label htmlFor="text">SUBJECT</label>
                        <sup className="text-[0.8rem] text-[#fc4545]">*</sup>
                    </div>
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        required
                        ref={subjectRef}
                    />
                </div>

                <div className="flex flex-col justify-start gap-2">
                    <div className="flex items-center gap-1">
                        <label htmlFor="budget">YOUR BUDGET</label>
                        <span className="text-[0.8rem] text-secondary-text">
                            (Optional)
                        </span>
                    </div>
                    <input
                        type="number"
                        name="budget"
                        id="budget"
                        min="0"
                        placeholder="Budget for your Project"
                        ref={budgetRef}
                    />
                </div>
            </div>

            <div className="flex flex-col justify-start gap-2 my-[35px]">
                <div className="flex items-center gap-1">
                    <label htmlFor="message">YOUR MESSAGE</label>
                    <span className="text-[0.8rem] text-secondary-text">
                        (Optional)
                    </span>
                </div>
                <textarea
                    name="message"
                    id="message"
                    placeholder="Write your message here ..."
                    className="input-box h-[100px]"
                    wrap="hard"
                    maxLength="1200"
                    ref={messageRef}
                />
            </div>
            <hr className="border-border-color my-20" />
            <button className="bg-secondary hover:bg-transparent flex justify-center items-center text-main hover:text-secondary py-2 px-10 text-[1rem]  rounded-[30px] border-[2px] border-secondary duration-300 ">
                Send Message
            </button>
        </form>
    );
};

export default Form;
