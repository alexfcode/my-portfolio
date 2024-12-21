import React from 'react'
import iconsSprite from "../../assets/images/header/icons-sprite.svg"

type IconPropsType = {
    iconId: string
    height?: number
    width?: number
    viewBox?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "50"} height={props.height || "50"} viewBox={props.viewBox || "0 0 50 50"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
        </svg>
    )
}
