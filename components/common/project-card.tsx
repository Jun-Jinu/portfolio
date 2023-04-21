import styled from "styled-components";
import BasicCard from "./basic-card";
import { ProjectData } from "@/core/repository";

const Box = styled.div`
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
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    flex-wrap: wrap;
`;

const Image = styled.img`
    margin: 0 auto 20px auto;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: #333;

    width: 500px;

    padding: 0 50px;

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

const ProjectCard = () => (
    <Box>
        {ProjectData.map(
            ({ title, subtitle, imageSrc, description, link, features }) => (
                <BasicCard key={title}>
                    <Title>{title}</Title>
                    <Subtitle>{subtitle}</Subtitle>
                    <RowContainer>
                        <Image src={imageSrc} alt={title} />
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
            )
        )}
    </Box>
);

export default ProjectCard;
