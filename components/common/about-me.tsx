import React from "react";
import styled from "styled-components";
import BasicCard from "./card/basic-card";
import ImgCard from "./card/img-card";
import { myInfo } from "@/core/repository";
import { FaGithub } from "react-icons/fa";

const ColumnContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const RowContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
    flex-wrap: wrap;
`;

const Title = styled.h2`
    color: #333;
    font-size: 28px;
    margin: 18px;

    scroll-margin-top: 120px;
`;

const Image = styled.img`
    margin: 0 auto 20px auto;
    width: 400px;
    max-width: 100%;
    height: auto !important;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    color: #333;
    flex-wrap: wrap;
    width: 600px;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        flex-wrap: nowrap;
    }
`;

const Info = styled.div`
    width: 300px;

    display: flex;
    color: #333;

    margin: 12px auto;
    // overflow: scroll;
    @media screen and (max-width: 768px) {
        max-width: 70vw;
    }
`;

const InfoDetail = styled.div`
    display: flex;
    flex-direction: column;
`;

const Icon = styled.div`
    font-size: 52px;
    margin-right: 16px;

    @media screen and (max-width: 768px) {
        font-size: 26px;
        margin-right: 8px;
    }
`;

const Label = styled.div`
    font-size: 21px;
    color: #666;
    @media screen and (max-width: 768px) {
        font-size: 10.5px;
    }
`;

const Value = styled.div`
    font-size: 28px;
    font-weight: bold;
    color: #555;
    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

const Bubble = styled.div`
    font-size: 1.4rem;
    position: relative;
    margin: 50px 0;
    width: 100%;
    padding: 25px;

    background: #08bcff;
    border-radius: 20px;

    &:after {
        border-top: 0px solid transparent;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-bottom: 20px solid #08bcff;
        content: "";
        position: absolute;
        top: -20px;
        left: 22%;
    }

    @media screen and (max-width: 768px) {
        font-size: 1rem;
        &:after {
            left: 45%;
        }
    }
`;

const Spacer = styled.div`
    width: 20px;
    @media screen and (max-width: 768px) {
        width: 0;
    }
`;

const AboutMe = () => (
    <>
        <Title id="about-me">📌 저를 소개합니다</Title>
        <ColumnContainer>
            <BasicCard>
                <RowContainer>
                    <Image
                        src="/images/junjinu.jpeg"
                        alt="전진우 프로필 사진"
                    />
                    <InfoContainer>
                        {myInfo.map(({ icon, label, value }) => (
                            <Info key={label}>
                                <Icon>{icon}</Icon>
                                <InfoDetail>
                                    <Label>{label}</Label>
                                    <Value>{value}</Value>
                                </InfoDetail>
                            </Info>
                        ))}
                        <Info>
                            <Icon>
                                <FaGithub />
                            </Icon>
                            <InfoDetail>
                                <Label>깃허브[링크]</Label>
                                <Value>
                                    <a href="https://github.com/Jun-Jinu">
                                        https://github.com/Jun-Jinu
                                    </a>
                                </Value>
                            </InfoDetail>
                        </Info>
                    </InfoContainer>
                </RowContainer>
            </BasicCard>
            <Bubble>
                <b>웹 풀스택 개발자 전진우</b>입니다. 실무 경력은 없지만 새로운
                것을 배우며 알고 있는 것을 공유하고 넓혀가는 활동을 중요성을
                느끼고 적극적으로 발전하고자 합니다. 또한 다양한 코딩을 취미로
                즐기는 것이 저의 장점입니다.
            </Bubble>
            <RowContainer>
                <ImgCard
                    category={["주로 사용했던 기술"]}
                    title={"ReactJs, Flutter"}
                    tag={[
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "SCSS",
                        "Recoil",
                        "Dart",
                    ]}
                />
                <Spacer />
                <ImgCard
                    category={["주로 학습중인 기술"]}
                    title={"NextJs, Spring Boot"}
                    tag={[
                        "TypeScript",
                        "Java",
                        "JPA",
                        "MYSQL",
                        "AWS",
                        "GraphQL",
                    ]}
                />
            </RowContainer>
        </ColumnContainer>
    </>
);

export default AboutMe;
