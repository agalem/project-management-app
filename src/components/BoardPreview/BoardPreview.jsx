import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Container = styled(Link)`
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
        <Container to={'board'}>
            {title}
        </Container>
    )
};

export default BoardPreview;
