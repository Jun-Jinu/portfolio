import React, { useState } from "react";
import styled from "styled-components";

interface AccordionProps {
    title: string;
    content: string;
}

const StyledAccordion = styled.details`
    width: 100%;
    color: #333;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    margin: 20px 0;
`;

const Title = styled.summary`
    cursor: pointer;
    padding: 1rem;
    font-size: 1.5rem;
    background-color: #fafafa;
    border-bottom: 1px solid #d9d9d9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    user-select: none;
    outline: none;

    &:hover {
        background-color: #f5f5f5;
    }
`;

const Content = styled.div`
    padding: 1.5rem;
    font-size: 1.1rem;
    border: 1px solid #d9d9d9;
    border-top: none;
    background-color: #f7f7f7;
`;

const Icon = styled.svg<{ isOpen: boolean }>`
    width: 1.5rem;
    height: 1.5rem;
    fill: #333;
    transition: transform 0.2s ease-in-out;

    ${({ isOpen }) => isOpen && "transform: rotate(180deg);"}
`;

const Accordion = ({ title, content }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <StyledAccordion>
            <Title onClick={handleClick}>
                {title}
                <Icon isOpen={isOpen} viewBox="0 0 24 24">
                    <path
                        d={
                            "M16.41 7.41L12 11.83 7.59 7.41 6.17 8.83l5.59 5.59 5.59-5.59z"
                        }
                    />
                </Icon>
            </Title>
            <Content>{content}</Content>
        </StyledAccordion>
    );
};

export default Accordion;
