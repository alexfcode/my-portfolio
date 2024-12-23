import React from 'react'

import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Icon } from '../../../components/icon/Icon'

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
            <Title>{props.title}</Title>
            <Content>{props.content}</Content>
            <Note>{props.note}</Note>
            <Link href={props.previewLink}>
                <Icon iconId='chain' width='20' height='20' viewBox='0 0 20 20' />
                Live Preview
            </Link>
            <Link href={props.codeLink}>
                <Icon iconId='github_small' width='20' height='20' viewBox='0 0 100 100' />
                View Code
            </Link>
        </StyledProject>
    )
}

const StyledProject = styled.div`
    max-width: 375px;
    width: 100%;
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

const Title = styled.h3`
    
`
const Content = styled.p`
    
`
const Note = styled.span`
    display: block;
`
const Link = styled.a`
    
`