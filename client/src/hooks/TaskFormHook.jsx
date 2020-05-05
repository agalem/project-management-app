import { useCallback, useReducer } from 'react';
import {types} from "../util/types";

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

export const useTaskForm = (initialInputs, initialFormValidity) => {

    const [taskFormState, dispatch] = useReducer(taskFormReducer, {
        inputs: initialInputs,
        isValid: initialFormValidity
    });


    const inputHandler = useCallback((id, value, isValid) => {
        console.log(isValid);
        dispatch({
            type: types.FORM.INPUT.CHANGE,
            value: value,
            isValid: isValid,
            inputId: id
        });
    }, []);

    return [taskFormState, inputHandler];
};
