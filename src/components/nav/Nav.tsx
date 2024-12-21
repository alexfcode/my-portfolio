import React from 'react'
import styled from 'styled-components'

export const Menu = () => {
    return (
        <StyledNav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Tech Stack</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    /* max-width: 609px;
    width: 100%; */
    ul {
        display: flex;
        gap: 30px;
    }
`