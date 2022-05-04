import React from 'react'
import styled from 'styled-components'
import { useParams } from "react-router-dom"
import moviesfile from "../num1.json"


function Detail() {
    const MovieList = moviesfile;
    const { MovieName } = useParams();
    console.log(MovieName)
    const [Movie] = [...MovieList.filter((e) => {
        return e.MovieName === MovieName
    })]
    return (
        <Container>
            {Movie &&
                (<>
                    <Background>
                        <img src={Movie.CoverImg} alt="" />
                    </Background>
                    <Cont>
                        <Imagetitle>
                            <img src={Movie.CardImg} alt="" />
                        </Imagetitle>
                        <PartTwo>
                            <Title>
                                <h1>
                                    {Movie.MovieName}
                                </h1>
                            </Title>
                            <Controls>
                                <PlayButton>
                                    <img src="/images/play-icon-black.png" alt="" />
                                    <span>PLAY</span>
                                </PlayButton>
                                <TrailerButton>
                                    <img src="/images/play-icon-white.png" alt="" />
                                    <span>TRAILER</span>
                                </TrailerButton>
                                <AddButton>
                                    <span>+</span>
                                </AddButton>
                                <GroupWatchButton>
                                    <img src="/images/group-icon.png" alt="" />
                                </GroupWatchButton>
                            </Controls>
                            <SubTaitle>
                                {Movie.Date && Movie.Date}  {Movie.Duration && ` - ` + Movie.Duration} {Movie.Gender && ` - ` + Movie.Gender}
                            </SubTaitle>
                            <Decription>
                                {Movie.Description}
                            </Decription>
                            <Info>
                                {Movie.Director &&
                                    <h4>
                                        Director : <span> {Movie.Director}  </span>
                                    </h4>
                                }
                                {Movie.Writer &&
                                    <h4>
                                        Writer : <span> {Movie.Writer}  </span>
                                    </h4>
                                }
                                {Movie.Cast &&
                                    <h4>
                                        Cast : <span> {Movie.Cast}  </span>
                                    </h4>
                                }
                            </Info>
                        </PartTwo>
                    </Cont>
                </>
                )
            }
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.8;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const Cont = styled.div`
    width: 80vw;
    margin: 100px auto;
    display: grid;
    grid-template-columns: repeat(auto-fit ,minmax(350px ,1fr));
    grid-gap: 25px;
`
const Imagetitle = styled.div`
    height: 450px;
    min-height: 170px;
    min-width: 200px;
    margin: 0 auto;

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
const PartTwo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Title = styled.div`
    h1{
        color: #fff;
        letter-spacing: 1.5px;
        margin-top: 0
    }
`
const Controls = styled.div`
    display: flex;
    align-items: center;
`
const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 14px;
    display: flex;
    align-items: center;
    height: 45px;
    background: rgb(249, 249, 249);
    border: none;
    outline: none;
    padding: 0 10px;
    margin-right: 15px;
    letter-spacing: 1.8px;
    cursor: pointer;

    img{
        width: 20px;
    }

    &:hover{
    background: rgb(198, 198, 198);
    }
`
const TrailerButton = styled(PlayButton)`
    background: rgb(0, 0, 0 , 0.3);
    border: 2px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`
const AddButton = styled.button`
    width:40px;
    height:40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: none;
    outline: none;
    border: 2px solid #fff;
    background: rgb(0, 0, 0 , 0.6);
    cursor: pointer;
    margin-right: 8px;
    span{
        font-size: 25px;
        color: #fff;
    }
`
const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0 , 0.9);

`
const SubTaitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 13px;
    min-height: 20px;
    margin-top: 26px;
`
const Decription = styled.div`
    color: rgb(249, 249, 249);
    margin-top: 16px;
    line-height: 1.4;
    font-size: 16px;
    max-width: 680px;
`
const Info = styled.div`
    h4{
        color: rgb(249,249,249);
        margin: 15px 0;
    span{
        font-weight: 400;
        }
    }
`






