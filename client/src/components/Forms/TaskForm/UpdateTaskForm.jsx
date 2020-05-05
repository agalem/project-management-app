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
import { useTaskForm } from "../../../hooks/TaskFormHook";

import { initial } from "../../../initial-data";

const UpdateTaskForm = props => {
    const DUMMY_TASKS = initial.tasks;

    const sideMenuContext = useContext(SideMenuContext);
    const {taskId} = props;
    const [editedTask, setEditedTask] = useState(DUMMY_TASKS[taskId]);

    const formatDate = (date) => {
        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    };

    useEffect(() => {
        setEditedTask(DUMMY_TASKS[taskId]);
    }, [taskId]);

    const [taskFormState, inputHandler] = useTaskForm({
        title: {
            value: editedTask.title,
            isValid: true,
        },
        description: {
            value: editedTask.description,
            isValid: true,
        },
        date: {
            value: formatDate(editedTask.date),
            isValid: true,
        }
    });

    useEffect(() => {
        console.log(editedTask);
        console.log(taskFormState);
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(taskFormState.inputs);

        //TODO: call to server
    };

    const handleClose = e => {
        e.preventDefault();
        sideMenuContext.setSideMenuVisible(false);
        sideMenuContext.setSideMenuIsNewTask(true);
    };


    if (!editedTask) {
        return (
            <React.Fragment>
                <div>Cannot find a task</div>
                <Button onClick={handleClose}>Close</Button>
            </React.Fragment>
        )
    }

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <BtnsRow style={{marginBottom: 15}}>
                    <SubmitBtn type="submit" value="Apply" disabled={!taskFormState.isValid} />
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
                    initialValue={taskFormState.inputs.title.value}
                    initialValid={taskFormState.inputs.title.isValid}
                />
                <Input
                    id={"description"}
                    type={"textarea"}
                    label={"Description"}
                    validators={[]}
                    onInput={inputHandler}
                    initialValue={taskFormState.inputs.description.value}
                    initialValid={taskFormState.inputs.description.isValid}
                />
                <Input
                    ComponentType={DateInput}
                    element={"input"}
                    id={"date"}
                    type={"date"}
                    label={"Date"}
                    validators={[]}
                    onInput={inputHandler}
                    intialValue={taskFormState.inputs.date.value}
                    initialValid={taskFormState.inputs.date.isValid}
                />
                <input type="date" value="2018-07-22"/>
                <Subtasks
                    subtasksIds={[]}
                />
                <Comments
                    commentsIds={[]}
                />
                <BtnsRow style={{ marginBottom: 40 }}>
                    <SubmitBtn type="submit" value="Apply" disabled={!taskFormState.isValid}/>
                    <Button onClick={handleClose}>Close</Button>
                </BtnsRow>
            </form>
        </FormContainer>
    )
};

export default UpdateTaskForm;
