
import React, { useContext } from 'react';
import { StoreContext } from '../index';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

export default function DialogSelect(props) {
    const store = useContext(StoreContext)
    const taskId = props.task.id;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [assignedPerson, setAssignedPerson] = React.useState(props.task.assignedPersonId);
    const [status, setStatus] = React.useState(props.task.statusId);

    const handlePersonChange = (event) => {
        setAssignedPerson(Number(event.target.value) || '');
    };

    const handleStatusChange = (event) => {
        setStatus(Number(event.target.value) || '');
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = (e, store) => {
        const task = {
            assignedPersonId: assignedPerson,
            statusId: status,
            id: taskId
        }
        store.updateTask(task);
        setOpen(false);
    }

    return (
        <StoreContext.Consumer>
            {
                store => (
                    <div>
                        <IconButton aria-label="edit" onClick={handleClickOpen} size="small">
                            <EditIcon />
                        </IconButton>
                        <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                            <DialogTitle>{props.task.content}</DialogTitle>
                            <DialogContent>
                                <form className={classes.container}>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel id="person-slct-label">Assigned To:</InputLabel>
                                        <Select
                                            labelId="person-slct-label"
                                            id="person-select"
                                            value={assignedPerson}
                                            onChange={handlePersonChange}
                                            autoWidth
                                            input={<Input />}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={1}>John Snow </MenuItem>
                                            <MenuItem value={2}>Agent Smith</MenuItem>
                                            <MenuItem value={3}>Aria Stark</MenuItem>
                                            <MenuItem value={4}>Somebody with a really long name</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel id="demo-dialog-select-label">Status</InputLabel>
                                        <Select
                                            labelId="demo-dialog-select-label"
                                            id="demo-dialog-select"
                                            value={status}
                                            onChange={handleStatusChange}
                                            input={<Input />}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={1}>On Hold</MenuItem>
                                            <MenuItem value={2}>In Progress</MenuItem>
                                            <MenuItem value={3}>Completed</MenuItem>
                                        </Select>
                                    </FormControl>
                                </form>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    Cancel
          </Button>
                                <Button onClick={(e) => handleSave(e, store)} color="primary">
                                    Ok
          </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                )
            }
        </StoreContext.Consumer>
    );
}