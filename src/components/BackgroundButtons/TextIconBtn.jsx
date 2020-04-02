import React from "react";
import styled from "styled-components";
import { TransparentBtn } from "./TransparentBtn";

const TextIconTransparentBtn = styled(TransparentBtn)`
    width: auto;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-left: 5px;
    padding-right: 5px;
    & svg {
        font-size: 20px;
        color: white;
        margin-right: 5px;
    }
`;

const TextIconBtn = React.memo((props) => {
    const { Icon, text } = props;
    return (
        <TextIconTransparentBtn>
            <Icon/>
            {text}
        </TextIconTransparentBtn>
    )
});

export default TextIconBtn;