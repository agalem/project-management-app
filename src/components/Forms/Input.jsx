import React, { useReducer } from "react";
import styled from "styled-components";

import { TextArea } from "./FormUIElements";
import {types} from "../../types";

const FormControl = styled.div`
    border: ${props => props.isValid ? '10px solid red' : 'none'}
`;

const inputReducer = (state, action) => {
    switch (action.type) {
        case types.FORM.ACTIONS.CHANGE:
            return {
                ...state,
                value: action.val,
                isValid: true
            };
        default:
            return state;
    }
}

const Input  = props => {

    const [inputState, dispatch] = useReducer(inputReducer, {value: '', isValid: false});

    const InputType = props.ComponentType;

    const changeHandler = e => {
        dispatch({type: types.FORM.ACTIONS.CHANGE, val: e.target.value});
    };

    const element = (props.element === 'input') ?
        <InputType id={props.id}
                   type={props.type}
                   placeholder={props.placeholder}
                   onChange={changeHandler}
                   value={inputState.value}
        /> :
        <TextArea id={props.id}
                  rows={props.rows || 3}
                  placeholder={props.placeholder}
                  onChange={changeHandler}
                  value={inputState.value}
        />

    return (
        <FormControl isValid={!inputState.isValid}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
        </FormControl>
    )

};

export default Input;
