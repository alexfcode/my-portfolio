import React from 'react'
import mainPhoto from "../../../assets/images/photo.webp"
import { FlexWrapper } from '../../../components/FlexWrapper'
import styled from 'styled-components'

export const Main = () => {
    return (
        <StyledMain>
                <FlexWrapper direction='column'>
                    <h2>
                        Hi 👋,
                    </h2>
                    <h2>
                        My name is
                    </h2>
                    <h2>
                        Pavan MG
                    </h2>
                    <h1>
                        I build things for web
                    </h1>
                </FlexWrapper>
                <Photo src={mainPhoto} alt="" />
        </StyledMain>
    )
}

const Photo = styled.img`
    width: 350x;
    height: 350px;
    background: linear-gradient(#fff, #fff) padding-box,
    linear-gradient(#E70FAA, #00C0FD) border-box;
    border: 9px solid transparent;
    border-radius: 50%;
`
const StyledMain = styled.section`
    min-height: 50vh;
    background-color: #8ef185;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

