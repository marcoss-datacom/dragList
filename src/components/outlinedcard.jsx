import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormDialog from './formDialog';


const useStyles = makeStyles({
    root: {
        minWidth: 190,
        backgroundColor: props => props.task.statusId === 1 ? '#fff3e0' : props.task.statusId === 2 ? '#e1f5fe' : '#e0f2f1'
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
        marginBottom: 12,
        fontWeight: 500,
        fontSize: '12px'
    },
    description: {
        fontSize: '12px'
    }
});

export default function OutlinedCard(props) {
    const classes = useStyles(props);
    return (
        <Card className={classes.root}>
            <CardContent className={classes.cardContent}>
                <Typography className={classes.pos} >
                    {props.task.content}
                </Typography>
                <Typography className={classes.description}>
                    {props.task.description}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <FormDialog assignedPersonId={props.task.assignedPersonId} statusId={props.task.statusId} id={props.id} />
            </CardActions>
        </Card>
    );
}