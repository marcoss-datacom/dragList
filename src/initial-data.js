const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Take out the garbage', description: 'Some more text goest in here epxlaining the job', assignedPersonId: 1, statusId: 1 },
        'task-2': { id: 'task-2', content: 'Watch my favorite show', description: 'Some more text goest in here epxlaining the job', assignedPersonId: 3, statusId: 2 },
        'task-3': { id: 'task-3', content: 'Charge my phone', description: 'Some more text goest in here epxlaining the job', assignedPersonId: 1, statusId: 3 },
        'task-4': { id: 'task-4', content: 'Cook dinner', description: 'Some more text goest in here epxlaining the job', assignedPersonId: 2, statusId: 1 },
        'task-5': { id: 'task-5', content: 'Take out the garbage 2', description: 'Some more text goest in here epxlaining the job', assignedPersonId: 3, statusId: 2 },
        'task-6': { id: 'task-6', content: 'Watch my favorite show 2', description: 'Some more text goest in here epxlaining the job', assignedPersonId: 1, statusId: 3 },
        'task-7': { id: 'task-7', content: 'Charge my phone 2', description: 'Some more text goest in here epxlaining the job', assignedPersonId: 2, statusId: 1 },
        'task-8': { id: 'task-8', content: 'Cook dinner 2', description: 'Some more text goest in here epxlaining the job', assignedPersonId: 3, statusId: 2 },
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
            taskIds: ['task-5', 'task-6'],
        },
        'column-4': {
            id: 'column-4',
            title: '6th May',
            taskIds: ['task-7'],
        },
        'column-5': {
            id: 'column-5',
            title: '7th May',
            taskIds: ['task-8'],
        },
        'column-6': {
            id: 'column-6',
            title: '8th May',
            taskIds: [],
        },
        'column-7': {
            id: 'column-7',
            title: '9th May',
            taskIds: [],
        },
        'column-8': {
            id: 'column-8',
            title: '10th May',
            taskIds: [],
        }
    },
    // Facilitate reordering of the columns
    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5', 'column-6', 'column-7', 'column-8'],
    startDate: null
};

export default initialData;