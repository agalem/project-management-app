import React from "react";
import styled from 'styled-components';
import {Draggable} from "react-beautiful-dnd";

const TaskContainer = styled.div`
    height: 30px;
    width: auto;
    padding: 10px;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 5px;
    margin: 5px 0;
    background-color: ${props => (props.isDragging ? 'yellow' : '#ebecf0')};
    &:hover {
        background: gray;
    }
`;

const Task = (props) => {
    const {task, index} = props;
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided, snapshot) => (
                <TaskContainer
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                >
                    {task.content}
                </TaskContainer>
            )}
        </Draggable>
    )
};

export default Task;