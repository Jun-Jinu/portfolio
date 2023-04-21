import styled from "styled-components";

const SkillDescription = styled.span`
    color: #0d6efa;
`;

export const ProjectData = [
    {
        title: "전진우 포트폴리오 사이트",
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
                독거노인 사고대응 솔루션 서비스입니다. 학부
                캡스톤(졸업작품)과목을 통해 ATEC과 협업하여 프로젝트를
                진행했습니다. 독거노인의 고독사 문제 해결책을 찾으며
                개발했습니다.
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
        link: "https://github.com/Jun-Jinu/TH_Terminal_app, https://github.com/Jun-Jinu/Turn_house_app ",
        features: [
            {
                title: "주요 기능",
                content: "",
            },
            { title: "참여 기간", content: "2022.03 ~ 2022.07" },
            {
                title: "참여 역할",
                content:
                    "드래그앤드랍을 활용한 웹 빌더(프론트엔드) 개발, 회원가입 및 로그인 페이지 제작, 컴포넌트 및 기본 템플릿 제작, 다중 페이지 기능 추가 및 적용, 필요에 따라 GraphQL과 REST API를 활용한 서버 연동",
            },
            {
                title: "주요 사용 기술 및 서비스",
                content: "Flutter, ReactJs, Spring Boot, Tensorflow",
            },
        ],
    },
];
