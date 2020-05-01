import React, {useState, useEffect, useContext} from "react";
import {toast} from "react-toastify";
import {
    FormContainer,
    TextInput,
    TextArea,
    BtnsRow,
    SubmitBtn,
    Button,
    DateInput,
    Row,
    BtnSmall,
    Subtask,
    SubtaskList,
    Comment,
    SubtaskButton,
    SubtaskBtnsContainer,
    SubtaskText,
    BaseInput
} from "../FormUIElements";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import {form_inital} from "../subtasks-initial-data";
import {SideMenuContext} from "../../../contexts/SideMenuContext";

import Subtasks from "./Subtasks/Subtasks";
import Comments from "./Comments/Comments";

import Input from "../Input";

import { VALIDATOR_REQUIRE } from "../../../util/validators";

const TaskForm = () => {
    const sideMenuContext = useContext(SideMenuContext);

    const [titleValue, setTitleValue] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [subtasks, setSubtasks] = useState(form_inital.subtasks);
    const [subtasksOrder, setSubtasksOrder] = useState(form_inital.subtaskOrder);
    const [comments, setComments] = useState(form_inital.comments);


    const handleSubmit = (e) => {
        e.preventDefault();
        toast("Submitted");
    };



    useEffect(() => {
        console.log(subtasks);

    }, []);

    const handleClose = (e) => {
        e.preventDefault();
        sideMenuContext.setVisible(false);
    };



    return (
        <FormContainer>
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
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText={"Please enter a valid text"}
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
                <Subtasks/>
                <Comments/>
                <BtnsRow style={{ marginBottom: 40 }}>
                    <SubmitBtn type="submit" value="Apply" />
                    <Button onClick={handleClose}>Close</Button>
                </BtnsRow>
            </form>
        </FormContainer>
    )
};

export default TaskForm;
