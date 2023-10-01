"use client";
import { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa6";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
const ScrollToTop = () => {
    const [showBtn, setShowBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="fixed bottom-10 right-10">
            <LazyMotion features={domAnimation}>
                <AnimatePresence>
                    {showBtn && (
                        <m.div
                            className="p-3 text-secondary-text bg-main border-[1px] border-border-color rounded-[10px] cursor-pointer text-[1rem]"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 100 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5, type: "spring" }}
                            onClick={goToTop}
                        >
                            <FaAngleUp />
                        </m.div>
                    )}
                </AnimatePresence>
            </LazyMotion>
        </div>
    );
};

export default ScrollToTop;
