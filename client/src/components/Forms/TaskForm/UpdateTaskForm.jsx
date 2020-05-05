import React, {useContext, useEffect, useState} from 'react';

import {toast} from "react-toastify";
import {
    FormContainer,
    TextInput,
    BtnsRow,
    SubmitBtn,
    Button,
    DateInput
} from "../FormUIElements";
import {SideMenuContext} from "../../../contexts/SideMenuContext";
import Input from "../Input";
import {VALIDATOR_REQUIRE} from "../../../util/validators";
import Subtasks from "./Subtasks/Subtasks";
import Comments from "./Comments/Comments";

import { initial } from "../../../initial-data";

const UpdateTaskForm = props => {
    const sideMenuContext = useContext(SideMenuContext);
    const {taskId} = props;
    const [editedTaskId, setEditedTaskId] = useState(taskId);

    useEffect(() => {
        setEditedTaskId(taskId);
    }, [taskId]);

    const handleSubmit = e => {
        e.preventDefault();
    };

    const handleClose = e => {
        e.preventDefault();
        sideMenuContext.setSideMenuVisible(false);
    };

    const inputHandler = () => {

    };

    const DUMMY_TASKS = initial.tasks;
    const identifiedTask = DUMMY_TASKS[editedTaskId];

    if (!identifiedTask) {
        return (
            <div>Cannot find a task</div>
        )
    }

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
                    errorText={"Please enter a valid title"}
                    onInput={inputHandler}
                    value={identifiedTask.title}
                    valid={true}
                />
                <Input
                    id={"description"}
                    type={"textarea"}
                    label={"Description"}
                    validators={[]}
                    onInput={inputHandler}
                    value={identifiedTask.description}
                    valid={true}
                />
                <Input
                    ComponentType={DateInput}
                    element={"input"}
                    id={"date"}
                    type={"date"}
                    label={"Date"}
                    validators={[]}
                    onInput={inputHandler}
                    value={identifiedTask.date}
                    valid={true}
                />
                <Subtasks
                    subtasksIds={[]}
                />
                <Comments
                    commentsIds={[]}
                />
                <BtnsRow style={{ marginBottom: 40 }}>
                    <SubmitBtn type="submit" value="Apply" disabled={true}/>
                    <Button onClick={handleClose}>Close</Button>
                </BtnsRow>
            </form>
        </FormContainer>
    )
};

export default UpdateTaskForm;
