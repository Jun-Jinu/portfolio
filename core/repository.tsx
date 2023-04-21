import styled from "styled-components";

const SkillDescription = styled.span`
    color: #0d6efa;
`;

export const ProjectData = [
    {
        title: "포트폴리오 사이트",
        subtitle: "[Web] 1인 프로젝트",
        imageSrc: "https://placehold.it/400x500",
        description: (
            <span>
                현재 웹사이트입니다. 포트폴리오로 사용하기 위해 개발을 진행한
                웹사이트입니다.
                <br />
                <br />
                비교적 경험과 지식이 부족하다고 생각하던{" "}
                <SkillDescription>TypeScript, NextJs</SkillDescription>를
                활용해서 개발했습니다. 기존 학습하고 프로젝트에 참여했던
                ReactJs는 IT서비스에서 핵심 요소인 <b>검색 엔진 최적화(SEO)</b>
                에 큰 단점이 있다는점에 동기를 받아{" "}
                <SkillDescription>NextJs</SkillDescription>의 이해도 증진과
                가벼운 배포를 경험했습니다.
            </span>
        ),
        link: "https://github.com/Jun-Jinu/myPortfolio",
        features: [
            {
                title: "주요 기능",
                content: "본인 소개, 기술 스택, 관련 링크, 프로젝트 기록",
            },
            { title: "참여 기간", content: "2023.04 ~" },
            { title: "참여 역할", content: "전체 기획 및 개발" },
            {
                title: "주요 사용 기술",
                content: "NextJs, TypeScript, styled-components, netlify",
            },
        ],
    },
];
