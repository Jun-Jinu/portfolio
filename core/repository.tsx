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
    featureTitle: string;
    content: string;
}
interface Project {
    title: string;
    subtitle: string;
    imageSrc: string[];
    description: any;
    link: string[];
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
        imageSrc: [
            "/images/portfolio/portfolio_1.png",
            "/images/portfolio/portfolio_2.png",
            "/images/portfolio/portfolio_3.png",
            "/images/portfolio/portfolio_4.png",
        ],
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
                Vercel을 활용한 가벼운 배포를 경험했습니다. 또한 반응형 웹을
                적용하면서 스타일 적용에 대한 복습을 진행했습니다. 짧은 기간
                재미있게 개발하며{" "}
                <b>
                    본인의 정보를 정리하고 부족한 것들을 되돌아보고 보충해야할
                    것을 파악하게된
                </b>{" "}
                여러모로 유익했던 프로젝트입니다.
            </span>
        ),
        link: ["https://github.com/Jun-Jinu/portfolio"],
        features: [
            {
                featureTitle: "주요 기능",
                content: "개발자 포트폴리오, 404페이지",
            },
            { featureTitle: "참여 기간", content: "2023.04 ~" },
            { featureTitle: "참여 역할", content: "전체 기획 및 개발" },
            {
                featureTitle: "주요 사용 기술",
                content: "NextJs, TypeScript, styled-components, Vercel",
            },
        ],
    },
    {
        title: "ForInTrip(구상 및 진행중)",
        subtitle: "[APP] 개인 프로젝트",
        imageSrc: [
            "/images/forintrip/ForInTrip1.png",
            "/images/forintrip/ForInTrip2.png",
        ],
        description: (
            <span>
                <b>
                    여행이 취미인 스스로에게 필요한 서비스를 만들어보고 싶은
                    욕심에서 시작
                </b>
                했습니다. 나아가 한국을 여행하는 사람들에게 도움이 되고자 개발을
                진행하고있습니다. 급증하는 한국 여행자의 수에서 어플이 적더라도
                필요한 기능만 제공한다면 당연히 수요가 있을것으로 생각하고 개발
                진행중입니다.
                <br />
                <br />
                앱에 제공할 기능을 정리하며 UI를 구성하고 있습니다. BLoC을
                활용한 구조를 적용하려고 했으나 최근{" "}
                <SkillDescription>Provider</SkillDescription>를 활용한 장점이
                많다는 것에 호기심이 생겨 학습을 진행할 예정입니다.
                <SkillDescription>
                    디자인패턴(Provider Pattarn)
                </SkillDescription>
                을 적용한 리팩토링을 진행할 예정이며 여러 개발 예시를 찾아보며
                더 학습할 내용을 적극적으로 찾으며 개발하고 있습니다.
                <b>앱 개발 역량을 집중적으로 키우기 위한 프로젝트</b>이며
                개발자로서 <b>서비스 구현부터 유지보수까지 역량을 키우기위한</b>{" "}
                프로젝트입니다.
            </span>
        ),
        link: ["https://github.com/Jun-Jinu/ForInTrip"],
        features: [
            {
                featureTitle: "주요 기능",
                content: "유명한 한국 여행지 추천, 여행 계획 정리, 여행 기록",
            },
            { featureTitle: "참여 기간", content: "2023.03 ~ " },
            {
                featureTitle: "참여 역할",
                content: "앱 개발 전체",
            },
            {
                featureTitle: "주요 사용 기술 및 툴",
                content: "Flutter(Dart), Provider(예정), Figma",
            },
        ],
    },
    {
        title: "Danvery",
        subtitle: "[APP] 단체 프로젝트",
        imageSrc: [
            "/images/danvery/danvery1.png",
            "/images/danvery/danvery2.png",
        ],
        description: (
            <span>
                단국대학교 총학생회 IT국과 협업하며 진행했던 프로젝트입니다.
                단국대학교 학생들을 주타겟으로하여 해당 학생들이 불편으로
                겪고있는 버스 시간 안내를 중점으로 단국대학교만의 커뮤니티
                형성을 도모한 프로젝트입니다. 현재 구글 플레이스토어, 애플
                앱스토어에 있는 어플입니다.
                <br />
                <br />
                조금 더 체계적인{" "}
                <SkillDescription>디자인패턴(getx pattarn)</SkillDescription>을
                적용하면서 유지보수와 협업 측면에서 장점을 가져가도록
                설계되었습니다. 디자인, 프로젝트 관리자, 웹 프론트엔드, 웹
                백엔드, 앱 프론트엔드로 다양한 역할의 멤버들과 협업을
                경험했습니다.{" "}
                <b>
                    Flutter를 다시 복습하기도 헀으며 앞서 웹 풀스택 개발을
                    경험하면서 얻었던 지식들을 바탕으로 디자인패턴, 아키텍쳐
                    공부에 몰입한
                </b>{" "}
                프로젝트입니다.
            </span>
        ),
        link: ["https://github.com/chocojaem/danvery"],
        features: [
            {
                featureTitle: "주요 기능",
                content:
                    "시간표, 버스 안내, 청원 게시판, 자유 게시판, 마이페이지, 테마 변경",
            },
            { featureTitle: "참여 기간", content: "2023.01 ~ 2023.04" },
            {
                featureTitle: "참여 역할",
                content: "앱 개발 기여(게시판 주로 참가), 현재 유지보수 미참가",
            },
            {
                featureTitle: "주요 사용 기술 및 툴",
                content: "Flutter(Dart), GetX, Figma",
            },
        ],
    },
    {
        title: "SDDS",
        subtitle: "[Web] 4인 프로젝트",
        imageSrc: [
            "/images/sdds/sdds_1.png",
            "/images/sdds/sdds_2.png",
            "/images/sdds/sdds_3.png",
            "/images/sdds/sdds_4.png",
            "/images/sdds/sdds_5.png",
            "/images/sdds/sdds_6.png",
            "/images/sdds/sdds_7.png",
        ],
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
        link: [
            // "https://github.com/SejongDDS",
            "https://github.com/Jun-Jinu/sdds_client",
        ],
        features: [
            {
                featureTitle: "주요 기능",
                content:
                    "회원가입, 로그인, 드래그앤드랍을 활용한 웹빌더, 코드 저장, 만든 웹 페이지 도메인 설정 및 웹 생성, 다양한 Navbar와 Button 등의 컴포넌트와 만들어진 스타일 프리셋 제공, 여러 페이지 설정 및 라우팅 설정 제공, 쇼핑몰과 포트폴리오 페이지 기본 템플릿 제공, 쇼핑몰 사이트 생성시 회원 및 상품 관리를 위한 관리자 페이지 연결 및 제공",
            },
            { featureTitle: "참여 기간", content: "2022.08 ~ 2022.12" },
            {
                featureTitle: "참여 역할",
                content:
                    "드래그앤드랍을 활용한 웹 빌더(프론트엔드) 개발, 회원가입 및 로그인 페이지 제작, 컴포넌트 및 기본 템플릿 제작, 다중 페이지 기능 추가 및 적용, 필요에 따라 GraphQL과 REST API를 활용한 서버 연동",
            },
            {
                featureTitle: "주요 사용 기술 및 서비스",
                content:
                    "HTML, CSS, JavaScript, SASS(SCSS), ReactJs, styled-components, GrapesJs, TypeScript, NestJs, MS Azure, Gabia",
            },
        ],
    },
    {
        title: "집켜줘",
        subtitle: "[WEB, APP] 4인 프로젝트",
        imageSrc: [
            "/images/turnhouse/turnhouse_7.png",
            "/images/turnhouse/turnhouse_1.png",
            "/images/turnhouse/turnhouse_2.png",
            "/images/turnhouse/turnhouse_3.png",
            "/images/turnhouse/turnhouse_4.png",
            "/images/turnhouse/turnhouse_5.png",
            "/images/turnhouse/turnhouse_6.png",
        ],
        description: (
            <span>
                독거노인 사고대응 솔루션입니다. 세종대학교
                캡스톤(졸업작품)과목을 통해 ATEC과 협업하여 프로젝트를
                진행했습니다. 독거노인의 고독사 문제 해결책을 찾으며
                개발했습니다.
                <br />
                <br />
                서비스 개발에는 웹, 앱, 서버, 머신러닝 분야에서 개발이
                진행됐으며 앱 제작 전체를 담당했습니다.{" "}
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
        link: [
            "https://github.com/Jun-Jinu/Turn_house_app",
            "https://github.com/Jun-Jinu/TH_Terminal_app",
        ],
        features: [
            {
                featureTitle: "주요 기능",
                content:
                    "독거노인 사고 판단 및 신고, 마을 관리자의 공지(웹소켓 활용) 알림 및 저장, 로그인, 마을 관리, 날씨, 알람, 경고 사이렌, TTS 및 STT",
            },
            { featureTitle: "참여 기간", content: "2022.03 ~ 2022.07" },
            {
                featureTitle: "참여 역할",
                content:
                    "Flutter를 활용해 2개의 앱을 제작. 독거노인 단말기용 앱 개발, 독거노인 보호자 앱 개발, REST API 활용 서버 연동, 웹 페이지 제작 일부 기여",
            },
            {
                featureTitle: "주요 사용 기술 및 서비스",
                content: "Flutter, ReactJs, Spring Boot",
            },
        ],
    },
    // {
    //     title: "UniWiki",
    //     subtitle: "[Web] 개인 프로젝트",
    //     imageSrc: [],
    //     description: (
    //         <span>
    //             학우와 함께 Dart 및 Flutter 스터디를 진행하며 앱개발의 방식을
    //             이해하기 위한 프로젝트입니다.
    //             <br />
    //             <br />
    //             서비스 개발에는 웹, 앱, 서버, 머신러닝 분야에서 개발이
    //             진행됐으며 앱 제작 전체를 담당했습니다.{" "}
    //             <SkillDescription>Dart/Flutter</SkillDescription>를 사용해
    //             개발을 진행했습니다.{" "}
    //             <b>
    //                 웹, 앱 모두 활용되는 서비스 방식과 아키텍쳐에 대해 공부하고
    //                 고찰을 시작
    //             </b>
    //             하게된 프로젝트입니다.
    //         </span>
    //     ),
    //     link: ["https://github.com/Jun-Jinu/Uniwiki"],
    //     features: [
    //         {
    //             featureTitle: "주요 기능",
    //             content:
    //                 "독거노인 사고 판단 및 신고, 마을 관리자의 공지(웹소켓 활용) 알림 및 저장, 로그인, 마을 관리, 날씨, 알람, 경고 사이렌, TTS 및 STT",
    //         },
    //         { featureTitle: "참여 기간", content: "2021.12 ~ 2022.02" },
    //         {
    //             featureTitle: "참여 역할",
    //             content: "Flutter를 활용해 ",
    //         },
    //         {
    //             featureTitle: "주요 사용 기술 및 서비스",
    //             content: "Flutter, ReactJs, Spring Boot",
    //         },
    //     ],
    // },
];

