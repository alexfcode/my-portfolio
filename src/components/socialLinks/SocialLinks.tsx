import React from 'react'
import { Icon } from '../icon/Icon'
import styled from 'styled-components'

export const SocialLinks = () => {
    return (
        <StyledSocialLinks>
            <ul>
                <li>
                    <StyledLink href="">
                        <Icon iconId="github_big" width="30"height="30" viewBox='0 0 30 30'/>
                    </StyledLink>
                </li>
                <li>
                    <StyledLink href="">
                        <Icon iconId="twitter" width="30"height="30" viewBox='0 0 30 30'/>
                    </StyledLink>
                </li>
                <li>
                    <StyledLink href="">
                        <Icon iconId="linkedin" width="30"height="30" viewBox='0 0 30 30'/>
                    </StyledLink>
                </li>
            </ul>
        </StyledSocialLinks>
    )
}

const StyledSocialLinks = styled.div`
    ul {
        display: flex;
        gap: 10px;
        align-items: center;
        li {
            list-style-type: none;
        }
    }
    
`

const StyledLink = styled.a`
    display: inline-block;
`
