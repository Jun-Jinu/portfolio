import styled from "styled-components";
import BasicCard from "./basic-card";
import { ProjectData } from "@/core/repository";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface NextArrowProps {
    className?: any;
    style?: any;
    onClick?: any;
}

const PrevArrow = ({ className, onClick }: NextArrowProps) => {
    return (
        <IoIosArrowBack
            className={className}
            onClick={onClick}
            style={{ color: "black" }}
        />
    );
};

const NextArrow = ({ className, onClick }: NextArrowProps) => {
    return (
        <IoIosArrowForward
            className={className}
            onClick={onClick}
            style={{ color: "black" }}
        />
    );
};

const Box = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ColumnContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h2`
    font-size: 48px;
    color: #333;
    margin-bottom: 10px;
`;

const Subtitle = styled.h3`
    font-size: 24px;
    color: #666;
    margin-bottom: 20px;
`;

const RowContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    flex-wrap: wrap;
`;

const CarouselContainer = styled.div`
    width: 460px;
    max-width: 100%;
    height: auto;
    margin: 0 auto 40px auto;
`;

const Image = styled.img`
    margin: auto;

    width: 460px;
    max-width: 100%;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: #333;

    max-width: 500px;
    padding: 0 auto;
    margin: 0 auto;

    b {
        font-size: 18px;
    }
    a {
        margin-top: 4px;
        margin-bottom: 12px;
    }
`;
const Description = styled.p`
    flex: 1;
    font-size: 1.1rem;
    color: #333;
    padding-bottom: 25px;
    border-bottom: 2px solid #e9e9e9;
    margin-bottom: 25px;
`;

const Features = styled.ul`
    list-style: disc;
    margin: 0;
    padding: 0;
    flex: 1;
    color: #333;

    b {
        font-size: 18px;
    }

    p {
        margin-top: 4px;
        margin-bottom: 12px;
    }
`;

const Spacer = styled.div`
    height: 50px;
`;
const Carousel = styled(Slider)`
    .slick-arrow {
        display: flex;
        z-index: 10;
        width: 24px;
        height: 24px;
    }
`;

const ProjectCard = () => {
    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <Box>
            {ProjectData.map(
                ({
                    title,
                    subtitle,
                    imageSrc,
                    description,
                    link,
                    features,
                }) => (
                    <ColumnContainer key={title}>
                        <BasicCard>
                            <Title>{title}</Title>
                            <Subtitle>{subtitle}</Subtitle>
                            <RowContainer>
                                <CarouselContainer>
                                    <Carousel {...settings}>
                                        {imageSrc.map((src, index) => (
                                            <Image
                                                src={src}
                                                alt={title}
                                                key={index}
                                            />
                                        ))}
                                    </Carousel>
                                </CarouselContainer>
                                <InfoContainer>
                                    <Description>{description}</Description>
                                    <b>⚙︎ GitHub</b>
                                    <a href={link}>{link}</a>
                                    {features.map(
                                        ({
                                            title: featureTitle,
                                            content: featureContent,
                                        }) => (
                                            <Features key={title}>
                                                <b>⚙︎ {featureTitle}</b>
                                                <p>{featureContent}</p>
                                            </Features>
                                        )
                                    )}
                                </InfoContainer>
                            </RowContainer>
                        </BasicCard>
                        <Spacer />
                    </ColumnContainer>
                )
            )}
        </Box>
    );
};

export default ProjectCard;
