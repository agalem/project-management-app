import React from "react";
import styled from "styled-components";
import {TransparentBtn} from "./TransparentBtn";

const IconTransparentBtn = styled(TransparentBtn)`
    & svg {
        font-size: 20px;
        color: white;
    }
`;


const IconBtn = React.memo((props) => {
    const {Icon, color, iconBackground} = props;
    return (
        <IconTransparentBtn>
            <Icon style={{color, iconBackground}}/>
        </IconTransparentBtn>
    )
});

export default IconBtn;