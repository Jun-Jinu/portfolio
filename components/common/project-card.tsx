import React from "react";
import styled from "styled-components";
import BasicCard from "./basic-card";

const Box = styled.div`
    width: 100%;
`;
const Title = styled.h2`
    font-size: 48px;
    color: #333;
    margin-bottom: 10px;
`;

const Subtitle = styled.h3`
    font-size: 24px;
    color: #666;
    margin-bottom: 20px;
`;

const RowContainer = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 50px;
    flex-wrap: wrap;
`;

const Image = styled.img`
    width: 400px;
    height: 500px;
    margin: 0 50px;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 400px;
    margin: 0 50px;
`;

const Description = styled.p`
    flex: 1;
    color: #666;
    padding-bottom: 25px;
    border-bottom: 2px solid #e9e9e9;
    margin-bottom: 25px;
`;

const Features = styled.ul`
    list-style: disc;
    margin: 0;
    padding: 0;
    flex: 1;
    color: #333;

    b {
        font-size: 18px;
    }

    p {
        margin-top: 4px;
        margin-bottom: 12px;
    }
`;
const data = [
    {
        title: "Project 1",
        subtitle: "Project subtitle",
        imageSrc: "https://placehold.it/300x500",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula elit ante, ac dignissim nunc ullamcorper id. Pellentesque consectetur mauris sed lorem facilisis, at molestie mauris lacinia. Suspendisse quis varius magna. ",
        features: [
            { title: "GitHub", content: "https://github.com/" },
            { title: "주요 기능", content: "Feature 1 Content" },
            { title: "참여 기간", content: "Feature 1 Content" },
            { title: "참여 역할", content: "Feature 1 Content" },
            { title: "프론트엔드", content: "Feature 3 Content" },
            { title: "백엔드", content: "Feature 4 Content" },
            { title: "배포", content: "Feature 5 Content" },
        ],
    },
];

const ProjectCard = () => (
    <Box>
        {data.map(({ title, subtitle, imageSrc, description, features }) => (
            <BasicCard key={title}>
                <Title>Projects</Title>
                <Subtitle>{subtitle}</Subtitle>
                <RowContainer>
                    <Image src={imageSrc} alt={title} />
                    <InfoContainer>
                        <Description>{description}</Description>
                        <a href="https://github.com/">https://github.com/</a>
                        {features.map(
                            ({
                                title: featureTitle,
                                content: featureContent,
                            }) => (
                                <Features key={title}>
                                    <b>{featureTitle}</b>
                                    <p>{featureContent}</p>
                                </Features>
                            )
                        )}
                    </InfoContainer>
                </RowContainer>
            </BasicCard>
        ))}
    </Box>
);

export default ProjectCard;
