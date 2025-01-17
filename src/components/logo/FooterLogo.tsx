import React from 'react'
import LogoImg from "../../assets/images/logo.png"
import { Icon } from '../icon/Icon'
import styled from 'styled-components'

export const FooterLogo = () => {
    return (
        <StyledFooterLogo href="#">
            <Icon iconId="logoFooter" width="97" height="59" viewBox='0 0 97 59'/>
        </StyledFooterLogo>
    )
}

const StyledFooterLogo = styled.a`
    display: block;
`
