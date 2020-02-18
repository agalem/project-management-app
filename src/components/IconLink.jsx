import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'

const StyledLink = styled(Link)`
    text-decoration: none;
    margin: 0px;
    background-color: rgba(255,255,255,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    border-radius: 5px;
    margin-left: 5px;
    &:hover {
        background-color: rgba(255,255,255,0.2)
    }
    & svg {
        font-size: 20px;
        color: white;
    }
`;


const IconLink = (props) => {
    const {Icon} = props;
    return (
        <StyledLink to={"/"}>
            <Icon/>
        </StyledLink>
    )
};

export default IconLink;