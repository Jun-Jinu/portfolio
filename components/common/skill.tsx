import styled from "styled-components";
import Accordian from "./accordian";
import { skillData } from "@/core/repository";

const Title = styled.h2`
    color: #333;
    font-size: 28px;
    margin: 18px;

    scroll-margin-top: 120px;
`;

const Container = styled.div`
    background-color: #f9f9f9;
    width: 100%;
    margin: 54px 0;
`;

export default function SkillList() {
    return (
        <Container>
            <Title id="skill">🛠️ 사용한 기술들</Title>
            {skillData.map((skill, index) => (
                <Accordian
                    key={index}
                    title={`[${skill.category}] ${skill.name}`}
                    content={skill.description}
                />
            ))}
        </Container>
    );
}
