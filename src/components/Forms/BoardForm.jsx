import React, {useState} from "react";
import {toast} from "react-toastify";
import {TextInput, TextArea, StyledCirclePicker, BtnsRow, SubmitBtn, Button} from "./FormElements";

const BoardForm = () => {
    const [titleValue, setTitleValue] = useState("");

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
                    Background
                    <StyledCirclePicker/>
                </label>
                <BtnsRow>
                    <SubmitBtn type="submit" value="Apply" />
                    <Button>Close</Button>
                </BtnsRow>
            </form>
        </React.Fragment>
    )
};

export default BoardForm;
