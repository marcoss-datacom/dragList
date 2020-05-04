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
    },
});

export default function OutlinedCard(props) {
    const classes = useStyles();
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent className={classes.cardContent}>
                <Typography variant="body2" component="p">
                    <strong>{props.task.content}</strong>
                </Typography>
                <Typography variant="body2" component="p">
                    {props.task.description}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <FormDialog assignedPersonId={props.task.assignedPersonId} statusId={props.task.statusId} id={props.id} />
            </CardActions>
        </Card>
    );
}