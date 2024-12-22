import React from 'react'

import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo'
import { Menu } from '../../components/nav/Nav'
import { SocialLinks } from '../../components/socialLinks/SocialLinks'
import { FlexWrapper} from '../../components/FlexWrapper'

export const Header = () => {
    return (

        <StyledHeader>
            <FlexWrapper justify='space-between'>
                <Logo />
                <Menu />
                <SocialLinks />
            </FlexWrapper>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    background-color: #98f0f3;
`