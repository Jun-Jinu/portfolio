import { NextPage } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";

import useDidMountEffect from "@/hooks/useDidMountEffect";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const projects = [
    {
        name: "포트폴리오-사이트",
        subtitle: "[Web] 1인 프로젝트",
        summary:
            "개발자로서 본인을 소개하기위해 만든 페이지입니다.비교적 경험과 지식이 부족하다고 생각했던 TypeScript, NextJs을 사용하며 기존에 익숙하던 Reactjs를 활용해서 개발했습니다. 또한 반응형 웹을 적용하면서 스타일 적용에 대한 복습을 진행했습니다.",
        functions: [
            {
                title: "개발하게된 배경",
                description: "NextJs, TypeScript, styled-components, Vercel",
            },
            {
                title: "기능들",
                description: "Description of function 2",
            },
            {
                title: "본인이 수행한 활동",
                description: "Description of function 2",
            },
            {
                title: "사용된 기술",
                description: "NextJs, TypeScript, styled-components, Vercel",
            },
        ],
    },
    {
        name: "SDDS",
        subtitle: "Subtitle 2",
        summary: "Summary of project 2",
        functions: [
            {
                title: "Function 1",
                description: "Description of function 1",
            },
            {
                title: "Function 2",
                description: "Description of function 2",
            },
        ],
    },
    {
        name: "집켜줘",
        subtitle: "Subtitle 3",
        summary: "Summary of project 3",
        functions: [
            {
                title: "Function 1",
                description: "Description of function 1",
            },
            {
                title: "Function 2",
                description: "Description of function 2",
            },
        ],
    },
];

const Container = styled.div`
    padding: 100px;
`;

const ProjectTitle = styled.h1`
    font-size: 40px;
`;

const ProjectSubtitle = styled.h2`
    font-size: 32px;
    margin: 10px 0 50px 30px;
    color: #959796;
`;

const Title = styled.h3`
    font-size: 28px;
    margin: 0 0 20px;
`;

const Description = styled.p`
    font-size: 20px;
    margin-bottom: 100px;
`;

const Project: NextPage = () => {
    const router = useRouter();
    const projectName = router.query["project-name"];

    const selectedProject = projects.find(
        (project) => project.name === projectName
    );

    useDidMountEffect(() => {
        // 마운트, 렌더링에 출력
        selectedProject ? toast.success(`${projectName} 페이지 입니다!`) : null;
    }, [selectedProject]);

    if (!selectedProject) {
        return null;
    }

    return (
        <Container>
            <ProjectTitle>📝 {selectedProject.name}</ProjectTitle>
            <ProjectSubtitle>{selectedProject.subtitle}</ProjectSubtitle>
            <Title>개요</Title>
            <Description>{selectedProject.summary}</Description>
            {selectedProject.functions.map((func) => (
                <div key={func.title}>
                    <Title>{func.title}</Title>
                    <Description>{func.description}</Description>
                </div>
            ))}
            <ToastContainer />
        </Container>
    );
};

export default Project;
