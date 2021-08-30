import React from 'react';
import { Grid, Icon, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    button: {
        display: 'flex',
        borderRadius: 10,
        margin: '0px 10px',
        padding: '10px 50px',
        cursor: 'pointer',
        color: 'white',
        '&:hover': {
            backgroundColor: '#2C428A',
        }
    },
    normalButton: {
        backgroundColor: '#445899',
        '&:hover': {
            backgroundColor: '#2C428A',
        }
    },
    backButton: {
        backgroundColor: '#2C428A',
        '&:hover': {
            backgroundColor: '#042388',
        }
    },
    successButton: {
        backgroundColor: '#4caf50',
        '&:hover': {
            backgroundColor: '#388e3c',
        }
    },
    icon: {
        padding: '0px 10px 0px 0px'
    }
}));

const CustomButton = ({ label, onClick, kindButton, icon }) => {
    const classes = useStyles();

    let classButtonColor = classes.normalButton;
    switch (kindButton) {
        case 'back':
            classButtonColor = classes.backButton;
            break;
        case 'success':
            classButtonColor = classes.successButton;
            break;
        default:
            break;
    }

    return (
        <Grid className={clsx(classes.button, classButtonColor)} onClick={onClick}>
            {icon ? <Icon className={classes.icon}>{icon} </Icon> : null}
            {label}
        </Grid>
    )
}

export default CustomButton;
