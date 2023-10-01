"use client";
import { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa6";
import { LazyMotion, domAnimation, m } from "framer-motion";
const ScrollToTop = () => {
    return (
        <div className="fixed bottom-10 right-10">
            <LazyMotion features={domAnimation}>
                <m.div
                    className="p-3 text-secondary-text bg-main border-[1px] border-border-color rounded-[10px] cursor-pointer text-[20px]"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3, type: "spring" }}
                >
                    <FaAngleUp />
                </m.div>
            </LazyMotion>
        </div>
    );
};

export default ScrollToTop;
