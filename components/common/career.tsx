import React from "react";
import styled from "styled-components";

interface ListItemProps {
    date: string;
    name: string;
}

const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const RowContainer = styled.div`
    display: flex;
`;

const Title = styled.h2`
    color: #333;
    font-size: 28px;
    margin: 18px;
`;

const Image = styled.img`
    width: 300px;
    height: 500px;
`;

const List = styled.ul`
    list-style-type: none;
    color: #333;
    margin-top: 10px;
    margin-left: 30px;
`;

const Date = styled.p`
    min-height: 35px;
    width: 170px;
    font-size: 20px;
    font-weight: bold;
    margin-right: 20px;
`;

const Name = styled.p`
    min-height: 35px;
    font-size: 20px;
`;

const ListItem = ({ date, name }: ListItemProps) => (
    <RowContainer>
        <Date>{date}</Date>
        <Name>{name}</Name>
    </RowContainer>
);

const Career = ({ items }: { items: ListItemProps[] }) => (
    <ColumnContainer>
        <Title>📝Career</Title>
        <RowContainer>
            <Image src="https://placehold.it/300x500" alt="career" />
            <List>
                {items.map((item, index) => (
                    <ListItem key={index} date={item.date} name={item.name} />
                ))}
            </List>
        </RowContainer>
    </ColumnContainer>
);

export default Career;
