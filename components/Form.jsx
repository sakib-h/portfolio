"use client";
import { useState, useRef } from "react";
const Form = () => {
    // declaring state
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
        const response = await fetch("api/contact", {
            method: "POST",
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (data.status === "success") {
            setStatus(data.message);
            setError("");
        } else {
            setStatus("");
            setError(data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
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
                                name: nameRef.current.value, //getting value from ref and setting it to state
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
                                email: emailRef.current.value, //getting value from ref and setting it to state
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
                        onChange={() => {
                            setFormData({
                                ...formData,
                                phone: phoneRef.current.value, //getting value from ref and setting it to state
                            });
                        }}
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
                        onChange={() => {
                            setFormData({
                                ...formData,
                                subject: subjectRef.current.value, //getting value from ref and setting it to state
                            });
                        }}
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
                        onChange={() => {
                            setFormData({
                                ...formData,
                                budget: String(budgetRef.current.value), //getting value from ref and setting it to state
                            });
                        }}
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
                    onChange={() => {
                        setFormData({
                            ...formData,
                            message: messageRef.current.value, //getting value from ref and setting it to state
                        });
                    }}
                />
            </div>
            <hr className="border-border-color my-20" />
            <button
                type="submit"
                className="bg-secondary hover:bg-transparent flex justify-center items-center text-main hover:text-secondary py-2 px-10 text-[1rem]  rounded-[30px] border-[2px] border-secondary duration-300 "
            >
                Send Message
            </button>

            <p>{status}</p>
        </form>
    );
};

export default Form;
