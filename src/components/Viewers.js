import React from 'react'
import styled from 'styled-components'

function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src="images/viewers-disney.png" alt="" />
                <video src="videos/1564674844-disney.mp4" autoPlay muted loop></video>
            </Wrap>
            <Wrap>
                <img src="images/viewers-pixar.png" alt="" />
                <video src="videos/1564676714-pixar.mp4" autoPlay muted loop></video>
            </Wrap>
            <Wrap>
                <img src="images/viewers-marvel.png" alt="" />
                <video src="videos/1564676115-marvel.mp4" autoPlay muted loop></video>
            </Wrap>
            <Wrap>
                <img src="images/viewers-starwars.png" alt="" />
                <video src="videos/1608229455-star-wars.mp4" autoPlay muted loop></video>
            </Wrap>
            <Wrap>
                <img src="images/viewers-national.png" alt="" />
                <video src="videos/1564676296-national-geographic.mp4" autoPlay muted loop></video>
            </Wrap>
        </Container>
    )
}

export default Viewers

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 25px;
    padding: 30px 0;
`;
const Wrap = styled.div`
    cursor:pointer;
    border-radius: 10px;
    border: 3px solid rgb(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0  / 69%) 0px 26px 30px -10px,
                rgb(0 0 0  / 73%) 0px 16px 10px -10px;
    transition: 0.2s linear;
    position: relative;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    video{
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 6px;
        visibility: hidden;
        opacity: 0;
        transition: 0.2s linear;        
    }

    &:hover{
        box-shadow: rgb(0 0 0  / 80%) 0px 40px 58px -16px,
        rgb(0 0 0  / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border: 3px solid rgb(249, 249, 249, 0.8);
        
        video{
            visibility: visible ;
            opacity: 1;
        }
    }
`;