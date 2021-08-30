import React, { useEffect, useState } from 'react';
import User from '../../components/User';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, CircularProgress, Grid, makeStyles, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import * as todosActions from '../../store/actions/todos';
import * as postsActions from '../../store/actions/posts';
import Todos from '../../components/Todos';
import CustomButton from '../../components/Button';
import Posts from '../../components/Posts';

/* eslint-disable react-hooks/exhaustive-deps */

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: '#4caf50',
    },
    button: {
        borderRadius: 10,
        margin: '0px 10px',
        padding: '10px 50px',
        cursor: 'pointer',
        backgroundColor: '#445899',
        color: 'white',
        '&:hover': {
            backgroundColor: '#2C428A',
        }
    }
}));

const Users = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const [userSelected, setUserSelected] = useState(false);
    const [kindView, setKindView] = useState(null);

    useEffect(() => {
        const getRelationedData = () => {
            todosActions.getTodos(dispatch, userSelected)
            postsActions.getPosts(dispatch, userSelected)
        }
        if (userSelected) {
            getRelationedData();
        }
    }, [userSelected])

    const handleChange = (userId) => {
        if (userId !== userSelected) {
            setKindView(null)
            setUserSelected(userId);
        } else {
            setKindView(null)
            setUserSelected(false);
        }
    }

    const handleChangeView = (kindView) => {
        setKindView(kindView)
    }

    return (
        <div style={{ width: 'calc(100% - 20px)', padding: 10 }}>
            {
                users && users.length > 0 ?
                    users.map((user, key) => {
                        return (
                            <Accordion key={key} TransitionProps={{ unmountOnExit: true }} expanded={user.id === userSelected} onChange={() => handleChange(user.id)} style={{ backgroundColor: 'rgb(68, 88, 153)', color: 'white' }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                >
                                    <Typography className={classes.heading}>{user && user.name}</Typography>
                                    <Typography className={classes.secondaryHeading}>{user && user.email}</Typography>
                                </AccordionSummary>
                                <AccordionDetails style={{ backgroundColor: '#0A1B55', maxHeight: 510 }}>
                                    {
                                        kindView && kindView === 'post' ?
                                            <Posts onBack={() => handleChangeView(null)} userId={userSelected} />
                                            :
                                            kindView && kindView === 'todos' ?
                                                <Todos onBack={() => handleChangeView(null)} userId={userSelected} />
                                                :
                                                <Grid container>
                                                    <User user={user} />
                                                    <Grid container item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                                        <CustomButton onClick={() => handleChangeView('post')} label="Post" />
                                                        <CustomButton onClick={() => handleChangeView('todos')} label="Todos" />
                                                    </Grid>
                                                </Grid>
                                    }
                                </AccordionDetails>
                            </Accordion>
                        )
                    })
                    :
                    <CircularProgress />
            }
        </div >
    )
}

export default Users;