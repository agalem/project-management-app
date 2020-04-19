import React, {useState} from "react";
import styled from "styled-components";

import { ToastContainer, toast } from 'react-toastify';
import { CirclePicker } from 'react-color';

const MenuContainer = styled.div`
    position: relative;
    width: 380px;
    height: 100%;
    background-color: #fff;
    top: -10px;
    right: -10px;
    margin: 0;
    padding:0;
    box-shadow: -4px 4px #000;
    padding: 10px;
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

const SlideMenu = () => {
    const [titleValue, setTitleValue] = useState("");

    const handleChange = () =>{

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast("Submitted");
    };

    return (
        <MenuContainer>
            <h2>Title</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Title
                    <TextInput type="text" value={titleValue} onChange={handleChange} />
                </label>
                <label>
                    Description
                    <TextArea />
                </label>
                <label>
                    Background
                    <StyledCirclePicker/>
                </label>
                <SubmitBtn type="submit" value="Apply" />
            </form>
        </MenuContainer>
    )
};

export default SlideMenu;
