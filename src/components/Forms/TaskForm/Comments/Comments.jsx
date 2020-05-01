import React, {useState} from 'react';
import {BtnSmall, Comment, Row, Label, BaseInput} from "../../FormUIElements";
import {form_inital, generateId} from "../../subtasks-initial-data";

const NewCommentForm = props => {
    const { addComment } = props;
    const [inputValue, setValue] = useState('');

    const handleClick = e => {
        e.preventDefault();
        addComment(inputValue);
        setValue('');
    };

    return (
        <Row style={{ marginBottom: 20}}>
            <Label>
                <BaseInput onChange={e => setValue(e.target.value)} value={inputValue}/>
            </Label>
            <BtnSmall narrow border onClick={handleClick}>Add</BtnSmall>
        </Row>
    )
};

const Comments = props => {
    const [comments, setComments] = useState(form_inital.comments);
    const [newCommentFormVisible, setNewCommentFormVisible] = useState(false);

    const showForm = e => {
        e.preventDefault();
        setNewCommentFormVisible(true);
    };

    const hideForm = e => {
        e.preventDefault();
        setNewCommentFormVisible(false);
    };

    const addComment = content => {
        const newComments = Array.from(comments);
        const newId = generateId(newComments, "commment")

        const comment = {
            content,
            id: newId
        };

        newComments.unshift(comment);
        setComments(newComments);
    };

    return (
        <Label>
            <Row>
                Comments
                {
                    !newCommentFormVisible &&
                    <BtnSmall onClick={showForm}>+ add new</BtnSmall>
                }
                {
                    newCommentFormVisible &&
                    <BtnSmall onClick={hideForm}>- hide form</BtnSmall>
                }
            </Row>
            {
                newCommentFormVisible &&
                    <NewCommentForm addComment={addComment}/>
            }
            {comments.map((comment, index) => {
                return <Comment key={index}>
                    { comment.content }
                </Comment>
            })}
        </Label>
    )
};

export default Comments;
