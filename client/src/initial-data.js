export const initial = {
    tasks: {
        'task-1': {
            id: "task-1",
            title: "Take out the garbage",
            description: "This is just a simple example of a description",
            date: (new Date()).toString(),
            subtasksIds: ['subtask-1', 'subtask-2'],
            commentsIds: ['comment-1']
        },
        'task-2': {
            id: "task-2",
            title: "Watch my favorite show"
        },
        'task-3': {
            id: "task-3",
            title: "Charge my phone"
        },
        'task-4': {
            id: "task-4",
            title: "Cook dinner"
        },
        'task-5': {
            id: "task-5",
            title: "Cook dinner"
        },
        'task-6': {
            id: "task-6",
            title: "Cook dinner"},
        'task-7': {
            id: "task-7",
            title: "Cook dinner"
        },
        'task-8': {
            id: "task-8",
            title: "Cook dinner"
        },
        'task-9': {
            id: "task-9",
            title: "Cook dinner"
        },
        'task-10': {
            id: "task-10",
            title: "Cook dinner"
        },
    },
    columns: {
        'column-1': {
            id: "column-1",
            title: "To do",
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5', 'task-6', 'task-7', 'task-8', 'task-9', 'task-10' ],
        },
        'column-2': {
            id: "column-2",
            title: "In progress",
            taskIds: [],
        },
        'column-3': {
            id: "column-3",
            title: "Done",
            taskIds: [],
        },
        'column-4': {
            id: 'column-4',
            title: "new 1",
            taskIds: []
        }
    },
    columnOrder: ['column-1', 'column-2', "column-3", "column-4"],
    boards: [
        {
            id: 'board-1',
            title: 'Aplikacja Kanban'
        }
    ]
};
