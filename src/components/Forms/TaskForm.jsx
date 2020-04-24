import React, {useState, useEffect, useContext} from "react";
import {toast} from "react-toastify";
import { TextInput, TextArea, BtnsRow, SubmitBtn, Button, DateInput, Row, BtnSmall, Subtask, SubtaskList, Comment, SubtaskButton, SubtaskBtnsContainer, SubtaskText} from "./FormUIElements";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import {form_inital} from "./subtasks-initial-data";
import {SideMenuContext} from "../../contexts/SideMenuContext";

import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';

import Input from "./Input";

const TaskForm = () => {
    const sideMenuContext = useContext(SideMenuContext);

    const [titleValue, setTitleValue] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [subtasks, setSubtasks] = useState(form_inital.subtasks);
    const [subtasksOrder, setSubtasksOrder] = useState(form_inital.subtaskOrder);
    const [comments, setComments] = useState(form_inital.comments);

    const handleChange = () =>{

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast("Submitted");
    };

    const onDragEnd = result => {
        const {destination, source, draggableId} = result;

        if (!destination) {
            return;
        }

        if (
            destination.index === source.index
        ) {
            return;
        }

        const newSubtasksIds = Array.from(subtasksOrder);

        newSubtasksIds.splice(source.index, 1);
        newSubtasksIds.splice(destination.index, 0, draggableId);

        setSubtasksOrder(newSubtasksIds);
    };

    useEffect(() => {
        console.log(subtasks);

    }, []);

    const handleClose = (e) => {
        e.preventDefault();
        sideMenuContext.setVisible(false);
    };

    const removeSubtask = subtaskId => e => {
        e.preventDefault();

        const newSubtasksIds = Array.from(subtasksOrder);
        const subtaskIndex = newSubtasksIds.indexOf(subtaskId);

        newSubtasksIds.splice(subtaskIndex, 1);

        setSubtasksOrder(newSubtasksIds);
    };

    const markSubtaskDone = subtaskId => e => {
        e.preventDefault();

        const newSubtasks = {...subtasks};

        newSubtasks[subtaskId].done = true;

        setSubtasks(newSubtasks);
    };

    const unmarkSubtaskDone = subtaskId => e => {
        e.preventDefault();

        const newSubtasks = {...subtasks};

        newSubtasks[subtaskId].done = false;

        setSubtasks(newSubtasks);
    };

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <BtnsRow style={{marginBottom: 15}}>
                    <SubmitBtn type="submit" value="Apply" />
                    <Button onClick={handleClose}>Close</Button>
                </BtnsRow>
                <Input
                    ComponentType={TextInput}
                    element={"input"}
                    id={"title"}
                    type="text"
                    label={"Title"}
                    validators={[]}

                />
                <label>
                    Description
                    <TextArea />
                </label>
                <label>
                    Date
                    <DateInput
                        type="datetime-local"
                        defaultValue={startDate}
                    />
                </label>
                <label>
                    <Row>
                        Subtasks
                        <BtnSmall onClick={(e) => e.preventDefault()}>+ add new</BtnSmall>
                    </Row>
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId={'subtasks'}>
                            {(provided, snapshot) => (
                                <SubtaskList
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    style={{ marginBottom: snapshot.isDraggingOver ? '36px' : '0px' }}
                                >
                                    {subtasksOrder.map((subtaskId, index) => {
                                        const subtask = subtasks[subtaskId];

                                        return (
                                            <Draggable key={subtaskId} draggableId={subtaskId} index={index}>
                                                {(provided, snapshot) => (
                                                    <Subtask
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        done={subtask.done}
                                                    >
                                                        <SubtaskText done={subtask.done}>
                                                        {subtask.content}
                                                        </SubtaskText>

                                                        <SubtaskBtnsContainer>
                                                            <SubtaskButton onClick={removeSubtask(subtaskId)}>
                                                                <DeleteIcon/>
                                                            </SubtaskButton>
                                                            <SubtaskButton onClick={subtask.done ? unmarkSubtaskDone(subtaskId) : markSubtaskDone(subtaskId)}>
                                                                {!subtask.done && <DoneIcon/>}
                                                                {subtask.done  && <ClearIcon/>}
                                                            </SubtaskButton>
                                                        </SubtaskBtnsContainer>
                                                    </Subtask>
                                                )}
                                            </Draggable>
                                        )
                                    })}
                                </SubtaskList>
                            )}
                        </Droppable>
                    </DragDropContext>
                </label>
                <label>
                    <Row>
                        Comments
                        <BtnSmall onClick={(e) => e.preventDefault()}>+ add new</BtnSmall>
                    </Row>
                    {comments.map((comment, index) => {
                        return <Comment key={index}>
                            { comment.content }
                        </Comment>
                    })}
                </label>
                <BtnsRow style={{ marginBottom: 40 }}>
                    <SubmitBtn type="submit" value="Apply" />
                    <Button onClick={(e) => e.preventDefault()}>Close</Button>
                </BtnsRow>
            </form>
        </React.Fragment>
    )
};

export default TaskForm;
