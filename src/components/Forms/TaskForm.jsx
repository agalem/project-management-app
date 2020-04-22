import React, {useState, useEffect} from "react";
import {toast} from "react-toastify";
import {FormTitle, TextInput, TextArea, BtnsRow, SubmitBtn, Button, DateInput, Row, BtnSmall, Subtask, SubtaskList, Comment} from "./FormElements";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import {subtasks_inital} from "./subtasks-initial-data";

const TaskForm = () => {
    const [titleValue, setTitleValue] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [subtasks, setSubtasks] = useState(subtasks_inital.subtasks);
    const [comments, setComments] = useState(subtasks_inital.comments);

    const handleChange = () =>{

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast("Submitted");
    };

    const onDragEnd = () => {

    };

    useEffect(() => {
        console.log(subtasks);

    }, [])

    return (
        <React.Fragment>
            <FormTitle>Title</FormTitle>
            <form onSubmit={handleSubmit}>
                <BtnsRow style={{marginBottom: 15, marginTop: -20}}>
                    <SubmitBtn type="submit" value="Apply" />
                    <Button onClick={(e) => e.preventDefault()}>Close</Button>
                </BtnsRow>
                <label>
                    Title
                    <TextInput type="text" value={titleValue} onChange={handleChange} />
                </label>
                <label>
                    Description
                    <TextArea />
                </label>
                <label>
                    Date
                    <DateInput
                        type="datetime-local"
                        defaultValue={startDate}

                    />
                </label>
                <label>
                    <Row>
                        Subtasks
                        <BtnSmall onClick={(e) => e.preventDefault()}>+ add new</BtnSmall>
                    </Row>
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId={'subtasks'}>
                            {(provided, snapshot) => (
                                <SubtaskList
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    {subtasks.map((elem, index) => (
                                        <Draggable key={elem.id} draggableId={elem.id} index={index}>
                                            {(provided, snapshot) => (
                                                <Subtask
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    {elem.content}
                                                </Subtask>
                                            )}
                                        </Draggable>
                                    ))}
                                </SubtaskList>
                            )}
                        </Droppable>
                    </DragDropContext>
                </label>
                <label>
                    <Row>
                        Comments
                        <BtnSmall onClick={(e) => e.preventDefault()}>+ add new</BtnSmall>
                    </Row>
                    {comments.map((comment, index) => {
                        return <Comment key={index}>
                            { comment.content }
                        </Comment>
                    })}
                </label>
                <BtnsRow style={{ marginBottom: 40 }}>
                    <SubmitBtn type="submit" value="Apply" />
                    <Button onClick={(e) => e.preventDefault()}>Close</Button>
                </BtnsRow>
            </form>
        </React.Fragment>
    )
};

export default TaskForm;
