import React from 'react';
import styled from 'styled-components';

import FavoriteBoardBtn from "../FavoriteBoardBtn/FavoriteBoardBtn";

import BoardTitle from '../BoardTitle/BoardTitle';
import IconBtn from "../UIComponents/BackgroundButtons/IconBtn";
import StarBorderIcon from '@material-ui/icons/StarBorder'

const HeaderContainer = styled.div`
    width: 90%;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;


const BoardHeader = () => {
    return (
        <HeaderContainer>
            <BoardTitle title={'aplikacja kanban'}/>
            <FavoriteBoardBtn/>
        </HeaderContainer>
    )
};

export default BoardHeader;
