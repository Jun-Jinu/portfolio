import Link from "next/link";
import styled from "styled-components";

interface NavbarProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
    lang: string;
    toggleLang: () => void;
}

const NavbarContainer = styled.nav<{ darkMode: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ darkMode }) => (darkMode ? "#333" : "#f9f9f9")};
    color: ${({ darkMode }) => (darkMode ? "#f9f9f9" : "#333")};
    padding: 1rem;
    width: 100%;
    border-bottom: 1px solid #e1e3e6;
`;

const NavMenuContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 60%;
`;

const NavLeftContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 20%;
`;

const NavRightContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 20%;
`;

const NavMenuLink = styled.b<{ isDarkMode: boolean }>`
    color: ${({ isDarkMode }) => (isDarkMode ? "#f9f9f9" : "#333")};
    margin: 0 1rem;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    font-size: 20px;
    padding: 28px 0;

    &:hover {
        color: ${({ isDarkMode }) => (isDarkMode ? "#ccc" : "#666")};
    }
`;
const NavMainLink = styled.b<{ isDarkMode: boolean }>`
    color: ${({ isDarkMode }) => (isDarkMode ? "#f9f9f9" : "#333")};
    margin: 0 1rem;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    font-size: 28px;
    padding: 24px 0;

    &:hover {
        color: ${({ isDarkMode }) => (isDarkMode ? "#ccc" : "#666")};
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

const Navbar = ({
    darkMode,
    toggleDarkMode,
    lang,
    toggleLang,
}: NavbarProps) => {
    return (
        <NavbarContainer darkMode={darkMode}>
            <NavLeftContainer>
                <Link href="/jinu" passHref>
                    <NavMainLink isDarkMode={darkMode}>JINU</NavMainLink>
                </Link>
            </NavLeftContainer>
            <NavMenuContainer>
                <Link href="/skills" passHref>
                    <NavMenuLink isDarkMode={darkMode}>Skills</NavMenuLink>
                </Link>
                <Link href="/career" passHref>
                    <NavMenuLink isDarkMode={darkMode}>Career</NavMenuLink>
                </Link>
                <Link href="/projects" passHref>
                    <NavMenuLink isDarkMode={darkMode}>Projects</NavMenuLink>
                </Link>
            </NavMenuContainer>
            <NavRightContainer>
                <NavButton onClick={toggleDarkMode} isDarkMode={darkMode}>
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
                </NavButton>
            </NavRightContainer>
        </NavbarContainer>
    );
};

export default Navbar;
