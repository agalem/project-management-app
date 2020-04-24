import React, { useState } from 'react';
import styled from "styled-components";

import { initial } from "../initial-data";

import NavBar from "../components/NavBar/NavBar";
import BoardsList from "../components/BoardsList/BoardsList";

const PageContainer = styled.section`
    margin: 0;
    padding: 50px 10px 0 10px;
`;

const HomePage = () => {
    const [boards, ] = useState(initial.boards);

    return (
        <React.Fragment>
            <NavBar/>
            <PageContainer>
                <h1>Home page</h1>
                <BoardsList boards={boards}/>
            </PageContainer>
        </React.Fragment>
    )
};

export default HomePage;
