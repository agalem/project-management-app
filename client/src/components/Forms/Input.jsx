import React, {useEffect, useReducer} from "react";
import styled from "styled-components";

import { TextArea } from "./FormUIElements";
import {types} from "../../util/types";
import {validate} from "../../util/validators";

const FormControl = styled.div`
    input {
        border-color: ${props => props.isValid ? '#60a4f7' : 'red'};
        background: ${props => props.isValid ? 'inherit' : '#ffe0e0' };
    }
`;

const FormControlLabel = styled.label`
    color: ${props => props.isValid ? 'inherit' : 'red'}
`;

const Error = styled.p`
    color: ${props => props.isValid ? 'inherit' : 'red'};
    margin-top: 0px;
    padding: 0px;
    margin-bottom: 10px;
`;

const inputReducer = (state, action) => {
    switch (action.type) {
        case types.FORM.ACTIONS.CHANGE:
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            };
        case types.FORM.ACTIONS.FOCUS:
            return {
                ...state,
                isTouched: true
            };
        case types.FORM.ACTIONS.BLUR:
            return {
                ...state,
                isTouched: true
            };
        default:
            return state;
    }
};

const Input  = props => {

    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.value || '',
        isValid: props.valid || (props.validators.length === 0),
        isTouched: false
    });

    const InputType = props.ComponentType;

    const {id, onInput} = props;
    const {value, isValid} = inputState;

    useEffect(() => {
        onInput(id, value, isValid);
    }, [id, value, isValid, onInput]);

    const changeHandler = e => {
        dispatch({
            type: types.FORM.ACTIONS.CHANGE,
            val: e.target.value,
            validators: props.validators
        });
    };

    const blurHandler = () => {
        if (props.validators.length === 0) {
            return;
        }
        dispatch({
            type: types.FORM.ACTIONS.BLUR
        });
    };

    const element = (props.element === 'input') ?
        <InputType id={props.id}
                   type={props.type}
                   placeholder={props.placeholder}
                   onChange={changeHandler}
                   onBlur={blurHandler}
                   value={inputState.value}
        /> :
        <TextArea id={props.id}
                  rows={props.rows || 3}
                  placeholder={props.placeholder}
                  onChange={changeHandler}
                  onBlur={blurHandler}
                  value={inputState.value}
        />;

    return (
        <FormControl isValid={(!(!inputState.isValid && inputState.isTouched))}>
            <FormControlLabel htmlFor={props.id} isValid={(!(!inputState.isValid && inputState.isTouched))}>{props.label}</FormControlLabel>
            {element}
            {
                (!inputState.isValid && inputState.isTouched) &&
                <Error>{props.errorText}</Error>
            }
        </FormControl>
    )

};

export default Input;
