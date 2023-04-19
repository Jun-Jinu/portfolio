import Link from 'next/link';
import styled from 'styled-components';

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
  background-color: ${({ darkMode }) => (darkMode ? '#333' : '#f9f9f9')};
  color: ${({ darkMode }) => (darkMode ? '#f9f9f9' : '#333')};
  padding: 1rem;
  width: 100%;
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

const NavMenuLink = styled.a<{ isDarkMode: boolean }>`
  color: ${({ isDarkMode }) => (isDarkMode ? '#f9f9f9' : '#333')};
  margin: 0 1rem;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  font-size: 16px;
  padding: 28px 0;

  &:hover {
    color: ${({ isDarkMode }) => (isDarkMode ? '#ccc' : '#666')};
  }
`;
const NavMainLink = styled.a<{ isDarkMode: boolean }>`
  color: ${({ isDarkMode }) => (isDarkMode ? '#f9f9f9' : '#333')};
  margin: 0 1rem;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  font-size: 16px;이거
  padding: 28px 0;이거

  &:hover {
    color: ${({ isDarkMode }) => (isDarkMode ? '#ccc' : '#666')};
  }
`;//여기 변경


const NavButton = styled.button`
  background-color: transparent;
  color: #000;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
`;

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode, lang, toggleLang }) => {
  return (
    <NavbarContainer darkMode={darkMode}>
      <NavLeftContainer>
        <Link href="/jinu">
          <NavMainLink isDarkMode={darkMode}>JINU</NavMainLink>
        </Link>
      </NavLeftContainer>
      <NavMenuContainer>
        <NavMenuLink isDarkMode={darkMode} href="/skills">
          Skills
        </NavMenuLink>
        <NavMenuLink isDarkMode={darkMode} href="/career">
          Career
        </NavMenuLink>
        <NavMenuLink isDarkMode={darkMode} href="/projects">
          Projects
        </NavMenuLink>
      </NavMenuContainer>
      <NavRightContainer>
        <NavButton onClick={toggleDarkMode}>
          {darkMode ? 'Light mode' : 'Dark mode'}
        </NavButton>
        <NavButton onClick={toggleLang}>
          {lang === 'en' ? '한국어' : 'English'}
        </NavButton>
      </NavRightContainer>
    </NavbarContainer>
  );
};

export default Navbar;
