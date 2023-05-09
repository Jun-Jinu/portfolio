import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Content = styled.div`
    text-align: center;
`;

const Title = styled.h1`
    margin-bottom: 20px;
`;

const Text = styled.p`
    margin-bottom: 10px;
`;

const Button = styled.button`
    margin: 20px;
    padding: 15px 80px;
    font-size: 20px;
    font-weight: bold;
    background-color: #e9e9e9;
    border: none;
    border-radius: 30px;
    cursor: pointer;
`;

const IconContainer = styled.div`
    color: orange;
    margin-bottom: 30px;
`;

function Custom404() {
    return (
        <Container>
            <Content>
                <IconContainer>
                    <FaExclamationTriangle size={64} />
                </IconContainer>

                <Title>찾으시는 페이지가 없습니다</Title>
                <Text>요청한 페이지를 찾을 수 없습니다</Text>
                <Text>
                    입력하신 페이지의 주소가 정확한지 다시 한번 확인해 주시기
                    바랍니다
                </Text>
                <Link href="/">
                    <Button>홈으로</Button>
                </Link>
            </Content>
        </Container>
    );
}

export default Custom404;
