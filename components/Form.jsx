"use client";
import { useState, useRef } from "react";
import { MdOutlineClose } from "react-icons/md";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
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
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(false);
    const [error, setError] = useState(false);
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
        setLoading(true);
        const response = await fetch("api/contact", {
            method: "POST",
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (data.status === "success") {
            setLoading(false);
            setStatus(true);
            setError(false);
            setMessage(data.message);
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                budget: "",
                message: "",
            });
        } else {
            setLoading(false);
            setStatus(false);
            setError(true);
            setMessage(data.message);
        }
    };
    const handleClose = () => {
        setError(false);
        setStatus(false);
        setMessage("");
    };

    return (
        <LazyMotion features={domAnimation}>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="flex flex-col justify-start gap-2">
                        <div className="flex items-center gap-1">
                            <label htmlFor="full_name">FULL NAME</label>
                            <sup className="text-[0.8rem] text-[#fc4545]">
                                *
                            </sup>
                        </div>
                        <input
                            type="text"
                            name="Full-Name"
                            id="full_name"
                            placeholder="Full Name"
                            required
                            ref={nameRef}
                            value={formData.name}
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
                            <sup className="text-[0.8rem] text-[#fc4545]">
                                *
                            </sup>
                        </div>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter Your Email"
                            required
                            ref={emailRef}
                            value={formData.email}
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
                            value={formData.phone}
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
                            <sup className="text-[0.8rem] text-[#fc4545]">
                                *
                            </sup>
                        </div>
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            placeholder="Subject"
                            required
                            ref={subjectRef}
                            value={formData.subject}
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
                            value={formData.budget}
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
                        value={formData.message}
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
            </form>
            <AnimatePresence>
                {error && (
                    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[99]">
                        <m.div
                            className="relative max-w-max px-20 py-10 bg-[#ffffff] rounded-[10px]"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ duration: 0.5, type: "spring" }}
                        >
                            <p className="text-red-700 text-base">{message}</p>

                            <button
                                className="absolute top-2 right-2 z-[999]"
                                onClick={handleClose}
                            >
                                <MdOutlineClose className="text-main text-[1.5rem]" />
                            </button>
                        </m.div>
                    </div>
                )}
                {status && (
                    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[99]">
                        <m.div
                            className="relative max-w-max px-20 py-10 bg-[#ffffff] rounded-[10px]"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ duration: 0.5, type: "spring" }}
                        >
                            <p className="text-main text-base">{message}!</p>

                            <button
                                className="absolute top-2 right-2 z-[999]"
                                onClick={handleClose}
                            >
                                <MdOutlineClose className="text-main text-[1.5rem]" />
                            </button>
                        </m.div>
                    </div>
                )}
                {loading && (
                    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[99]">
                        <div className="min-h-screen flex justify-center items-center">
                            <span className="loader" />
                        </div>
                    </div>
                )}
            </AnimatePresence>
        </LazyMotion>
    );
};

export default Form;
