import React from "react";
import styled from "styled-components";

import IconButton from "@material-ui/core/IconButton";

const StyledIconButton = styled(IconButton)`
    height: 20px;
    width: 20px;
    position: relative;
    right: 5px;
    &:hover {
        background-color: transparent !important;
    }
`;

const SmallIconBtn = props => {
    const {Icon, label, onClick, color} = props;

    return (
        <StyledIconButton aria-label={label} onClick={onClick}>
            <Icon fontSize={'small'} style={{ position: 'relative', top: '-10px', color}}/>
        </StyledIconButton>
    )
};

export default SmallIconBtn;