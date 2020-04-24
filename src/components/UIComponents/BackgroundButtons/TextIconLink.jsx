import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    text-decoration: none;
    color: ${props => props.color ? props.color : 'inherit'};
    width: fit-content;
    padding: 2px;
    padding-right: 5px;
    border-radius: 5px;
    & svg {
        height: 18px;
    }
    
    &:hover {
        text-decoration: none;
        color: ${props => props.hoverColor ? props.hoverColor : 'inherit'};
        background-color: ${props => props.hoverBackground ? props.hoverBackground : 'inherit'};
    }
`;

const TextIconLink = props => {
    const {Icon, text, color, hoverColor, hoverBackground} = props;

    return (
        <StyledLink href={'/'} color={color} hoverColor={hoverColor} hoverBackground={hoverBackground}>
            <Icon/>
            {text}
        </StyledLink>
    )
};

export default TextIconLink;