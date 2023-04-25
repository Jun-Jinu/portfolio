import styled from "styled-components";
import ProjectCard from "./card/project-card";

const Container = styled.div`
    background-color: #f9f9f9;
    margin: 54px 0;
`;
const Title = styled.h2`
    color: #333;
    font-size: 28px;
    margin: 18px;
    scroll-margin-top: 120px;
`;

const CardContainer = styled.div`
    display: flex;
`;

export default function Project() {
    return (
        <Container>
            <Title id="projects">💻 진행한 프로젝트</Title>
            <CardContainer>
                <ProjectCard></ProjectCard>
            </CardContainer>
        </Container>
    );
}
