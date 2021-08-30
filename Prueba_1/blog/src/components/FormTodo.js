import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Checkbox, FormControlLabel, Grid, makeStyles, withStyles } from '@material-ui/core';
import CustomButton from './Button';
import * as todoActions from '../store/actions/todos';
import _ from 'lodash';

const useStyles = makeStyles((theme) => ({
    rootInput: {
        '& label.MuiFormLabel-root': {
            color: 'white'
        },
        '& label.Mui-hover': {
            color: '#4caf50',
        },
        '& label.Mui-focused': {
            color: '#4caf50',
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottomColor: '#4caf50',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#4caf50',
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: 'white',
        },
        '& .MuiInputBase-input': {
            color: 'white'
        }
    }
}));

const GreenCheckbox = withStyles({
    root: {
        color: '#4caf50',
        '&$checked': {
            color: '#4caf50'
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const FormTodo = ({ userId }) => {

    const classes = useStyles();
    const [todoData, setTodoData] = useState({
        completed: false,
        title: ''
    })

    const onSaveTodo = () => {
        if (todoData.title.trim()) {
            todoActions.createTodo({ ...todoData, userId })
                .then(response => {
                    if (_.has(response, 'id') && response.id === 201) {
                        alert("La tarea ha sido guardada de manera exitosa.")
                        setTodoData({
                            completed: false,
                            title: ''
                        })
                    } else {
                        alert("La operación ha fallado.")
                    }
                })
        } else {
            alert("El campo título es requerido.")
        }
    }

    return (
        <Grid container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2C428A', padding: 10, borderRadius: 10 }}>
            <Grid item xs={12} md={4}>
                <div style={{ padding: '0px 10px' }}>
                    <TextField
                        label="Título"
                        fullWidth
                        style={{ color: 'white' }}
                        value={todoData.title}
                        classes={{
                            root: classes.rootInput
                        }}
                        onChange={(e) => setTodoData({ ...todoData, title: e.target.value })}
                    />
                </div>
            </Grid>
            <Grid item xs={12} md={4}>
                <FormControlLabel
                    control={
                        <GreenCheckbox
                            checked={todoData.completed}
                            onChange={() => setTodoData({ ...todoData, completed: !todoData.completed })}
                            name="completed"
                        />
                    }
                    label="Completado"
                    labelPlacement="start"
                />
            </Grid>
            <Grid item xs={12} md={4} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{ maxWidth: '50%' }}>
                    <CustomButton label="Guardar" kindButton="success" icon="save" onClick={() => onSaveTodo()} />
                </div>
            </Grid>
        </Grid>
    )
}

export default FormTodo;