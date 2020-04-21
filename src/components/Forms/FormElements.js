import styled from "styled-components";
import {CirclePicker} from "react-color";


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
`;

const SubtaskContainer = styled.li`
    display: block;
    border: 1px solid #60a4f7;
    border-radius: 4px;
    width: 100%;
    padding:5px;  
`;

export {TextInput, TextArea, StyledCirclePicker, SubmitBtn, BtnsRow, Button, DateInput, Row, BtnSmall, SubtaskContainer, SubtaskList}
