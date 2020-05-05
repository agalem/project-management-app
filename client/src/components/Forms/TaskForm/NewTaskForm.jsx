import React, {useState, useEffect, useContext, useCallback, useReducer} from "react";
import {toast} from "react-toastify";
import {
    FormContainer,
    TextInput,
    BtnsRow,
    SubmitBtn,
    Button,
    DateInput
} from "../FormUIElements";

import {form_inital} from "../subtasks-initial-data";
import {initial} from "../../../initial-data";
import {types} from "../../../util/types";
import {SideMenuContext} from "../../../contexts/SideMenuContext";
import {useTaskForm} from "../../../hooks/TaskFormHook";

import Subtasks from "./Subtasks/Subtasks";
import Comments from "./Comments/Comments";

import Input from "../Input";

import {VALIDATOR_REQUIRE} from "../../../util/validators";

const taskFormReducer = (state, action) => {
    switch(action.type) {
        case types.FORM.INPUT.CHANGE:
            let formIsValid = true;
            for (const inputId in state.inputs) {
                if(inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid;
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: {
                        value: action.value,
                        isValid: action.isValid
                    }
                },
                isValid: formIsValid
            };
        default:
            return state;
    }
};

const NewTaskForm = props => {
    const sideMenuContext = useContext(SideMenuContext);

    const [taskFormState, inputHandler] = useTaskForm({
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        },
        date: {
            value: '',
            isValid: false
        }
    }, false);


    const handleSubmit = (e) => {
        e.preventDefault();
        toast("Submitted");

        //TODO: send data to the server

        console.log(taskFormState.inputs);
    };

    const handleClose = (e) => {
        e.preventDefault();
        sideMenuContext.setSideMenuVisible(false);
    };


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
                />
                <Input
                    id={"description"}
                    type={"textarea"}
                    label={"Description"}
                    validators={[]}
                    onInput={inputHandler}
                />
                <Input
                    ComponentType={DateInput}
                    element={"input"}
                    id={"date"}
                    type={"date"}
                    label={"Date"}
                    validators={[]}
                    onInput={inputHandler}
                />
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

export default NewTaskForm;
