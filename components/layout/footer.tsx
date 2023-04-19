import styled from "styled-components";
import { FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

const Container = styled.div`
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 300px;
    color: #333;
    border-top: 1px solid #e1e3e6;
`;

const TitleText = styled.b`
    font-size: 24px;
    margin-bottom: 10px;
`;

const ContactText = styled.b`
    font-size: 20px;
    margin-bottom: 15px;
`;

const Name = styled.b`
    color: #0d6efa;
`;

const ButtonContainer = styled.div`
    display: flex;
`;

const Button = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-right: 10px;
`;

const InformationText = styled.p`
    font-size: 18px;
    margin-top: 10px;
`;

export default function Footer() {
    return (
        <Container>
            <TitleText>
                개발자 <Name>전진우</Name>입니다
            </TitleText>
            <ContactText>언제든 연락주세요!</ContactText>
            <ButtonContainer>
                <Button href="https://www.instagram.com/forward_ooh/">
                    <FaInstagram size={24} />
                </Button>
                <Button href="https://github.com/Jun-Jinu">
                    <FaGithub size={24} />
                </Button>
                <Button href="mailto:soa9719@naver.com">
                    <FaEnvelope size={24} />
                </Button>
            </ButtonContainer>
            <InformationText>soa9719@naver.com</InformationText>
            <InformationText>010-7620-9128</InformationText>
        </Container>
    );
}
