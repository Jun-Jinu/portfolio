import styled, { keyframes, css } from "styled-components";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

interface NavbarProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
    lang: string;
    toggleLang: () => void;
}

const NavbarContainer = styled.nav<{ darkMode: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ darkMode }) => (darkMode ? "#333" : "#f9f9f9")};
    // color: ${({ darkMode }) => (darkMode ? "#f9f9f9" : "#333")};
    padding: 1rem;
    width: 100%;
    border-bottom: 1px solid #e1e3e6;

    @media screen and (max-width: 768px) {
        position: relative;
    }
`;

const NavMenuContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 60%;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavLeftContainer = styled.div<{ openMenu: boolean }>`
    display: flex;
    margin-left: 100px;
    z-index: 999;
    color: ${({ openMenu }) => (openMenu ? "#ffffff" : "#333")};

    transition: color 0.2s ease-out;
    width: 30%;

    @media screen and (max-width: 768px) {
        margin-left: 5px;
    }
`;

const NavRightContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 10%;
`;

const NavMenuLink = styled.b<{ isDarkMode: boolean }>`
    color: ${({ isDarkMode }) => (isDarkMode ? "#f9f9f9" : "#333")};
    margin: 0 1rem;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    font-size: 20px;
    padding: 14px 0;

    &:hover {
        color: ${({ isDarkMode }) => (isDarkMode ? "#ccc" : "#666")};
    }
`;

const NavMainLink = styled.b<{ isDarkMode: boolean }>`
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    font-size: 28px;
    padding: 0.25rem 0;

    &:hover {
        color: ${({ isDarkMode }) => (isDarkMode ? "#ccc" : "#666")};
    }

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`;

const NavButton = styled.button<{ isDarkMode: boolean }>`
    background-color: transparent;
    color: ${({ isDarkMode }) => (isDarkMode ? "#f9f9f9" : "#333")};
    border: none;
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    &:hover {
        color: ${({ isDarkMode }) => (isDarkMode ? "#ccc" : "#666")};
    }
`;

const slideDown = keyframes`
    from {
        transform: translateY(-100%);
    }
    to {
        transform: translateY(0);
    }
`;

const slideUp = keyframes`
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(-100%);
    }
`;

const Container = styled.div<{ openMenu: boolean }>`
    color: #fff;
    background-color: #3b3c3e;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100vw;
    flex-direction: column;
    text-align: center;
    animation: ${({ openMenu }) => (openMenu ? slideDown : slideUp)} 0.4s
        ease-in-out;
    animation-fill-mode: forwards;
`;

const MenuBarContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const MenuBarSpacer = styled.div`
    width: 100%;
    height: 50px;
`;

const MenuBarElement = styled.div`
    width: 100%;
    padding: 14px 0;
    font-size: 20px;
    cursor: pointer;
`;

const HamburgerWrapper = styled.div`
    display: none;
    width: 25px;
    height: 12px;
    position: relative;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        display: flex;
        background: transparent;
        cursor: pointer;
        padding: 0;
        box-sizing: border-box;
        z-index: 999;

        &:focus {
            outline: none;
        }
    }
`;

type HamburgerLineProps = {
    firstLine?: boolean;
    secondLine?: boolean;
    thirdLine?: boolean;
    fourthLine?: boolean;
    openMenu?: boolean;
};

const HamburgerLine = styled.span<HamburgerLineProps>`
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: black;
    border-radius: 4px;
    transition: transform 0.3s ease-in-out;

    ${({ firstLine }) =>
        firstLine &&
        css`
            top: 0;
        `}

    ${({ secondLine }) =>
        secondLine &&
        css`
            top: 6px;
        `}
  
    ${({ thirdLine }) =>
        thirdLine &&
        css`
            top: 12px;
        `}
  
    ${({ openMenu }) =>
        openMenu &&
        css`
            &:nth-child(1) {
                background: #fff;
                transform: translateY(6px) rotate(45deg);
            }

            &:nth-child(2) {
                transform: scale(0);
            }

            &:nth-child(3) {
                background: #fff;
                transform: translateY(-6px) rotate(-45deg);
            }
        `}
`;

