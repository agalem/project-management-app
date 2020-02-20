import React, {useState} from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import {DragDropContext} from "react-beautiful-dnd";

import {initial} from "../initial-data";

const PageContainer = styled.div`
    
`;

const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const BoardPage = () => {
    const [state, setState] = useState(initial);

    const onDragEnd = result => {
        const {destination, source, draggableId} = result;

        if (!destination) {
            return
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const column = state.columns[source.droppableId];
        const newTasksIds = Array.from(column.taskIds);
        newTasksIds.splice(source.index, 1);
        newTasksIds.splice(destination.index, 0, draggableId);

        const newColumn = {
            ...column,
            taskIds: newTasksIds,
        };

        const newState = {
            ...state,
            columns: {
                ...state.columns,
                [newColumn.id]: newColumn,
            },
        };

        setState(newState);
    };

    return (
        <PageContainer>
            <NavBar>
            </NavBar>
            <CardsContainer>
                <DragDropContext
                    onDragEnd={onDragEnd}
                >
                    {state.columnOrder.map(columnId => {
                        const column = state.columns[columnId];
                        const tasks = column.taskIds.map(taskId => state.tasks[taskId]);

                        return <Card key={column.id} column={column} tasks={tasks}/>
                    })}
                </DragDropContext>
            </CardsContainer>
        </PageContainer>
    )
}

export default BoardPage;