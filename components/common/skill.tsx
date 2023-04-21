import styled from "styled-components";
import BasicCard from "./basic-card";
import Accordian from "./accordian";
import { useState } from "react";

interface Skill {
    name: string;
    description: string;
    category: string;
}

interface SkillListProps {}

const Title = styled.h2`
    color: #333;
    font-size: 28px;
    margin: 18px;
`;

const Container = styled.div`
    background-color: #f9f9f9;
    margin: 54px 0;
`;

export default function SkillList() {
    const [skills, setSkills] = useState<Skill[]>([
        // Frontend
        {
            name: "HTML/CSS/JavaScript",
            description: "Used JavaScript.",
            category: "Frontend",
        },
        {
            name: "Sass(scss)",
            description: "I used React.",
            category: "Frontend",
        },
        {
            name: "TypeScript",
            description: "I used React.",
            category: "Frontend",
        },
        { name: "ReactJs", description: "I used React.", category: "Frontend" },
        { name: "NextJs", description: "I used React.", category: "Frontend" },
        {
            name: "Recoil",
            description: "I used a lot of css.",
            category: "Frontend",
        },

        // Mobile App
        {
            name: "Dart / Flutter",
            description: "I used a lot of css.",
            category: "Mobile App",
        },

        // Backend
        {
            name: "NestJs",
            description: "I used a lot of css.",
            category: "Backend",
        },
        {
            name: "MYSQL",
            description: "I used a lot of css.",
            category: "Backend",
        },

        // Deployment
        {
            name: "AWS",
            description: "I used a lot of css.",
            category: "Deployment",
        },
        {
            name: "netlify",
            description: "I used a lot of css.",
            category: "Deployment",
        },
        {
            name: "Vercel",
            description: "I used a lot of css.",
            category: "Deployment",
        },

        // Communication
        {
            name: "Slack",
            description: "I used a lot of css.",
            category: "Communication",
        },
        {
            name: "Notion",
            description: "I used a lot of css.",
            category: "Communication",
        },
        {
            name: "Figma",
            description: "I used a lot of css.",
            category: "Communication",
        },

        // Tool
        {
            name: "VS Code",
            description: "I used a lot of css.",
            category: "Tool",
        },
        {
            name: "DataGrip",
            description: "I used a lot of css.",
            category: "Tool",
        },
        {
            name: "Android Studio",
            description: "I used a lot of css.",
            category: "Tool",
        },
        {
            name: "Postman",
            description: "I used a lot of css.",
            category: "Tool",
        },

        //Version Control
        {
            name: "GitHub",
            description: "I used a lot of css.",
            category: "Version Control",
        },

        //Certificate
        {
            name: "Information Processing Engineer",
            description: "I used a lot of css.",
            category: "Certificate",
        },
    ]);

    return (
        <Container>
            <Title>🛠️ 사용한 기술들</Title>
            {skills.map((skill, index) => (
                <Accordian
                    key={index}
                    title={`[${skill.category}] ${skill.name}`}
                    content={skill.description}
                />
            ))}
        </Container>
    );
}
