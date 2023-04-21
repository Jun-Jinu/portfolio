import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const ScrollButton = styled.button`
    position: fixed;
    bottom: 50px;
    right: 50px;
    background-color: #007bff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    z-index: 999;

    &:hover {
        background-color: #0069d9;
    }
`;
const ArrowIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        <path
            d="M8.467 16.933L0 8.467 8.467 0M.085 8.467L19.918 8.534"
            transform="rotate(90 9.5 24)"
        ></path>
    </svg>
);

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 800) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        window.scroll({ top: 0, behavior: "smooth" });
        //느리게 하려면 smooth
    };

    return (
        <>
            {isVisible && (
                <div>
                    <ScrollButton onClick={scrollToTop}>
                        <ArrowIcon />
                    </ScrollButton>
                </div>
            )}
        </>
    );
};

export default ScrollToTopButton;
