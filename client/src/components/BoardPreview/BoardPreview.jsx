import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const LinkContainer = styled(Link)`
    display: block;
    height: 100px;
    width: 150px;
    background: yellow;
    &:hover {
        text-decoration: none;
    }
`;

const BoardPreview = props => {
    const { title } = props;
    return (
        <LinkContainer to={'u1'}>
            {title}
        </LinkContainer>
    )
};

export default BoardPreview;
