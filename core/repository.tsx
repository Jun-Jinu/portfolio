import styled from "styled-components";

import {
    AiOutlineUser,
    AiOutlineCalendar,
    AiOutlineBook,
    AiOutlinePhone,
    AiOutlineMail,
    AiOutlineHome,
} from "react-icons/ai";
const SkillDescription = styled.span`
    color: #0d6efa;
`;

interface Info {
    icon: JSX.Element;
    label: string;
    value: string;
}

interface projectFeatures {
    title: string;
    content: string;
}
interface Project {
    title: string;
    subtitle: string;
    imageSrc: string;
    description: any;
    link: string;
    features: projectFeatures[];
}
interface Skill {
    name: string;
    description: any;
    category: string;
}

export const myInfo: Info[] = [
    { icon: <AiOutlineUser />, label: "이름", value: "전진우" },
    {
        icon: <AiOutlineCalendar />,
        label: "생년월일",
        value: "1998년 7월 19일",
    },
    { icon: <AiOutlineHome />, label: "주소", value: "서울특별시 광진구" },
    {
        icon: <AiOutlineBook />,
        label: "학력",
        value: "세종대학교 컴퓨터공학과 졸업",
    },
    { icon: <AiOutlinePhone />, label: "전화번호", value: "010-7620-9128" },
    { icon: <AiOutlineMail />, label: "이메일", value: "soa9719@naver.com" },
];

export const ProjectData: Project[] = [
    {
        title: "포트폴리오 사이트",
        subtitle: "[WEB] 1인 프로젝트",
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
    {
        title: "SDDS",
        subtitle: "[Web] 4인 프로젝트",
        imageSrc: "https://placehold.it/400x500",
        description: (
            <span>
                Drag & Drop 웹빌더 Saas 프로그램 오픈소스 프로젝트입니다. 교내
                학점 대체 프로그램인 세종 창의학기제에 참가하여 프로젝트 심사를
                통과해 개발을 진행한 프로젝트입니다.
                <br />
                <br />
                <SkillDescription>ReactJs 라이브러리</SkillDescription>를 주로
                활용한 프로젝트입니다. Drag & Drop 기능은{" "}
                <SkillDescription>GrapesJs 라이브러리</SkillDescription>를
                활용했고 비전문가를 대상으로 한 서비스 구상이 핵심이었기에
                다양한 만들어진 컴포넌트 및 개인화 기능, 기본 쇼핑몰 및
                포트폴리오 템플릿을 제공했습니다. 그 과정에서는 ReactJs와 여러
                라이브러리를 최소화하고{" "}
                <SkillDescription>HTML, CSS, JavaScript</SkillDescription>를
                활용했고 웹 전반에 대한 학습과 경험을 할 수 있었습니다.{" "}
                <SkillDescription>MS Azure</SkillDescription>로 배포했었고
                현재는 서비스하고 있지 않습니다. 무엇보다{" "}
                <b>
                    비전문가인 사용자의 경험과 니즈를 많이 고민하고 서비스를
                    구체화를 경험
                </b>
                한 프로젝트입니다.
            </span>
        ),
        link: "https://github.com/SejongDDS",
        features: [
            {
                title: "주요 기능",
                content:
                    "회원가입, 로그인, 드래그앤드랍을 활용한 웹빌더, 코드 저장, 만든 웹 페이지 도메인 설정 및 웹 생성, 다양한 Navbar와 Button 등의 컴포넌트와 만들어진 스타일 프리셋 제공, 여러 페이지 설정 및 라우팅 설정 제공, 쇼핑몰과 포트폴리오 페이지 기본 템플릿 제공, 쇼핑몰 사이트 생성시 회원 및 상품 관리를 위한 관리자 페이지 연결 및 제공",
            },
            { title: "참여 기간", content: "2022.08 ~ 2022.12" },
            {
                title: "참여 역할",
                content:
                    "드래그앤드랍을 활용한 웹 빌더(프론트엔드) 개발, 회원가입 및 로그인 페이지 제작, 컴포넌트 및 기본 템플릿 제작, 다중 페이지 기능 추가 및 적용, 필요에 따라 GraphQL과 REST API를 활용한 서버 연동",
            },
            {
                title: "주요 사용 기술 및 서비스",
                content:
                    "HTML, CSS, JavaScript, SASS(SCSS), ReactJs, styled-components, GrapesJs, TypeScript, NestJs, MS Azure, Gabia",
            },
        ],
    },
    {
        //여기 수정중
        title: "집켜줘",
        subtitle: "[WEB, APP] 4인 프로젝트",
        imageSrc: "https://placehold.it/400x500",
        description: (
            <span>
                독거노인 사고대응 솔루션 서비스입니다. 세종대학교
                캡스톤(졸업작품)과목을 통해 ATEC과 협업하여 프로젝트를
                진행했습니다. 독거노인의 고독사 문제 해결책을 찾으며
                개발했습니다.
                <br />
                <br />앱 제작 전체를 담당했습니다.{" "}
                <SkillDescription>Dart/Flutter</SkillDescription>를 사용해
                개발을 진행했습니다.{" "}
                <SkillDescription>REST API와 Web Socket</SkillDescription>을
                활용한 첫 프로젝트입니다.{" "}
                <b>
                    웹, 앱 모두 활용되는 서비스 방식과 아키텍쳐에 대해 공부하고
                    고찰을 시작
                </b>
                하게된 프로젝트입니다.
            </span>
        ),
        link: "https://github.com/Jun-Jinu/TH_Terminal_app, https://github.com/Jun-Jinu/Turn_house_app ",
        features: [
            {
                title: "주요 기능",
                content:
                    "독거노인 사고 판단 및 신고, 마을 관리자의 공지(웹소켓 활용) 알림 및 저장, 로그인, 마을 관리, 날씨, 알람, 경고 사이렌, TTS 및 STT",
            },
            { title: "참여 기간", content: "2022.03 ~ 2022.07" },
            {
                title: "참여 역할",
                content:
                    "독거노인 단말기용 앱 개발, 독거노인 보호자 앱 개발, REST API 활용 서버 연동, 웹 페이지 제작 일부 기여",
            },
            {
                title: "주요 사용 기술 및 서비스",
                content: "Flutter, ReactJs, Spring Boot",
            },
        ],
    },
];

export const skillData: Skill[] = [
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
];
