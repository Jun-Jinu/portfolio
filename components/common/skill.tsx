import styled from "styled-components";
import BasicCard from "./basic-card";
interface Skill {
    name: string;
    percentage: number;
}

interface SkillListProps {}

const Title = styled.h2`
    color: #333;
    font-size: 28px;
    margin: 18px;
`;

const Container = styled.div`
    background-color: #f9f9f9;
`;
const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

const CardTitle = styled.h2`
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
`;

const SkillContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const Name = styled.p`
    color: #333;
    font-size: 20px;
    margin-right: 10px;
`;

const Bar = styled.div<{ percentage: number }>`
    width: 300px;
    height: 10px;
    background-color: #f2f2f2;
    border-radius: 10px;
    position: relative;

    &::before {
        content: "";
        display: block;
        width: ${(props) => props.percentage}%;
        height: 100%;
        background-color: #3498db;
        border-radius: 10px;
        position: absolute;
        top: 0;
        left: 0;
    }
`;

const SeeMoreLink = styled.p`
    position: absolute;
    top: 10px;
    right: 10px;
    color: #666;
    font-size: 16px;
`;

export default function SkillList() {
    const skills: Skill[] = [
        { name: "Skill 1", percentage: 70 },
        { name: "Skill 2", percentage: 90 },
        { name: "Skill 3", percentage: 80 },
        { name: "Skill 4", percentage: 60 },
    ];

    return (
        <Container>
            <Title>🛠️ 사용 기술</Title>
            <BasicCard>
                <CardContainer>
                    <CardTitle>Skills</CardTitle>
                    <SeeMoreLink>See more</SeeMoreLink>
                    {skills.map((skill, index) => (
                        <SkillContainer key={index}>
                            <Name>{skill.name}</Name>
                            <Bar percentage={skill.percentage} />
                        </SkillContainer>
                    ))}
                </CardContainer>
            </BasicCard>
        </Container>
    );
}
