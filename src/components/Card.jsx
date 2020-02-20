import React from "react";
import styled from "styled-components";
import {Droppable} from "react-beautiful-dnd";

import Task from "./Task";

const CardHeader = styled.div`

`;

const CardTitle = styled.h2`
    
`;

const CardContainer = styled.div`
    background-color: #ebecf0;
    width: 260px;
    max-height: 100%;
    margin: 10px 5px;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
`;

const TaskList = styled.div`
`;

const Card = (props) => {
    const {column, tasks} = props;
    return(
        <CardContainer>
            <CardHeader>
                <CardTitle>{column.title}</CardTitle>
            </CardHeader>
            <Droppable droppableId={column.id}>
                {provided => (
                    <TaskList
                        ref={provided.innerRef}
                        {...provided.droppableProps}>

                        {tasks.map((task, index) => {
                            return <Task key={task.id} id={task.id} task={task} index={index}/>
                        })}
                        {provided.placeholder}
                    </TaskList>
                )}
            </Droppable>
        </CardContainer>
    )
};

export default Card;