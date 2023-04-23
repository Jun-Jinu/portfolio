import styled from "styled-components";

interface CardProps {
    category: string[];
    title: string;
    tag: string[];
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    flex: 1;
    min-width: 300px;
    height: auto;
    background-color: #fff;
    border-radius: 12px;
    margin-right: 18px;
    margin-bottom: 10px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12);
    overflow: hidden;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }
`;

const TextContainer = styled.div`
    padding: 25px;
`;

const Image = styled.img`
    min-width: 100%;
    height: 240px;
    object-fit: cover;
    object-position: center;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
`;

const CategoryContainer = styled.h2`
    display: flex;
    font-size: 18px;
    font-weight: 400;
    color: #000;
    margin: 0 0 10px;
`;

const Title = styled.h2`
    font-size: 24px;
    font-weight: 700;
    color: #000;
    margin: 20px 0 10px;
`;

const TagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const TagText = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #909499;
    margin: 0 8px 4px 0;
`;

const Bubble = styled.div`
    background-color: #f2f2f2;
    border-radius: 4px;
    padding: 5px 10px;
    max-width: 200px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
`;

const BubbleText = styled.p`
    color: #333;
    font-size: 16px;
    margin: 0;
`;

const ImgCard = ({ category, title, tag }: CardProps) => {
    return (
        <Container>
            <TextContainer>
                <CategoryContainer>
                    {category.map((el, index) => (
                        <Bubble key={index}>
                            <BubbleText>{el}</BubbleText>
                        </Bubble>
                    ))}
                </CategoryContainer>

                <Title>{title}</Title>

                <TagContainer>
                    {tag.map((el, index) => (
                        <TagText key={index}>#{el}</TagText>
                    ))}
                </TagContainer>
            </TextContainer>
        </Container>
    );
};

export default ImgCard;
