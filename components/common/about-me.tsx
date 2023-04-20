import React from "react";
import styled from "styled-components";
import BasicCard from "./basic-card";
import {
    AiOutlineUser,
    AiOutlineCalendar,
    AiOutlineBook,
    AiOutlinePhone,
    AiOutlineMail,
    AiOutlineHome,
} from "react-icons/ai";

interface ListItemProps {
    date: string;
    name: string;
}

const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const RowContainer = styled.div`
    width: 100%;
    display: flex;
`;

const Title = styled.h2`
    color: #333;
    font-size: 28px;
    margin: 18px;
`;

const Image = styled.img`
    margin: 25px;
    width: 400px;
    height: 500px;
`;

const InfoContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    color: #333;
    margin: 25px;
`;

const Label = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    font-size: 28px;
    font-weight: bold;

    margin-bottom: 6px;
`;

const Value = styled.p`
    font-size: 21px;
    color: #555;
    margin-left: 72px;
`;

const Icon = styled.span`
    font-size: 52px;
    margin-right: 16px;
`;

const data = [
    { icon: <AiOutlineUser />, label: "이름", value: "전진우" },
    {
        icon: <AiOutlineCalendar />,
        label: "생년월일",
        value: "1998년 7월 19일",
    },
    {
        icon: <AiOutlineHome />,
        label: "주소",
        value: "서울특별시 광진구",
    },
    {
        icon: <AiOutlineBook />,
        label: "학력",
        value: "세종대학교 졸업",
    },
    {
        icon: <AiOutlinePhone />,
        label: "전화번호",
        value: "010-7620-9128",
    },
    { icon: <AiOutlineMail />, label: "이메일", value: "soa9719@naver.com" },
];

const AboutMe = () => (
    <ColumnContainer>
        <Title>📌About Me</Title>
        <BasicCard>
            <RowContainer>
                <Image src="https://placehold.it/400x500" alt="career" />
                <InfoContainer>
                    {data.map(({ icon, label, value }) => (
                        <div key={label}>
                            <Label>
                                <Icon>{icon}</Icon>
                                {label}
                            </Label>
                            <Value>{value}</Value>
                        </div>
                    ))}
                </InfoContainer>
            </RowContainer>
        </BasicCard>
    </ColumnContainer>
);

export default AboutMe;