import React, { useState } from 'react';
import styled from "styled-components";

import InputBase from "@material-ui/core/InputBase";
import CloseIcon from '@material-ui/icons/Close';
import SmallIconBtn from "../UIComponents/ButtonsWithoutBackground/SmallIconBtn";

const BoardTitleContainer = styled.div`
    font-size: 18px;
    padding: 0;
    width: ${props => props.iseditable ? '300px' : 'auto'};
    transition: width 0.5s;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: ${props => props.iseditable ? '#fff' : 'transparent'};
    &:hover {
        background-color: ${props => props.iseditable ? '#fff' : 'rgba(255,255,255,0.3)'};
    }
`;

const Title = styled.span`
    padding: 3px 10px;
    color: #fff;
`;

const StyledInput = styled(InputBase)`
    width: 280px;
    padding: 4px;
`;

const BoardTitle = props => {
    const [isEditable, setEditable] = useState(false);
    const {title, setNewTitle} = props;

    const [boardTitle, setBoardTitle] = useState(title);
    const [newBoardTitle, setNewBoardTitle] = useState(boardTitle);

    const makeEditable = () => {
        setEditable(true);
    };

    const endEdition = () => {
        if (newBoardTitle.length === 0) {
            console.log("Wrong title length");
            setNewBoardTitle(boardTitle);
        } else {
            console.log(newBoardTitle);
            setBoardTitle(newBoardTitle);
            setNewTitle(newBoardTitle);
        }
        setEditable(false);
    };

    const handleTitleChange = e => {
        setNewBoardTitle(e.target.value);
    };

    const handleKeyPressed = e => {
        if(e.key === "Enter") {
            endEdition();
        }
    };

    return (
        <BoardTitleContainer iseditable={isEditable}>
            {!isEditable &&
                <Title onClick={makeEditable}>{title}</Title>
            }
            {isEditable &&
                <React.Fragment>
                    <StyledInput
                        value={newBoardTitle}
                        inputProps={{
                            style: {fontSize: 18, padding: 1, paddingLeft: 10}
                        }}
                        onChange={handleTitleChange}
                        onKeyDown={handleKeyPressed}
                    />

                    <SmallIconBtn Icon={CloseIcon} label={'abort title edition'} onClick={endEdition}/>
                </React.Fragment>
            }
        </BoardTitleContainer>
    )

};

export default BoardTitle;
