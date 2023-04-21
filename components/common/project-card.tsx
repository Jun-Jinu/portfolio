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
    color: #333;

    width: 400px;
    margin: 0 50px;

    b {
        font-size: 18px;
    }
    a {
        margin-top: 4px;
        margin-bottom: 12px;
    }
`;
// const InfoContainer = styled.span`
//     display: flex;
//     flex-direction: column;
//     color: #333;

//     width: 400px;
//     margin: 0 50px;

//     b {
//         font-size: 18px;
//     }
//     a {
//         margin-top: 4px;
//         margin-bottom: 12px;
//     }
// `;

const Description = styled.p`
    flex: 1;
    font-size: 1.1rem;
    color: #333;
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
        title: "포트폴리오 웹 사이트",
        subtitle: "1인 프로젝트",
        imageSrc: "https://placehold.it/400x500",
        description: (
            <span>
                <span>
                    현재 웹사이트입니다. 포트폴리오로 사용하기 위해 개발을
                    진행한 웹사이트입니다.
                    <br />
                    <br />
                </span>
                <span>
                    비교적 경험과 지식이 부족하다고 생각하던 TypeScript와
                    NextJs를 활용해서 개발했습니다. 기존 학습하고 프로젝트에
                    참여했던 ReactJs는 IT서비스에서 핵심 요소인
                    검색엔진최적화(SEO)에 큰 단점이 있다는점에 동기를 받아
                    NextJs를 활용하며 여러 기능을 익히고 있습니다.
                </span>
            </span>
        ),
        link: "https://github.com/Jun-Jinu/myPortfolio",
        features: [
            {
                title: "주요 기능",
                content: "본인 소개, 기술 스택, 관련 링크, 프로젝트 기록",
            },
            { title: "참여 기간", content: "2023.04" },
            { title: "참여 역할", content: "전체 기획 및 개발" },
            {
                title: "주요 사용 기술",
                content: "NextJs, TypeScript, styled-components, netlify",
            },
        ],
    },
];

const ProjectCard = () => (
    <Box>
        {data.map(
            ({ title, subtitle, imageSrc, description, link, features }) => (
                <BasicCard key={title}>
                    <Title>{title}</Title>
                    <Subtitle>{subtitle}</Subtitle>
                    <RowContainer>
                        <Image src={imageSrc} alt={title} />
                        <InfoContainer>
                            <Description>{description}</Description>
                            <b>⚙︎ GitHub</b>
                            <a href={link}>{link}</a>
                            {features.map(
                                ({
                                    title: featureTitle,
                                    content: featureContent,
                                }) => (
                                    <Features key={title}>
                                        <b>⚙︎ {featureTitle}</b>
                                        <p>{featureContent}</p>
                                    </Features>
                                )
                            )}
                        </InfoContainer>
                    </RowContainer>
                </BasicCard>
            )
        )}
    </Box>
);

export default ProjectCard;
