import { NextPage } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
    padding: 100px;
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

    useEffect(() => {
        // Show a toast notification when the component mounts
        projectName ? toast.success(`Welcome to ${projectName}!`) : null;
    }, [projectName]);

    return (
        <Container>
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
