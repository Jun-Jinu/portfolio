import styled from "styled-components";

interface CardProps {
    category: string[];
    title: string;
    tag: string[];
    image: string;
}

const Card = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    width: 100%;
    height: auto;
    background-color: #fff;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12);
    overflow: hidden;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }
`;

const BasicCard = () => {
    return <Card></Card>;
};

export default BasicCard;
