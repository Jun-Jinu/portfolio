import { NextPage } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";

import { useEffect } from "react";
import useDidMountEffect from "@/hooks/useDidMountEffect";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
    padding: 100px;
`;

const ProjectTitle = styled.h1`
    margin: 0 0 50px;
`;

const Title = styled.h2`
    margin: 0 0 50px;
`;

const Description = styled.p`
    margin-bottom: 100px;
`;

const Project: NextPage = () => {
    const router = useRouter();
    const projectName = router.query["project-name"];

    useDidMountEffect(() => {
        // 마운트, 렌더링에 출력
        projectName ? toast.success(`${projectName} 페이지 입니다!`) : null;
    }, [projectName]);

    return (
        <Container>
            <ProjectTitle>{projectName}</ProjectTitle>
            <Title>Project: {projectName}</Title>
            <Description>
                This is a description of the project, which could include
                information about the technology used, your role in the project,
                and other relevant details.
            </Description>
            <Title>Function 1</Title>
            <Description>
                This is a description of the first implemented function, which
                could include details about its purpose, how it works, and any
                challenges you faced while implementing it.
            </Description>
            <Title>Function 2</Title>
            <Description>
                This is a description of the second implemented function, which
                could include details about its purpose, how it works, and any
                challenges you faced while implementing it.
            </Description>
            {/* Repeat for any other implemented functions */}
            <ToastContainer />
        </Container>
    );
};

export default Project;
