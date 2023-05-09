import { NextPage } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";

import useDidMountEffect from "@/hooks/useDidMountEffect";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const projects = [
    {
        name: "Project1",
        subtitle: "Subtitle 1",
        summary: "Summary of project 1",
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
        name: "Project2",
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
        name: "Project3",
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
            <Title>Summary</Title>
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