export const skillData: Skill[] = [
    // Frontend
    {
        name: "HTML / CSS / JavaScript",
        description: (
            <p>
                <b>JavaScript:</b> 학부과정을 통해 기본적인 웹개발의 과정을
                실습하며 학습하였습니다. 2023년 상반기{" "}
                <b>D-coding 심화 스터디</b>에 참가하며 ReactJs와 비교하여
                JavaScript로 간단한 TodoList앱을 만들며 클로저, 스코프, 실행
                컨텍스트를 비롯한 관련된 개념을 학습하며 가상돔 구성, 컴포넌트
                단위 렌더링을 위한 옵저버 패턴 구현을 진행했습니다. 또한
                코드리뷰를 받으며 현업에서 고려해야할 코딩 관련 원칙들에 대한
                정보를 얻고 학습을 진행하기도 했습니다.
                <br />
                <br />
                최근 리액트를 비롯한 JavaScript를 사용하는 라이브러리 혹은
                프레임워크 사용시 개발에 제약이 없는 수준있는 개발자가 되기위해
                꾸준히 학습하고 있습니다.
            </p>
        ),
        category: "Frontend",
    },
    {
        name: "SASS(SCSS) / TypeScript",
        description: (
            <span>
                <p>
                    <b>SASS(SCSS):</b> 퍼블리싱 작업을 수월하게 하기위해서
                    (*.scss)확장자를 사용하는 SCSS를 활용하며 SDDS 프로젝트에
                    참가하였습니다. 해당 팀 프로젝트에서 사용하면서 가독성면에서
                    매력을 느껴 지속적으로 SCSS를 활용하여 웹 개발을 진행하고
                    있습니다.
                </p>
                <br />
                <p>
                    <b>TypeScript:</b> 아직까지는 엄청 큰 규모의 프로젝트 진행
                    경험이 없어 타입스크립트의 필요성을 많이 느끼지 못했지만
                    새로운 프레임워크 사용, 현재보다 큰 팀 프로젝트를 위해서
                    개인 프로젝트를 통해서 학습하고 있습니다. 아직 능숙하다고는
                    하지 못하지만 기본적인 문법은 활용한 가능한 수준입니다. 다만
                    현재 중점적으로 학습중인 언어이므로 빠르게 숙련도를 높이고
                    있습니다.
                </p>
            </span>
        ),
        category: "Frontend",
    },
    {
        name: "ReactJs / Recoil / NextJs",
        description: (
            <span>
                <p>
                    <b>ReactJs / Recoil: </b>학부 과정에서 집켜줘, SDDS
                    프로젝트에 참가하며 ReactJs를 학습과 활용을 병행했습니다.
                    또한 지난 2월부터 진행한 D-Coding 스터디에 Frontend React
                    Project Study의 멘토로 참가하며 대학생 멘티들을 대상으로
                    강의 자료를 만들고 강의을 진행하며 기본 지식을 점검하고
                    보충하기도 했습니다.
                </p>
                <br />
                <p>
                    <b>NextJs: </b>학부 과정 수료후 다양한 서비스에 대한 공부를
                    하며 사용자에게 제공되는 서비스에서 광고, SEO의 중요성을
                    깨닫고 어떤 방식으로 검색엔진에 최적화 하는지,
                    포털사이트마다 어떻게 다른 기준이 있는지에 대해 탐구하고
                    있습니다. 현재 중점적으로 학습하고 추후에 프로젝트에
                    적용하고싶은 프레임워크입니다.
                </p>
            </span>
        ),
        category: "Frontend",
    },

    // Mobile App
    {
        name: "Dart / Flutter",
        description: (
            <span>
                <p>
                    <b>Dart / Flutter:</b> 학과의 교육과정과 주변 학우의 개발
                    분야 특성상 웹 개발에 한정되었습니다. 폭 넓은 서비스를
                    구현해보고 싶어 방학을 통해 개별로 학습을 진행했습니다.
                    스터디를 통해서 Dart 언어 문법, Flutter 프레임워크 사용법에
                    대해서 익혔습니다. 이후에 집켜줘, Danvery 프로젝트를 통해서
                    앱 개발을 진행하며 프로젝트에 기여함과 동시에 서비스 개발
                    경험을 쌓았습니다.
                </p>
            </span>
        ),
        category: "Mobile App",
    },

    // Backend
    {
        name: "NestJs / Prisma",
        description: (
            <span>
                <p>
                    <b>NestJs:</b> 백엔드 구현을 위해 TypeScript와 함께 사용해
                    기본적인 REST API을 구현 가능하며 회원가입, 로그인 기능을
                    구현해보며 프레임워크 전체의 기능을 익혔습니다. 최근 흔히
                    쓰이는 Spring Boot와 구조가 비슷하다는 점에서 호기심이 생겨
                    학습하고 있습니다.
                </p>
                <br />
                <p>
                    <b>Prisma:</b> ORM인 prisma를 사용하며 직접 쿼리문으로
                    데이터베이스를 구성하지 않고 NestJs내에서 관리하는 방법에
                    대해 구현하며 익혔습니다. 아직 능숙하게 사용하지 못함을 느껴
                    지속적으로 학습하고 있습니다.
                </p>
            </span>
        ),
        category: "Backend",
    },
    {
        name: "Spring Boot / JSP",
        description: (
            <span>
                <p>
                    <b>Spring Boot, JSP:</b> 기존 자바스크립트로 개발이 가능한
                    백엔드 프레임워크인 NestJs를 주로 학습했지만 국내 개발
                    빈도가 Spring Boot에 중점이 맞춰져있다는 점에 한계를 느꼈고
                    JAVA를 복습하며 Spring Boot, JSP를 통해 간단한 JWT를 활용한
                    로그인, 회원가입, 일정 관리 기능 REST API를 만들며 학습을
                    진행하고 있습니다. 아직 숙련도가 많이 낮은 언어와
                    프레임워크라고 할 수 있지만 그만큼 핵심적으로 학습하고 있고
                    NestJs와 비슷한 구조와 기능의 프레임워크이므로 빠르게
                    적응하고 코딩을 진행하고 있습니다.
                </p>
            </span>
        ),
        category: "Backend",
    },
    {
        name: "MYSQL",
        description: (
            <p>
                <b>MYSQL:</b> 백엔드 서비스를 구현하는 과정에서 학부과정에서
                배운 SQL 쿼리 작성법을 복습하며 관련 개념들, 사용법을 익히고
                있습니다. 정보처리기사 자격증 취득과정에서 복습한 경험이 있지만
                아직 많이 부족하다고 생각해 1인 프로젝트를 진행해보며 능숙하게
                다룰 수 있도록 노력하고 있습니다.
            </p>
        ),
        category: "Backend",
    },

    // Deployment
    {
        name: "AWS(EC2, S3, Route53)",
        description: (
            <p>
                <b>AWS(EC2, S3, Route53):</b> 학부 과정 중 서버 연동이 필요한
                프로젝트를 수행할 때 AWS를 통해서 서비스를 구현했습니다. DNS도
                연동하면서 실제 서비스를 제공하기 위한 기본적인 과정을 경험하며
                클라우드에 대해 이해하고 추후에 유용하게 사용할 수 있도록
                학습하고 있습니다.{" "}
            </p>
        ),
        category: "Deployment",
    },
    {
        name: "Vercel",
        description: (
            <p>
                <b>Vercel: </b>웹 포트폴리오 프로젝트에서 NextJs의 포트폴리오
                배포를 진행했습니다. lean한 배포 가능, 무료라는 장점으로 빠르게
                웹페이지를 공유하는데 사용했습니다.
            </p>
        ),
        category: "Deployment",
    },

    // Communication
    {
        name: "Figma / Notion",
        description: (
            <span>
                <p>
                    <b>Figma: </b>사용자에게 맡닿아 있는 프론트엔드 작업을 할
                    때의 와이어프레임, 백엔드 설계를 위한 클래스, 시퀀스,
                    유스케이스, ERD 다이어그램 작성을 진행하며 Figma를 비롯한
                    여러 부수적인 툴을 활용했습니다.
                </p>
                <br />
                <p>
                    <b>Notion: </b> 집켜줘, SDDS 프로젝트를 참가하며 지속적인
                    소통 및 아카이빙의 중요성을 느끼며 Notion을 주로 활용해 진행
                    상황을 공유하고 추후 대화가 필요한 부분을 기록하며
                    진행했습니다.
                </p>
            </span>
        ),

        category: "Communication",
    },
    // Tool
    {
        name: "VS Code / DataGrip / Android Studio / Postman",
        description: (
            <span>
                <p>
                    <b>VS Code:</b> 다양한 프로그래밍에 활용할 수 있는 VS Code를
                    주로 사용하며 유용한 확장 기능을 찾고 적용해보며 코딩하는
                    것을 좋아합니다.
                </p>
                <br />
                <p>
                    <b>DataGrip: </b>MYSQL을 통해서 DB를 다룰경우 백엔드 작업을
                    진행합니다.
                </p>
                <br />
                <p>
                    <b>Android Studio: </b>Flutter 프레임워크를 활용해
                    안드로이드 앱 개발을 진행시 안드로이드 기기 테스트시
                    애뮬레이터를 활용할 때 사용했습니다.
                </p>
                <br />
                <p>
                    <b>Postman: </b>REST API, GraphQL을 활용한 서버 연동
                    작업에서의 테스트 및 디버깅을 위해 포스트맨을 사용했습니다.
                </p>
            </span>
        ),
        category: "Tool",
    },

    //Version Control
    {
        name: "GitHub",
        description: (
            <span>
                <p>
                    <b>GitHub:</b> 프로젝트 및 스터디에 참가하며 버전 관리, 코드
                    리뷰을 주기적으로 진행했습니다. 개인프로젝트도 Git을 통해서
                    저장하는 습관을 들였습니다. 2022년 하반기부터 커밋 컨벤션의
                    중요성을 알고 지속적으로 올바른 커밋을 남기고자 노력하고
                    있습니다.
                </p>
            </span>
        ),

        category: "Version Control",
    },

    //Certificate
    {
        name: "정보처리기사 / 워드 / 컴활2급",
        description: (
            <span>
                <p>
                    <b>정보처리기사:</b> 전반적인 컴퓨팅 지식을 향상하고자
                    자격증을 취득하며 학부과정에서 얻은 지식을 점검했습니다.
                    또한 가볍게 여기거나 익숙하지 않던 네트워크, 데이터베이스
                    등의 지식을 보충했습니다.
                </p>
                <br />
                <p>
                    <b>워드 / 컴활2급:</b> 군 복무 중 기본적인 사무 업무 능력의
                    필요성을 느꼈고 워드프로세서, 컴활2급(엑셀)에 대한 기능들을
                    점검하며 자격증을 취득했습니다.
                </p>
            </span>
        ),
        category: "Certificate",
    },
];