const Navbar = ({
    darkMode,
    toggleDarkMode,
    lang,
    toggleLang,
}: NavbarProps) => {
    const scrollToMenu = (menuName: string) => {
        const menu = document.querySelector("#" + menuName);
        menu!.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
    };

    const [openMenu, setOpenMenu] = useState(false);

    function handleMenuOpen() {
        setOpenMenu(!openMenu);
    }

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, clientHeight } = document.documentElement;
            if (scrollTop >= clientHeight - 1200) {
                setOpenMenu(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <NavbarContainer darkMode={darkMode}>
            <NavLeftContainer openMenu={openMenu}>
                <NavMainLink isDarkMode={darkMode}>JUN JINU</NavMainLink>
            </NavLeftContainer>
            <NavMenuContainer>
                <NavMenuLink
                    isDarkMode={darkMode}
                    onClick={() => {
                        scrollToMenu("about-me");
                    }}
                >
                    저를 소개합니다
                </NavMenuLink>

                <NavMenuLink
                    isDarkMode={darkMode}
                    onClick={() => {
                        scrollToMenu("skill");
                    }}
                >
                    사용한 기술들
                </NavMenuLink>

                {/* <NavMenuLink isDarkMode={darkMode}>Career</NavMenuLink> */}

                <NavMenuLink
                    isDarkMode={darkMode}
                    onClick={() => {
                        scrollToMenu("projects");
                    }}
                >
                    진행했던 프로젝트
                </NavMenuLink>
            </NavMenuContainer>
            <NavRightContainer>
                {/* <NavButton onClick={toggleDarkMode} isDarkMode={darkMode}>
                    {darkMode ? (
                        // 해 이미지
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path
                                d="M11.888 6.22c1.586 0 3.023.643 4.063 1.682 1.04 1.04 1.682 2.476 1.682 4.063 0 1.587-.643 3.023-1.682 4.063-1.04 1.04-2.477 1.682-4.063 1.682-1.587 0-3.023-.643-4.063-1.682-1.04-1.04-1.682-2.476-1.682-4.063 0-1.587.643-3.023 1.682-4.063 1.04-1.04 2.476-1.683 4.063-1.683z"
                                transform="translate(-1423 -168) translate(79.5 145) translate(1248 24) translate(96)"
                            ></path>
                            <path
                                strokeWidth="1.5"
                                d="M18.972 4.88l-1.154 1.154 1.154-1.154 1.154-1.154-1.154 1.154zM4.608 19.245L3.453 20.4l1.155-1.155 1.154-1.154-1.154 1.154zM21.948 12.063L20.315 12.063 21.948 12.063 23.58 12.063zM1.632 12.063L0 12.063 1.632 12.063 3.265 12.063zM18.973 19.245l-1.154-1.154 1.154 1.154 1.154 1.155-1.154-1.155zM4.608 4.88L3.453 3.726 4.608 4.88l1.154 1.154L4.608 4.88zM11.824 1.905L11.824 3.538 11.824 1.905 11.824.273zM11.824 22.22L11.824 23.853 11.824 22.22 11.824 20.588z"
                                transform="translate(-1423 -168) translate(79.5 145) translate(1248 24) translate(96)"
                            ></path>
                        </svg>
                    ) : (
                        // 달 이미지
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path
                                d="M16.085 13.417c-5.013 0-9.076-4.04-9.076-9.023 0-1.596.42-3.093 1.152-4.394C3.58.456 0 4.3 0 8.977 0 13.961 4.064 18 9.076 18c3.407 0 6.372-1.868 7.924-4.628-.3.03-.605.045-.914.045z"
                                transform="translate(-1344 -24) translate(1248 24) translate(96) translate(4 3)"
                            ></path>
                        </svg>
                    )}
                </NavButton>

                <NavButton onClick={toggleLang} isDarkMode={darkMode}>
                    {lang === "eng" ? "ENG" : "KOR"}
                </NavButton> */}
                <HamburgerWrapper
                    className="hamburger"
                    onClick={handleMenuOpen}
                >
                    <HamburgerLine firstLine openMenu={openMenu} />
                    <HamburgerLine secondLine openMenu={openMenu} />
                    <HamburgerLine thirdLine openMenu={openMenu} />
                </HamburgerWrapper>

                <Container openMenu={openMenu}>
                    <MenuBarSpacer></MenuBarSpacer>
                    <MenuBarElement
                        onClick={() => {
                            scrollToMenu("about-me");
                            handleMenuOpen();
                        }}
                    >
                        저를 소개합니다
                    </MenuBarElement>
                    <MenuBarElement
                        onClick={() => {
                            scrollToMenu("skill");
                            handleMenuOpen();
                        }}
                    >
                        사용한 기술들
                    </MenuBarElement>
                    <MenuBarElement
                        onClick={() => {
                            scrollToMenu("projects");
                            handleMenuOpen();
                        }}
                    >
                        진행한 프로젝트
                    </MenuBarElement>
                </Container>
            </NavRightContainer>
        </NavbarContainer>
    );
};

export default Navbar;
