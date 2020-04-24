import React, { useContext } from "react";
import styled from 'styled-components';
import {Draggable} from "react-beautiful-dnd";

import CreateIcon from '@material-ui/icons/Create';
import ScheduleIcon from '@material-ui/icons/Schedule';
import SubjectIcon from '@material-ui/icons/Subject';
import CommentIcon from '@material-ui/icons/Comment';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {SideMenuContext} from "../../../contexts/SideMenuContext";
import {types} from "../../../types";

const EditBtn = styled.button`
    position: absolute;
    right:2px;
    top: 2px;
    height: 23px;
    width: 23px;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 2px;
    background-color: transparent;
    cursor: pointer;
    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

const StyledEditIcon = styled(CreateIcon)`
    font-size: 15px !important;
    color: #8a8c8e;
`;

const TaskContainer = styled.div`
    min-height: 30px;
    height: auto;
    width: auto;
    padding: 10px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    box-shadow: 0 1px #8a8c8e;
    margin: 5px 3px;
    margin-right: 5px;
    background-color: ${props => (props.isDragging ? '#baedff' : '#fff')};
    position: relative;
    & ${EditBtn} {
        display: none;
    }
    &:hover {
        background: #eff0f2;
        & ${EditBtn} {
            display: flex;
        }
    }
    
`;


const TaskFooter = styled.div`
    width: 100%;
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
`;

const RowContainer = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 10px;
    & p {
        padding: 0 3px;
        margin: 0;
    }
`;

const SmallIcon = props => {
    const {Icon, isInside} = props;

    const StyledIcon = styled(Icon)`
        font-size: 17px !important;
        margin-right: ${props => props.isinside ? '0' : '10px'};
    `;

    return <StyledIcon isinside={isInside ? 1 : 0}/>
};

const Task = (props) => {
    const sideMenuContext = useContext(SideMenuContext)

    const {task, index} = props;

    const handleClick = (e) => {
        e.preventDefault();
        sideMenuContext.setVisible(true);
        sideMenuContext.setContentType(types.FORM.TASK);
    };

    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided, snapshot) => (
                <TaskContainer
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                >
                    <EditBtn onClick={handleClick}>
                        <StyledEditIcon/>
                    </EditBtn>
                    {task.content}
                    <TaskFooter>
                        <RowContainer>
                            <SmallIcon Icon={ScheduleIcon} isInside/>
                            <p>19 kwi</p>
                        </RowContainer>
                        <SmallIcon Icon={SubjectIcon}/>
                        <RowContainer>
                            <SmallIcon Icon={CommentIcon} isInside/>
                            <p>1</p>
                        </RowContainer>
                        <RowContainer>
                            <SmallIcon Icon={CheckCircleIcon} isInside/>
                            <p>0/2</p>
                        </RowContainer>
                    </TaskFooter>
                </TaskContainer>
            )}
        </Draggable>
    )
};

export default Task;
