import React, {useContext, useEffect, useState} from "react";
import styled from 'styled-components';
import {Draggable} from "react-beautiful-dnd";

import CreateIcon from '@material-ui/icons/Create';
import ScheduleIcon from '@material-ui/icons/Schedule';
import SubjectIcon from '@material-ui/icons/Subject';
import CommentIcon from '@material-ui/icons/Comment';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {SideMenuContext} from "../../../contexts/SideMenuContext";
import {types} from "../../../util/types";

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

const StyledIcon = styled.span`
      svg {
        font-size: 17px !important;
        margin-right: ${props => props.isinside ? '0' : '10px'};
        display: flex;
        align-items: center;
      }
`;


const SmallIcon = props => {
    const {Icon, isInside} = props;
    return <StyledIcon isinside={isInside ? 1 : 0}><Icon/></StyledIcon>
};

const Task = (props) => {
    const sideMenuContext = useContext(SideMenuContext);

    const {task, index} = props;

    const [taskId, setTaskId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [subtasksIds, setSubtasksIds] = useState([]);
    const [doneSubtasksIds, setDoneSubtasksIds] = useState([]);
    const [commentsIds, setCommentsIds] = useState([]);

    useEffect(() => {

        if (task.id) {
            setTaskId(task.id);
        }
        if (task.title) {
            setTitle(task.title);
        }
        if (task.description) {
            setDescription(task.description);
        }
        if (task.date) {
            const d = Date.parse(task.date);
            const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
            const month = new Intl.DateTimeFormat('en', {month: 'short'}).format(d);
            const date = `${day} ${month}`;
            setDate(date);
        }
        if (task.subtasksIds) {
            setSubtasksIds(task.subtasksIds);
        }
        if (task.doneSubtasksIds) {
            setDoneSubtasksIds(task.doneSubtasksIds);
        }
        if (task.commentsIds) {
            setCommentsIds(task.commentsIds);
        }

    }, [task.id, task.title, task.description, task.date, task.subtasksIds, task.doneSubtasksIds, task.commentsIds]);

    const handleClick = (e) => {
        e.preventDefault();
        sideMenuContext.setSideMenuVisible(true);
        sideMenuContext.setSideMenuIsNewTask(false);

        sideMenuContext.setSideMenuTaskId(taskId);
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
                    {title}
                    <TaskFooter>
                        {
                            date &&
                            <RowContainer>
                                <SmallIcon Icon={ScheduleIcon} isInside/>
                                <p>{date}</p>
                            </RowContainer>
                        }
                        {
                            description &&
                            <SmallIcon Icon={SubjectIcon}/>
                        }
                        {
                            commentsIds.length > 0 &&
                            <RowContainer>
                                <SmallIcon Icon={CommentIcon} isInside/>
                                <p>{commentsIds.length}</p>
                            </RowContainer>
                        }
                        {
                            subtasksIds.length > 0 &&
                            <RowContainer>
                                <SmallIcon Icon={CheckCircleIcon} isInside/>
                                <p>{doneSubtasksIds.length}/{subtasksIds.length}</p>
                            </RowContainer>
                        }
                    </TaskFooter>
                </TaskContainer>
            )}
        </Draggable>
    )
};

export default Task;
