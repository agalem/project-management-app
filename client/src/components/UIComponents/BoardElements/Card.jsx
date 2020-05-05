import React, {useContext, useState} from "react";
import styled from "styled-components";
import {Droppable} from "react-beautiful-dnd";

import Task from "./Task";
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import SmallIconBtn from "../ButtonsWithoutBackground/SmallIconBtn";
import InputBase from "@material-ui/core/InputBase";
import {SideMenuContext} from "../../../contexts/SideMenuContext";


const CardHeader = styled.div`
    margin: 6px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${props => props.iseditable ? '#fff' : 'transparent'};
`;

const CardTitle = styled.h2`
    font-size: 16px;
`;

const CardContainer = styled.div`
    background-color: #ebecf0;
    width: 260px;
    min-width: 240px;
    height: 100%;
    max-height: 100%;
    margin: 10px 5px;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
`;

const TaskList = styled.div`
    height: 100%;
    min-height: 50px;
`;

const StyledInput = styled(InputBase)`
    width: 100%;
    background-color: #fff;
`;

const CardFooter = styled.div`
    margin: 3px 0;
`;

const NewTaskButton = styled.button`
    background-color: transparent;
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    text-decoration: none;
    color: #5e6c84;
    width: fit-content;
    padding: 2px;
    padding-right: 5px;
    border-radius: 5px;
    cursor: pointer;
    & svg {
        height: 18px;
    }
    
    &:hover {
        text-decoration: none;
        color: #172b4d;
        background-color: rgba(9,30,66,.08);
    }
`;

class InnerList extends React.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.tasks !== this.props.tasks;
    }

    render() {
        return this.props.tasks.map((task, index) => {
            return <Task key={task.id} id={task.id} task={task} index={index}/>
        });
    }
};


const Card = (props) => {
    const sideMenuContext = useContext(SideMenuContext);

    const {column, tasks} = props;
    const [columnTitle, setColumnTitle] = useState(column.title);
    const [newColumnTitle, setNewColumnTitle] = useState(columnTitle);
    const [isTitleEditable, setTitleEditable] = useState(false);

    const makeEditable = () => {
        if(!isTitleEditable) {
            setTitleEditable(true);
        }
    };

    const endEdition = () => {
        if(isTitleEditable) {
            setTitleEditable(false);
        }
        if(newColumnTitle.length === 0) {
            console.log("wrong title value");
            setNewColumnTitle(columnTitle);
        } else {
            setColumnTitle(newColumnTitle);
            //TODO: call to server
        }
    };

    const handleTitleChange = e => {
        setNewColumnTitle(e.target.value);
    };

    const handleKeyPressed = e => {
        if(e.key === "Enter") {
            endEdition();
        }
    };

    const showAddTaskForm = e => {
        e.preventDefault();
        sideMenuContext.setSideMenuVisible(true);
        sideMenuContext.setSideMenuIsNewTask(true);
    };

    return(
        <CardContainer>
            <CardHeader onClick={makeEditable} iseditable={isTitleEditable ? 1 : 0}>
                {!isTitleEditable &&
                    <CardTitle>{columnTitle}</CardTitle>
                }
                {isTitleEditable &&
                    <React.Fragment>
                        <StyledInput
                            value={newColumnTitle}
                            onChange={handleTitleChange}
                            onKeyDown={handleKeyPressed}
                        />

                        <SmallIconBtn Icon={CloseIcon} label={'abort title edition'} onClick={endEdition}/>
                    </React.Fragment>
                }
            </CardHeader>
            <Droppable droppableId={column.id}>
                {(provided, snapshot) => (
                    <TaskList
                        isScrollable={tasks.length > 2 ? 1 : 0}
                        ref={provided.innerRef}
                        isDraggingOver={snapshot.isDraggingOver}
                        {...provided.droppableProps}
                    >
                        <InnerList tasks={tasks} />
                        {provided.placeholder}
                    </TaskList>
                )}
            </Droppable>
            <CardFooter>
                <NewTaskButton onClick={showAddTaskForm}>
                    <AddIcon/>
                    Add new task
                </NewTaskButton>
            </CardFooter>
        </CardContainer>
    )
};

export default Card;
