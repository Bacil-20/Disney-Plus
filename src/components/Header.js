import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';
import styled from 'styled-components'

function Header() {
    let [New, setNew] = useState(false)

    const HandelNavbar = () => {
        return New ? setNew(false) : null
    }

    const HandelClick = () => {
        New = setNew(!New);
    }

    return (
        <Nav >
            <Link className="link" to="/">
                <Logo src="images/logo.svg" />
            </Link>
            <NavBar>
                <NavMenu id="navid" onClick={HandelNavbar}
                    className={New ? "NavBar" : ""}>
                    <Link className="link" to="/">
                        <img src="images/home-icon.svg" alt="HOME" />
                        <span>HOME</span>
                    </Link>
                    <Link className="link" to="" >
                        <img src="images/search-icon.svg" alt="SEARCH" />
                        <span>SEARCH</span>
                    </Link>
                    <Link className="link" to="" >
                        <img src="images/watchlist-icon.svg" alt="WATCHLIST" />
                        <span>WATCHLIST</span>
                    </Link>
                    <Link className="link" to="" >
                        <img src="images/original-icon.svg" alt="ORIGINAL" />
                        <span>ORIGINAL</span>
                    </Link>
                    <Link className="link" to="/movies">
                        <img src="images/movie-icon.svg" alt="MOVIES" />
                        <span>MOVIES</span>
                    </Link>
                    <Link className="link" to="" >
                        <img src="images/series-icon.svg" alt="SERIES" />
                        <span>SERIES</span>
                    </Link>
                </NavMenu>
                <RightPart>
                    <Link to="/login">
                        <UserImg src="images/user-image.jpg" alt='UserImg' />
                    </Link>
                    <Icon>
                        <button onClick={HandelClick} >
                            {
                                New ? <FaTimes className='tim' /> : <FaBars className='bar' />
                            }
                        </button>
                    </Icon>
                </RightPart>
            </NavBar>
        </Nav >
    )
}
export default Header

const Nav = styled.nav`
    height:70px;
    background: #090b13;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 36px;
    position: relative;
    z-index: 99;
`;
const Logo = styled.img`
    width:80px
`;
const NavBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    @media (max-width: 900px) {
        flex: none;
        justify-content: flex-end;
    };
`;
const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-left: 25px;
    &.NavBar{
        transition: .5s ease-in-out;
        opacity: 1;
        transform: translateY(0);
    }
    @media (max-width: 900px) {
        flex-direction: column;
        position: absolute;
        background: #090b13;
        top: 100%;
        left: 0;
        width: 100%;
        transition: .5s ease-in-out;
        opacity: 0;
        z-index: -1;
        transform: translateY(-385px);
        margin-left: 0;
        align-items: flex-start;
        .link{
            padding: 10px 0 10px 36px !important;
            width: 100%;
            img{
                height:30px !important;
            }
            span{
                font-size: 18px !important;
            }
        }
    };
    .link {
        display: flex;
        align-items: center;
        padding:0 12px;
        background: #090b13;
        cursor:pointer;
        img{
            height:20px;
        }       
        span {
            font-size:13px;
            letter-spacing:1.42px;
            position: relative;
            margin-left:5px;
            &:after {
                content:"";
                position: absolute;
                height: 2px;
                width:0;
                left: 0;
                top: 115%;
                background: #fff;
                transition: 0.2s;
                opacity: 0; 
            }
        } 
        &:hover {
            span:after {
                opacity: 1; 
                width:100%;
            }
        }
    }
`;
const RightPart = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:fit-content;
`;
const UserImg = styled.img`
    width: 50px;
    border-radius: 50%;
    cursor: pointer;
`;
const Icon = styled.div`
    button {
        all: unset;
        font-size: 30px;
        font-weight: 100;
        padding: 0 10px;
        text-align: center;
        .tim{
            transition: 1s;
            color:#6bffff;
        }
        .bar{
            transition: 1s;
        }
        @media (min-width: 901px) {
            display: none;
        };
    }
`;