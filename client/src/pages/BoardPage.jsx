import React, {useState} from "react";
import styled from "styled-components";

import NavBar from "../components/NavBar/NavBar";
import BoardHeader from "../components/BoardHeader/BoardHeader";
import Card from "../components/UIComponents/BoardElements/Card";
import SideDrawer from "../components/SideDrawer/SideDrawer";

import {SideMenuProvider} from "../contexts/SideMenuContext";

import {DragDropContext} from "react-beautiful-dnd";

import {initial} from "../initial-data";

const PageContainer = styled.section`
    height: calc(100vh - 50px);
    min-width: calc(100vw - 20px);
    width: fit-content;
    max-width: calc(100vw - 20px);
    overflow: hidden;
    margin: 0;
    padding: 50px 10px 0 10px;
    background-color: purple;
    display: flex;
    flex-direction: row;
`;

const Content = styled.div`
    width: 100%;
    overflow-x: scroll;
`;

const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 100%;
    width: fit-content;
    margin-right: 30px;
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

        const start = state.columns[source.droppableId];
        const finish = state.columns[destination.droppableId];
        let newState = {...state};

        if(start === finish) {
            const newTasksIds = Array.from(start.taskIds);
            newTasksIds.splice(source.index, 1);
            newTasksIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...start,
                taskIds: newTasksIds,
            };

            newState = {
                ...state,
                columns: {
                    ...state.columns,
                    [newColumn.id]: newColumn,
                },
            };
            setState(newState);
            //call endpoint the reorder was made
            return;
        }

        //handling task movement between columns
        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStart = {
            ...start,
            taskIds: startTaskIds
        };

        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds,
        };

        newState = {
            ...state,
            columns: {
                ...state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        };
        setState(newState);

    };

    return (
        <React.Fragment>
            <NavBar/>
            <PageContainer>
                <SideMenuProvider>
                    <Content>
                        <BoardHeader title={"Aplikacja kanban"}/>
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
                    </Content>
                    <SideDrawer/>
                </SideMenuProvider>
            </PageContainer>
        </React.Fragment>
    )
};

export default BoardPage;
