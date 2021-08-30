import { Card, CardActions, CardContent, Divider, Grid, List, ListItem, ListItemText, makeStyles, Modal, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from './Button';
import _ from 'lodash';

import * as commentsActions from '../store/actions/comments';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Posts = ({ userId, onBack }) => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);
    const comments = useSelector(state => state.comments.comments);
    const [showComments, setShowComments] = useState(false);

    const onShowComments = (postId) => {
        commentsActions.getComments(dispatch, postId)
            .then(response => {
                if (response) {
                    setShowComments(true);
                }
            })
    }

    const closeModal = () => {
        setShowComments(false);
    }

    return (
        <Grid container spacing={3} style={{ margin: '10px', backgroundColor: '#445899', color: 'white', maxHeight: '80%', overflowY: 'auto' }} >
            <Modal
                open={showComments}
                onClose={closeModal}
                className={classes.modal}
            >
                <div className={classes.paper}>
                    {
                        comments ?
                            _.size(comments) > 0 ?
                                <List>
                                    {
                                        _.map(comments, (comment, key) => {
                                            return (
                                                <React.Fragment key={key}>
                                                    <ListItem alignItems="flex-start">
                                                        <ListItemText
                                                            primary={comment && comment.name}
                                                            secondary={
                                                                <React.Fragment>
                                                                    <Typography
                                                                        component="span"
                                                                        variant="body2"
                                                                        className={classes.inline}
                                                                        color="textPrimary"
                                                                    >
                                                                        {comment && comment.email}
                                                                    </Typography>
                                                                    <br />
                                                                    {comment && comment.body}
                                                                </React.Fragment>
                                                            }
                                                        />
                                                    </ListItem>
                                                    <Divider variant="inset" component="li" />
                                                </React.Fragment>
                                            )
                                        })
                                    }
                                </List>
                                :
                                "No hay comentarios."
                            :
                            ""
                    }
                </div>
            </Modal>

            <div style={{ margin: '10px 0px 15px 0px' }}>
                <CustomButton label="Regresar" onClick={onBack} kindButton="back" icon="arrow_back" />
            </div>
            {
                posts ?
                    _.size(posts) > 0 ?
                        <Grid container justifyContent="space-around">
                            <Grid container item xs={12} spacing={3}>
                                {
                                    _.map(posts, (post, key) => {
                                        return (
                                            <Grid key={key} item xs={12} md={4}>
                                                <Card variant="outlined">
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="h2">
                                                            {post && post.title}
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                            {post && post.body}
                                                        </Typography>
                                                    </CardContent>
                                                    <CardActions>
                                                        <CustomButton label="Ver comentarios" onClick={() => onShowComments(post.id)} />
                                                    </CardActions>
                                                </Card>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </Grid>
                        :
                        <div>
                            <div>No hay posts registrados.</div>
                        </div>
                    :
                    null
            }
        </Grid>
    )
}

export default Posts;