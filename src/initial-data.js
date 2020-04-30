const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Take out the garbage' },
        'task-2': { id: 'task-2', content: 'Watch my favorite show' },
        'task-3': { id: 'task-3', content: 'Charge my phone' },
        'task-4': { id: 'task-4', content: 'Cook dinner' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'On Hold',
            taskIds: [],
        },
        'column-2': {
            id: 'column-2',
            title: '4th May',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        },
        'column-3': {
            id: 'column-3',
            title: '5th May',
            taskIds: [],
        },
        'column-4': {
            id: 'column-4',
            title: '6th May',
            taskIds: [],
        },
        'column-5': {
            id: 'column-5',
            title: '7th May',
            taskIds: [],
        },
        'column-6': {
            id: 'column-6',
            title: '8th May',
            taskIds: [],
        }
    },
    // Facilitate reordering of the columns
    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5', 'column-6']
};

export default initialData;