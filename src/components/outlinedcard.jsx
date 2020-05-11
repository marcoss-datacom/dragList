import React, { useContext } from 'react';
import { StoreContext } from '../index';
import { useObserver } from 'mobx-react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormDialog from './formDialog';
import DoneIcon from '@material-ui/icons/Done';
import PauseIcon from '@material-ui/icons/Pause';
import WorkIcon from '@material-ui/icons/Work';


const useStyles = makeStyles({
    root: {
        minWidth: 190,
        backgroundColor: props => props.assignedPersonId === 1 ? '#fff3e0' : props.assignedPersonId === 2 ? '#e1f5fe' : '#e0f2f1'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    cardActions: {
        paddingTop: 1,
        paddingBottom: 1,
    },
    cardContent: {
        paddingTop: 1,
        paddingBottom: 1,
    },
    pos: {
        marginBottom: 10,
        fontWeight: 500,
        fontSize: '12px',
        verticalAlign: 'middle',
        display: 'inline-flex',
        '& svg': {
            paddingRight: '4px'
        }
    },
    description: {
        fontSize: '12px'
    }
});

export default function OutlinedCard(props) {
    const store = useContext(StoreContext)
    const itemtask = store.tasks.find(function (element) {
        return element.id === props.task.id;
    });
    const classes = useStyles(itemtask);
    return useObserver(() => (
        <Card className={classes.root}>
            <CardContent className={classes.cardContent}>
                <Typography className={classes.pos} >
                    {itemtask.statusId === 1
                        ? <PauseIcon fontSize="small" />
                        : itemtask.statusId === 2 ? <WorkIcon fontSize="small" /> : <DoneIcon fontSize="small" />
                    }  {itemtask.content}
                </Typography>
                <Typography className={classes.description}>
                    {itemtask.description}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <FormDialog task={itemtask} />
            </CardActions>
        </Card>
    ));
}