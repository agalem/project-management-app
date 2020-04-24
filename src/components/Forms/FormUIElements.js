import styled from "styled-components";
import {CirclePicker} from "react-color";

const FormTitle = styled.h2`
    margin: 0;
    max-width: 93%;
`;

const TextInput = styled.input`
    display: block;
    margin: 5px 0;
    height: 25px;
    width: 250px;
    border: 1px solid #60a4f7;
    border-radius: 4px;
`;

const TextArea = styled.textarea`
    display: block;
    margin: 5px 0;
    height: 75px;
    width: 250px;
    border: 1px solid #60a4f7;
    border-radius: 4px;
`;

const StyledCirclePicker = styled(CirclePicker)`
    margin: 5px;
`;

const SubmitBtn = styled.input`
    display: block;
    width: auto;
    margin-top: 20px;
    padding: 5px 20px;
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid #60a4f7;
    box-shadow: 1px 1px rgba(0,0,0,0.5);
    cursor: pointer;
    position: relative;
    &:hover {
        box-shadow: none;
    }
`;

const BtnsRow = styled.div`
    display: flex;
    flex-align: row;
`;

const Button = styled.button`
    display: block;
    width: auto;
    margin-top: 20px;
    padding: 5px 20px;
    font-size: 14px;
    border-radius: 4px;
    background-color: #eaeaea;
    border: 1px solid #60a4f7;
    box-shadow: 1px 1px rgba(0,0,0,0.5);
    cursor: pointer;
    position: relative;
    margin-left: 20px;
    &:hover {
        box-shadow: none;
        background-color: transparent;
    }
`;

const DateInput = styled(TextInput)`
    font-size: 14px;
    padding-left: 5px;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const BtnSmall = styled(Button)`
    background-color: #fff;
    border: none;
    border-radius: 0px;
    box-shadow: none;
    color: #60a4f7;
    margin: 0;
`;

const SubtaskList = styled.ul`
    list-style: none;
    padding-left: 0;
    width: 240px;
    height: 100%;
`;

const Subtask = styled.li`
    display: block;
    border: 1px solid #60a4f7;
    border-radius: 4px;
    width: 100%;
    padding:5px;  
    cursor: pointer;
    position: relative;
    background-color: ${props => props.done ? '#fff' : '#dde'};
`;

const SubtaskText = styled.p`
    max-width: 75%;
    text-decoration: ${props => props.done ? 'line-through' : 'none'};
`;

const SubtaskBtnsContainer = styled.div`
    display: ${props => props.done ? 'none' : 'inline'};
    position: absolute;
    right: 0px;
    top: 0px;
`;

const SubtaskButton = styled.button`
    border: none;
    width: 20px;
    height: 20px;
    padding: 0;
    margin: 0;
    background: rgba(0,0,0,0.2);
    margin-right: 5px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    cursor: pointer;
    & svg {
        height: 16px;
        position: relative;
        left: -2px;
        color: rgba(0,0,0,0.6);
    }
    &:hover {
        & svg {
            color: #000;
        }
    }
`;

const Comment = styled.div`
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #60a4f7;
    width: 230px;
    border-radius: 8px;
    -moz-border-radius-bottomleft: 0;
    border-bottom-left-radius: 0;
`;

export {TextInput, TextArea, StyledCirclePicker, SubmitBtn, BtnsRow, Button, DateInput, Row, BtnSmall, Subtask, SubtaskList, Comment, SubtaskButton, SubtaskBtnsContainer, SubtaskText}
