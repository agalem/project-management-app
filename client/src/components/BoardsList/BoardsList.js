import React, {useState} from "react";
import styled from "styled-components";
import BoardPreview from "../BoardPreview/BoardPreview";

const BoardsList = props => {

    if (props.boards.length === 0) {
        return <p>No boards found</p>
    }

    return (
        <div>
        {props.boards.map((board) => {
            return <BoardPreview title={board.title} key={board.id}/>
        })}
        </div>
    )
};

export default BoardsList;
