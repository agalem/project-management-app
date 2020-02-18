import React from "react";
import styled from "styled-components";
import {TransparentBtn} from "./TransparentBtn";

const TextTransparentBtn = styled(TransparentBtn)`
    padding-left: 5px;
    padding-right: 5px;
    width: auto;
    max-width: 150px;
`;

const TextBtn = (props) => {
    const {text} = props;
    return (
        <TextTransparentBtn>
            {text}
        </TextTransparentBtn>
    )
}

export default TextBtn;