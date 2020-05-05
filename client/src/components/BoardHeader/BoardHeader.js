import React, { useState } from 'react';
import styled from 'styled-components';

import FavoriteBoardBtn from "../FavoriteBoardBtn/FavoriteBoardBtn";

import BoardTitle from '../BoardTitle/BoardTitle';

const HeaderContainer = styled.div`
    width: 90%;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const BoardHeader = props => {
    const { title } = props;
    const [boardTitle, setBoardTitle] = useState(title);

    const setNewTitle = newTitle => {
        setBoardTitle(newTitle);
        //TODO: call to server
    };

    return (
        <HeaderContainer>
            <BoardTitle title={boardTitle} setNewTitle={setNewTitle}/>
            <FavoriteBoardBtn/>
        </HeaderContainer>
    )
};

export default BoardHeader;
