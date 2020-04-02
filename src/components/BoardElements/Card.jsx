import React, { useState } from "react";
import styled from "styled-components";
import {Droppable} from "react-beautiful-dnd";

import Task from "./Task";
import CloseIcon from '@material-ui/icons/Close';
import SmallIconBtn from "../ButtonsWithoutBackground/SmallIconBtn";
import InputBase from "@material-ui/core/InputBase";

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
    max-height: 100%;
    margin: 10px 5px;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
`;

const TaskList = styled.div`
    height: 100%;
`;

const StyledInput = styled(InputBase)`
    width: 100%;
    background-color: #fff;
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
    const {column, tasks} = props;
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
    }

    return(
        <CardContainer>
            <CardHeader onClick={makeEditable} iseditable={isTitleEditable ? 1 : 0}>
                {!isTitleEditable &&
                    <CardTitle>{column.title}</CardTitle>
                }
                {isTitleEditable &&
                    <React.Fragment>
                        <StyledInput
                            value={column.title}

                        />

                        <SmallIconBtn Icon={CloseIcon} label={'abort title edition'} onClick={endEdition}/>
                    </React.Fragment>
                }
            </CardHeader>
            <Droppable droppableId={column.id}>
                {(provided, snapshot) => (
                    <TaskList
                        ref={provided.innerRef}
                        isDraggingOver={snapshot.isDraggingOver}
                        {...provided.droppableProps}
                    >
                        <InnerList tasks={tasks} />
                        {provided.placeholder}
                    </TaskList>
                )}
            </Droppable>
        </CardContainer>
    )
};

export default Card;
