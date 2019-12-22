import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import RotateRightIcon from '@material-ui/icons/RotateRight';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import RaceCarService from '../Service/RaceCarService'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    button: {
        margin: theme.spacing(1),
        padding: theme.spacing(5),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    controller: {
        justifyContent: 'center',
        alignSelf: 'center',
    }
}));

export default function Controller() {
    const classes = useStyles();

    function handleForward() {
        console.log("Forward")
        RaceCarService.forward();
    }

    function handleStop() {
        console.log("Stop")
        RaceCarService.stop();
    }

    function handleTurnLeft() {
        console.log("Left")
        RaceCarService.turnLeft();
    }

    function handleTurnRight() {
        console.log("Right")
        RaceCarService.turnRight();
    }

    function handleBackward() {
        console.log("Backward")
        RaceCarService.backward();
    }

    function handleSpinLeft() {
        console.log("Spin Left")
        RaceCarService.spinLeft();
    }

    function handleSpinRight() {
        console.log("Spin Right")
        RaceCarService.spinRight();
    }

    return (
        <div className={classes.root}>
            <Grid container className={classes.controller}>
                <Grid item>
                    <Button variant="contained" size="large" color="primary" className={classes.button}
                        onTouchStart={() => handleSpinLeft()}
                        onTouchEnd={() => handleStop()}>
                        <RotateLeftIcon />
                    </Button>
                    <Button variant="contained" size="large" color="primary" className={classes.button}
                        onTouchStart={() => handleForward()}
                        onTouchEnd={() => handleStop()}>
                        <ArrowUpwardIcon />
                    </Button>
                    <Button variant="contained" size="large" color="primary" className={classes.button}
                        onTouchStart={() => handleSpinRight()}
                        onTouchEnd={() => handleStop()}>
                        <RotateRightIcon />
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" size="large" color="primary" className={classes.button}
                        onTouchStart={() => handleTurnLeft()}
                        onTouchEnd={() => handleStop()}>
                        <ArrowBackIcon />
                    </Button>
                    <Button variant="contained" size="large" color="primary" className={classes.button}
                        onTouchStart={() => handleBackward()}
                        onTouchEnd={() => handleStop()}>
                        <ArrowDownwardIcon />
                    </Button>
                    <Button variant="contained" size="large" color="primary" className={classes.button}
                        onTouchStart={() => handleTurnRight()}
                        onTouchEnd={() => handleStop()}>
                        <ArrowForwardIcon />
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}