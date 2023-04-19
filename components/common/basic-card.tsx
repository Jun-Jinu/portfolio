import styled from "styled-components";

const BasicCard = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    width: 100%;
    height: auto;
    background-color: #fff;
    border-radius: 12px;
    padding: 25px;
    margin-bottom: 54px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12);
    overflow: hidden;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }
`;

export default BasicCard;
