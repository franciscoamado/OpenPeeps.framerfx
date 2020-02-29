// openpeeps.com inspired Component
//
import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

import { Head } from "./Head"
import { Face } from "./Face"
import { Accessory } from "./Accessory"
import { FacialHair } from "./FacialHair"
import { Body } from "./Body"

export function OpenPeeps({
    headType,
    faceType,
    accessoryType,
    facialHairType,
    bodyType,
    mirror,
    tint,
    ...rest
}) {
    const head = Head[headType]
    const face = Face[faceType]
    const accessory = Accessory[accessoryType]
    const facialHair = FacialHair[facialHairType]
    const body = Body[bodyType]
    return (
        <Frame
            {...rest}
            size="100%"
            background={tint}
            style={{ transform: mirror ? "scaleX(-1)" : "" }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="240px"
                height="324px"
                version="1.1"
            >
                <title>Peep</title>
                <desc>Created with Open Peeps Ilustrations.</desc>
                <g
                    id="Introduction"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                >
                    <g
                        id="variations"
                        transform="translate(-126.000000, -2054.000000)"
                    >
                        <g
                            id="images"
                            transform="translate(126.000000, 110.000000)"
                        >
                            <g
                                id="a-person/bust"
                                transform="translate(0.000000, 1944.000000)"
                            >
                                {body}
                                {head}
                                {face}
                                {facialHair}
                                {accessory}
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </Frame>
    )
}

OpenPeeps.defaultProps = {
    headType: Head.defaultOption,
    accessoryType: Accessory.defaultOption,
    faceType: Face.defaultOption,
    facialHairType: FacialHair.defaultOption,
    bodyType: Body.defaultOption,
    tint: "#fff",
    mirror: false,
}

addPropertyControls(OpenPeeps, {
    headType: {
        title: "Head",
        type: ControlType.Enum,
        options: Head.options,
        defaultValue: Head.defaultOption,
    },
    accessoryType: {
        title: "Accessory",
        type: ControlType.Enum,
        options: Accessory.options,
        defaultValue: Accessory.defaultOption,
    },
    faceType: {
        title: "Face",
        type: ControlType.Enum,
        options: Face.options,
        defaultValue: Face.defaultOption,
    },
    facialHairType: {
        title: "Facial Hair",
        type: ControlType.Enum,
        options: FacialHair.options,
        defaultValue: FacialHair.defaultOption,
    },
    bodyType: {
        title: "Body",
        type: ControlType.Enum,
        options: Body.options,
        defaultValue: Body.defaultOption,
    },
    tint: {
        title: "Tint",
        type: ControlType.Color,
        defaultValue: "#fff",
    },
    mirror: {
        title: "Mirror",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
