import styled from "styled-components";
import BasicCard from "./basic-card";
import Accordian from "./accordian";
import { useState } from "react";

interface Skill {
    name: string;
    description: any;
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
            name: "HTML / CSS / JavaScript",
            description:
                "학부과정을 통해 기본적인 개발을 학습하였습니다. 최근 D-coding 심화 스터디에 참가하며 ReactJs와 비교하여 JavaScript로 간단한 TodoList앱을 만들며 클로저, 스코프, 실행 컨텍스트를 비롯한 관련된 개념을 학습하며 가상돔 구성, 컴포넌트 단위 렌더링을 위한 옵저버 패턴 구현을 진행했습니다. 특히 최근 리액트 사용시에도 JavaScript에 익숙하고 사용잘하는 개발자가 되기위해 꾸준히 학습하고 있습니다.",
            category: "Frontend",
        },
        {
            name: "SASS(SCSS) / TypeScript",
            description:
                "퍼블리싱 작업을 수월하게 하기위해서 (*.scss)확장자를 사용하는 SCSS를 활용하며 SDDS 프로젝트에 참가하였습니다. 팀 프로젝트에서 사용하면서 가독성면에서 매력을 느껴 지속적으로 SCSS를 활용하여 웹 개발을 진행하고 있습니다. 또한 아직까지는 엄청 큰 규모의 프로젝트 진행 경험이 없어 타입스크립트의 필요성을 많이 느끼지 못했지만 새로운 프레임워크 사용, 현재보다 큰 팀 프로젝트를 위해서 개인 프로젝트를 통해서 학습하고 있습니다. 아직 능숙하다고는 하지 못하지만 기본적인 활용한 가능한 수준입니다. 다만 현재 중점적으로 학습중인 언어이므로 빠르게 숙련도를 높이고 있습니다.",
            category: "Frontend",
        },
        {
            name: "ReactJs / Recoil / NextJs",
            description:
                "학부 과정에서 집켜줘, SDDS 프로젝트에 참가하며 ReactJs를 학습과 활용을 병행했습니다. 또한 지난 2월부터 진행한 D-Coding 스터디에 Frontend React Project Study의 멘토로 참가하며 대학생 멘티들을 대상으로 강의 자료를 만들고 강의을 진행하며 기본 지식을 점검하고 보충하기도 했습니다. 또한 심화스터디에 참가하며 기존 가볍게 공부하던 JavaScript에 대한 지식을 보충하며 ReactJs 등 프레임워크에 대한 활용 방법, 함수 네이밍, 현업에서 고려해야할 코딩 관련 원칙들에 대한 정보를 얻고 학습을 진행하기도 했습니다.",
            category: "Frontend",
        },

        // Mobile App
        {
            name: "Dart / Flutter",
            description:
                "스터디를 통해서 Dart 언어 문법, Flutter 프레임워크 사용법에 대해서 익혔습니다. 집켜줘, Danvery, ForInTrip 프로젝트를 통해서 앱 개발을 진행하며 개발 경험을 쌓았습니다.",
            category: "Mobile App",
        },

        // Backend
        {
            name: "NestJs / Prisma",
            description:
                "백엔드 구현을 위해 TypeScript와 함께 사용해 기본적인 REST API을 구현 가능하며 회원가입, 로그인 기능을 구현해보며 프레임워크 전체의 기능을 익혔습니다. 최근 흔히 쓰이는 Spring Boot와 구조가 비슷하다는 점에서 호기심이 생겨 학습하고 있습니다. 또한 ORM인 prisma를 사용하며 직접 쿼리문으로 데이터베이스를 구성하지 않고 NestJs내에서 관리하는 방법에 대해 구현하며 익혔습니다. 아직 능숙하게 사용하지 못함을 느껴 지속적으로 학습하고 있습니다.",
            category: "Backend",
        },
        {
            name: "MYSQL",
            description:
                "백엔드 서비스를 구현하는 과정에서 학부과정에서 배운 SQL 쿼리 작성법을 복습하며 관련 개념들, 사용법을 익히고 있습니다.",
            category: "Backend",
        },

        // Deployment
        {
            name: "AWS(EC2, S3, Route53)",
            description: (
                <div>
                    <div></div>
                </div>
            ),
            category: "Deployment",
        },
        {
            name: "Vercel",
            description:
                "웹 포트폴리오 프로젝트에서 NextJs의 포트폴리오 배포를 진행했습니다. AWS의 설정과 무료라는 장점으로 빠르게 배포를 하는데 사용했습니다.",
            category: "Deployment",
        },

        // Communication
        {
            name: "Figma / Notion",
            description:
                "집켜줘, SDDS 프로젝트를 참가하며 지속적인 소통 및 아카이빙의 중요성을 느끼며 Notion을 활용해 진행 상황을 공유하고 추후 대화가 필요한 부분을 기록하며 진행했습니다. 사용자에게 맡닿아 있는 프론트엔드 작업을 할 때의 와이어프레임, 백엔드 설계를 위한 클래스, 시퀀스, 유스케이스, ERD 다이어그램 작성을 진행하며 Figma를 비롯한 여러 부수적인 툴을 활용했습니다.",
            category: "Communication",
        },
        // Tool
        {
            name: "VS Code / DataGrip / Android Studio / Postman",
            description:
                "다양한 프로그래밍에 활용할 수 있는 VS Code를 주로 사용하며 유용한 확장 기능을 찾고 적용해보며 코딩하는 것을 좋아합니다. MYSQL을 통해서 DB를 다룰경우 DataGrip을 사용해서 백엔드 작업을 진행합니다. Flutter 프레임워크를 활용해 안드로이드 앱 개발을 진행시 안드로이드 기기 테스트시 애뮬레이터를 활용할 때 사용했습니다, REST API, GraphQL을 활용한 서버 연동 작업에서의 테스트 및 디버깅을 위해 포스트맨을 사용했습니다.",
            category: "Tool",
        },

        //Version Control
        {
            name: "GitHub",
            description:
                "프로젝트 및 스터디에 참가하며 버전 관리, 코드 리뷰을 주기적으로 진행했습니다. 개인프로젝트도 Git을 통해서 저장하는 습관을 들였습니다.",
            category: "Version Control",
        },

        //Certificate
        {
            name: "정보처리기사 / 워드 / 컴활2급",
            description:
                "전반적인 컴퓨팅 지식을 향상하고자 정보처리기사 자격증을 취득하며 학부과정에서 얻은 지식을 점검했습니다. 군 복무 중 기본적인 사무 업무 능력의 필요성을 느꼈고 워드프로세서, 컴활2급(엑셀)에 대한 기능들을 점검하며 자격증을 취득했습니다.",
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
