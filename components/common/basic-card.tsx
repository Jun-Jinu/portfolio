import styled from "styled-components";

const BasicCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 450px;
    width: 100%;
    height: auto;
    background-color: #fff;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }
`;

export default BasicCard;
