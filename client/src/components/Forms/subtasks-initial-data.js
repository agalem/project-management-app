export const form_inital = {
    subtasks: {
        'subtask-1': {
            id: "subtask-1",
            content: "Take out the garbage",
            done: false,
        },
        'subtask-2': {
            id: "subtask-2",
            content: "Watch my favorite show",
            done: true,
        },
        'subtask-3': {
            id: "subtask-3",
            content: "Charge my phone",
            done: false,
        },
        'subtask-4': {
            id: "subtask-4",
            content: "Cook dinner",
            done: false
        }
    },
    comments: {
        "comment-1": {
            id: "comment-1",
            content: "This is quite entertaining, I should do this more often",
        },
        "comment-2": {
            id: "comment-2",
            content: "This is another test comment, I hope it works"
        }
    },
    subtaskOrder: ['subtask-1', 'subtask-2', "subtask-3", "subtask-4"],
    commentsOrder: ['comment-1', 'comment-2']
};

export const generateId = (currentData, prefix) => {
    const newIndex = currentData.length + 1;

    return `${prefix}-${newIndex}`;
};
