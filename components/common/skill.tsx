import styled from "styled-components";
import BasicCard from "./basic-card";
import Accordian from "./accordian";
import { useState } from "react";

interface Skill {
    name: string;
    description: string;
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

export default function SkillList() {
    const [skills, setSkills] = useState<Skill[]>([
        // Frontend
        {
            name: "HTML / CSS / JavaScript",
            description: "자바스크립트를 사용했습니다.",
        },
        { name: "Sass(scss)", description: "리액트를 사용했습니다." },
        { name: "TypeScript", description: "리액트를 사용했습니다." },
        { name: "ReactJs", description: "리액트를 사용했습니다." },
        { name: "NextJs", description: "리액트를 사용했습니다." },
        { name: "Recoil", description: "css를 많이 사용했습니다." },

        // Mobile App
        { name: "Dart / Flutter", description: "css를 많이 사용했습니다." },

        // Backend
        { name: "NestJs", description: "css를 많이 사용했습니다." },
        { name: "MYSQL", description: "css를 많이 사용했습니다." },

        // Deployment
        { name: "AWS", description: "css를 많이 사용했습니다." },
        { name: "netlify", description: "css를 많이 사용했습니다." },
        { name: "Vercel", description: "css를 많이 사용했습니다." },

        // Communication
        { name: "Slack", description: "css를 많이 사용했습니다." },
        { name: "Notion", description: "css를 많이 사용했습니다." },
        { name: "Figma", description: "css를 많이 사용했습니다." },

        // Tool
        { name: "VS Code", description: "css를 많이 사용했습니다." },
        { name: "DataGrip", description: "css를 많이 사용했습니다." },
        { name: "Android Studio", description: "css를 많이 사용했습니다." },
        { name: "Postman", description: "css를 많이 사용했습니다." },

        //Version Control
        { name: "GitHub", description: "css를 많이 사용했습니다." },

        //Certificate
        { name: "정보처리기사", description: "css를 많이 사용했습니다." },
    ]);

    return (
        <Container>
            <Title>🛠️ 사용한 기술들</Title>
            {skills.map((skill, index) => (
                <Accordian
                    key={index}
                    title={skill.name}
                    content={skill.description}
                />
            ))}
        </Container>
    );
}
