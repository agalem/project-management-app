import React, {useContext, useEffect} from "react";
import styled from "styled-components";

import {SideMenuContext} from "../../contexts/SideMenuContext";
import NewTaskForm from "../Forms/TaskForm/NewTaskForm";
import UpdateTaskForm from "../Forms/TaskForm/UpdateTaskForm";

const FormContainer = styled.div`
    position: relative;
    width: ${props => props.isVisible ? '380px' : '0px'};
    height: 100%;
    background-color: #fff;
    top: -10px;
    right: -10px;
    margin: 0;
    padding:0;
    box-shadow: -4px 4px #000;
    padding: ${props => props.isVisible ? '10px' : '0px'};
    overflow-y: scroll;
    overflow-x: hidden;
    transition: all 0.3s;
`;

const SideDrawer = () => {
    const sideMenuContext = useContext(SideMenuContext);

    return (
        <FormContainer isVisible={sideMenuContext.isVisible}>
            {
                sideMenuContext.isNewTask &&
                <NewTaskForm/>
            }
            {
                !sideMenuContext.isNewTask &&
                <UpdateTaskForm taskId={sideMenuContext.taskId}/>
            }
        </FormContainer>
    )
};

export default SideDrawer;
