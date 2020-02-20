import React from "react";
import styled from "styled-components";
import {TransparentBtn} from "./TransparentBtn";

const IconTransparentBtn = styled(TransparentBtn)`
    & svg {
        font-size: 20px;
        color: white;
    }
`;


const IconBtn = (props) => {
    const {Icon} = props;
    return (
        <IconTransparentBtn>
            <Icon/>
        </IconTransparentBtn>
    )
};

export default IconBtn;