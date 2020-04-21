import React from "react";
import styled from "styled-components";

import BoardForm from "../Forms/BoardForm";
import TaskForm from "../Forms/TaskForm";

const FormContainer = styled.div`
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


const SlideMenu = () => {

    return (
        <FormContainer>
            <TaskForm/>
        </FormContainer>
    )
};

export default SlideMenu;
