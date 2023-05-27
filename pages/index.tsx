import { useEffect, useState } from "react";
import useDidMountEffect from "@/hooks/useDidMountEffect";
import Head from "next/head";

import Navbar from "@/components/layout/navbar";
import Main from "@/components/layout/main";
import Introduce from "@/components/common/introduce";
import Skill from "@/components/common/skill";
import Career from "@/components/common/career";
import AboutMe from "@/components/common/about-me";
import Footer from "@/components/layout/footer";
import ScrollToTopButton from "@/components/common/button/scroll-to-top-button";

import Project from "@/components/common/project";

import { toast } from "react-toastify";

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    const [lang, setLang] = useState("kor");

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const toggleLang = () => {
        setLang(lang === "kor" ? "eng" : "kor");
    };

    // useEffect 2번 실행 방지
    useDidMountEffect(() => {
        toast.success("모바일로도 보실 수 있습니다.");
    }, []);

    return (
        <>
            <Head>
                <title>개발자 전진우 포트폴리오</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
                lang={lang}
                toggleLang={toggleLang}
            />
            <Main>
                <Introduce />
                <AboutMe />
                {/* <Career /> */}
                <Skill />
                <Project />
            </Main>
            <Footer />
            <ScrollToTopButton />
        </>
    );
}
