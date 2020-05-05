import React, {useState} from "react";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import {toast} from "react-toastify";
import {
    BaseInput,
    Row,
    Subtask,
    SubtaskBtnsContainer,
    SubtaskButton,
    SubtaskList,
    SubtaskText,
    BtnSmall,
    Label
} from "../../FormUIElements";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import {form_inital} from "../../subtasks-initial-data";
import { generateId } from "../../subtasks-initial-data";

const NewSubtask = props => {
    const { addSubtask } = props;
    const [inputValue, setValue] = useState('');

    const handleClick = e => {
        e.preventDefault();
        if (inputValue.length === 0) {
            toast.error("Subtask cannot be empty");
            return;
        }
        addSubtask(inputValue);
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

const Subtasks = props => {
    const {subtasksIds} = props;
    const [newTaskFormVisible, setNewTaskFormVisible] = useState(false);
    const [subtasks, setSubtasks] = useState(form_inital.subtasks);
    const [subtasksOrder, setSubtasksOrder] = useState(subtasksIds);

    const showForm = e => {
        e.preventDefault();
        setNewTaskFormVisible(true);
    };

    const hideForm = e => {
        e.preventDefault();
        setNewTaskFormVisible(false);
    };

    const onDragEnd = result => {
        const {destination, source, draggableId} = result;

        if (!destination) {
            return;
        }

        if (
            destination.index === source.index
        ) {
            return;
        }

        const newSubtasksIds = Array.from(subtasksOrder);

        newSubtasksIds.splice(source.index, 1);
        newSubtasksIds.splice(destination.index, 0, draggableId);

        setSubtasksOrder(newSubtasksIds);

        //TODO: call to server
    };

    const addNewSubtask = newSubtaskContent => {
        const newSubtasks = {...subtasks};
        const props = Object.getOwnPropertyNames(newSubtasks);
        const newId = generateId(props, "subtask");

        newSubtasks[newId] = {
            id: newId,
            content: newSubtaskContent,
            done: false,
        };

        const newOrder = Array.from(subtasksOrder);
        newOrder.push(newId);

        setSubtasks(newSubtasks);
        setSubtasksOrder(newOrder);

        // TODO: call to server
    };

    const removeSubtask = subtaskId => e => {
        e.preventDefault();

        const newSubtasksIds = Array.from(subtasksOrder);
        const subtaskIndex = newSubtasksIds.indexOf(subtaskId);

        newSubtasksIds.splice(subtaskIndex, 1);

        setSubtasksOrder(newSubtasksIds);

        // TODO: call to server
    };

    const markSubtaskDone = subtaskId => e => {
        e.preventDefault();

        const newSubtasks = {...subtasks};

        newSubtasks[subtaskId].done = true;

        setSubtasks(newSubtasks);

        // TODO: call to server
    };

    const unmarkSubtaskDone = subtaskId => e => {
        e.preventDefault();

        const newSubtasks = {...subtasks};

        newSubtasks[subtaskId].done = false;

        setSubtasks(newSubtasks);

        // TODO: call to server
    };

    return (
        <React.Fragment>
            <Row>
                Subtasks
                {
                    !newTaskFormVisible &&
                    <BtnSmall onClick={showForm}>
                        + add new
                    </BtnSmall>
                }
                {
                    newTaskFormVisible &&
                        <BtnSmall onClick={hideForm}>
                            - hide form
                        </BtnSmall>
                }
            </Row>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId={'subtasks'}>
                    {(provided, snapshot) => (
                        <SubtaskList
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{ marginBottom: snapshot.isDraggingOver ? '36px' : '0px' }}
                        >

                            {
                                newTaskFormVisible &&
                                    <NewSubtask addSubtask={addNewSubtask}/>
                            }

                            {
                                subtasksOrder.map((subtaskId, index) => {
                                    const subtask = subtasks[subtaskId];

                                    return (
                                        <Draggable key={subtaskId} draggableId={subtaskId} index={index}>
                                            {(provided, snapshot) => (
                                                <Subtask
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    done={subtask.done}
                                                >
                                                    <SubtaskText done={subtask.done}>
                                                        {subtask.content}
                                                    </SubtaskText>

                                                    <SubtaskBtnsContainer>
                                                        <SubtaskButton onClick={removeSubtask(subtaskId)}>
                                                            <DeleteIcon/>
                                                        </SubtaskButton>
                                                        <SubtaskButton onClick={subtask.done ? unmarkSubtaskDone(subtaskId) : markSubtaskDone(subtaskId)}>
                                                            {!subtask.done && <DoneIcon/>}
                                                            {subtask.done  && <ClearIcon/>}
                                                        </SubtaskButton>
                                                    </SubtaskBtnsContainer>
                                                </Subtask>
                                            )}
                                        </Draggable>
                                    )})
                            }
                        </SubtaskList>
                    )}
                </Droppable>
            </DragDropContext>
        </React.Fragment>
    )
};

export default Subtasks;
