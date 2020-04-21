import React, {useState} from "react";
import {toast} from "react-toastify";
import {TextInput, TextArea, BtnsRow, SubmitBtn, Button, DateInput, Row, BtnSmall, SubtaskContainer, SubtaskList} from "./FormElements";

const TaskForm = () => {
    const [titleValue, setTitleValue] = useState("");
    const [startDate, setStartDate] = useState(new Date());

    const handleChange = () =>{

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast("Submitted");
    };

    return (
        <React.Fragment>
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
                    <SubtaskList>
                        <SubtaskContainer>Task 1</SubtaskContainer>
                        <SubtaskContainer>Task 2</SubtaskContainer>
                    </SubtaskList>
                </label>
                <BtnsRow>
                    <SubmitBtn type="submit" value="Apply" />
                    <Button onClick={(e) => e.preventDefault()}>Close</Button>
                </BtnsRow>
            </form>
        </React.Fragment>
    )
};

export default TaskForm;
