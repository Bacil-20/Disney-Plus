import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="images/cta-logo-one.svg" />
                <SignUp>
                    GET ALL THERE
                </SignUp>
                <Description>
                    Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                </Description>
                <CTALogoTwo src="images/cta-logo-two.png" />
            </CTA>
        </Container>
    )
}

export default Login

const Container = styled.div`
    min-height: calc(100vh - 70px);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &:before{
        content: "";
        background: url(images/login-background.jpg);
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        opacity: 0.7;
    }
`
const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const CTALogoOne = styled.img`
    width:100%;
`
const SignUp = styled.a`
    background-color: #0063e5;
    width: 100%;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    text-align: center;
    border-radius: 10px;
    cursor: pointer;
    font-size: 18px;
    transition: 0.2s;
    letter-spacing: 1.5px;
    margin: 8px 0;

    &:hover{
        background-color: #0483ee;
    }
`
const Description = styled.p`
    text-align: center;
    font-size: 11px;
    letter-spacing: 1.5px;
    line-height: 1.5;
    margin-top: 0;
`
const CTALogoTwo = styled.img`
    width: 90%;
`