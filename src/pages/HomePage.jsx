import React, { useState } from 'react';
import styled from "styled-components";

import { initial } from "../initial-data";

import BoardPreview from "../components/BoardPreview/BoardPreview";

const PageContainer = styled.section`
    margin: 0;
    padding: 50px 10px 0 10px;
`;

const HomePage = () => {
    const [boards, ] = useState(initial.boards);

    return (
        <PageContainer>
            <h1>Home page</h1>
            {boards.map((board) => {
                return <BoardPreview title={board.title} key={board.id}/>
            })}
        </PageContainer>
    )
};

export default HomePage;
