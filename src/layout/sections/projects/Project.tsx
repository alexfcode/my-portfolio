import React from 'react'

import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Icon } from '../../../components/icon/Icon'
import { theme } from '../../../styles/Theme'

type ProjectPropsType = {
    img: string,
    title: string,
    content: string,
    note: string,
    previewLink: string,
    codeLink: string,
}


export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.img} alt="Photo1" />
            <TextWrapper>
                <Title>{props.title}</Title>
                <Content>{props.content}</Content>
                <Note>{props.note}</Note>
                <FlexWrapper justify='space-between'>
                    <Link href={props.previewLink}>
                        <Icon iconId='chain' width='20' height='20' viewBox='0 0 20 20' />
                        Live Preview
                    </Link>
                    <Link href={props.codeLink}>
                        <Icon iconId='github2' width='20' height='20' viewBox='0 0 20 20' />
                        View Code
                    </Link>
                </FlexWrapper>
            </TextWrapper>
        </StyledProject >
    )
}

const StyledProject = styled.div`
    max-width: 375px;
    min-height: 567px;
    border-radius: 20px;
    background-color: #695e5e;
    border: none;
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    border-radius: 20px 20px 0px 0px;
    object-fit: cover;

    
`
const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 15px;
`

const Title = styled.h3`
    color: ${theme.colors.mainSectionFont};
    font-size: 28px;
    font-weight: 500;
`
const Content = styled.p`
    color: ${theme.colors.mainSectionFont};
    font-size: 18px;
    font-weight: 300;
`
const Note = styled.span`
    color: ${theme.colors.mainSectionFont};
    font-size: 16px;
    font-weight: 300;
`
const Link = styled.a`
    font-size: 16px;
    font-weight: 400;
`