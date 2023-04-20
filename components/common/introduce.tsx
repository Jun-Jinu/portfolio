import styled from "styled-components";

interface ModeProps {
    darkMode: boolean;
    lang: string;
}

const Container = styled.div`
    background-color: #f9f9f9;
    align-items: center;
    padding: 220px 0px;
`;

const Text = styled.p`
    font-size: 50px;
    font-weight: bold;
    color: #333;
`;

const Name = styled.b`
    color: transparent;
    background: linear-gradient(to right, #08bcff, #0d6efa);
    -webkit-background-clip: text;
    background-clip: text;
`;

export default function Introduce() {
    return (
        <Container>
            <Text>
                👨🏻‍💻 안녕하세요! <Name>개발자 전진우</Name>입니다.
            </Text>
            <Text>기술로 더 나은 세상을 만들기 위해 성장하고 있습니다.</Text>
        </Container>
    );
}
