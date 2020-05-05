import React, {useState} from 'react';
import {BtnSmall, Comment, Row, Label, BaseInput, CommentTextContainer, CommentBtnsContainer, CommentButton} from "../../FormUIElements";
import {form_inital, generateId} from "../../subtasks-initial-data";
import { toast } from "react-toastify";
import DeleteIcon from "@material-ui/icons/Delete";

const NewCommentForm = props => {
    const { addComment } = props;
    const [inputValue, setValue] = useState('');

    const handleClick = e => {
        e.preventDefault();
        if(inputValue.length === 0) {
            toast.error("Comment cannot be empty");
        }
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
    const {commentsIds} = props;
    const [comments, setComments] = useState(form_inital.comments);
    const [commentsOrder, setCommentsOrder] = useState(commentsIds);
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
        const newComments = {...comments};
        const props = Object.getOwnPropertyNames(newComments);
        const newId = generateId(props, "commment");
        const newCommentsOrder = Array.from(commentsOrder);
        newCommentsOrder.unshift(newId);

        const comment = {
            content,
            id: newId
        };

        setCommentsOrder(newCommentsOrder);

        newComments[newId] = comment;
        setComments(newComments);

        //TODO: call to server
    };

    const deleteComment = commentId => e => {
        e.preventDefault();

        const newCommentsOrder = Array.from(commentsOrder)
            .filter(element => {
                return element !==commentId;
            });
        const newComments = {...comments};
        delete newComments[commentId];

        setCommentsOrder(newCommentsOrder);
        setComments(newComments);

        //TODO: call to server
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
            {
                commentsOrder.map(commentId => {
                    const comment = comments[commentId];

                    return <Comment key={comment.id}>
                        <CommentTextContainer>{comment.content}</CommentTextContainer>
                        <CommentBtnsContainer>
                            <CommentButton onClick={deleteComment(comment.id)}>
                                <DeleteIcon/>
                            </CommentButton>
                        </CommentBtnsContainer>
                    </Comment>
                })
            }
        </Label>
    )
};

export default Comments;
