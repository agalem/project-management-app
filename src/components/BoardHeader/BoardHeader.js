import React from 'react';
import styled from 'styled-components';

import BoardTitle from '../BoardTitle/BoardTitle';
import IconBtn from "../BackgroundButtons/IconBtn";
import StarBorderIcon from '@material-ui/icons/StarBorder'

const HeaderContainer = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;


const BoardHeader = () => {
    return (
        <HeaderContainer>
            <BoardTitle title={'aplikacja kanban'}/>
            <IconBtn Icon={StarBorderIcon} color={'yellow'}/>
        </HeaderContainer>
    )
};

export default BoardHeader;