import React from 'react';
import Grid from '@material-ui/core/Grid';
// import { DataGrid } from '@material-ui/data-grid';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { Icon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import CustomButton from './Button';
import FormTodo from './FormTodo';

const Todos = ({ onBack, userId }) => {
    const todos = useSelector(state => state.todos.todos);
    return (
        <Grid container spacing={3} style={{ margin: '10px', backgroundColor: '#445899', color: 'white', maxHeight: '80%', overflowY: 'auto' }} >
            <div style={{ marginTop: 10 }}>
                <CustomButton label="Regresar" onClick={onBack} kindButton="back" icon="arrow_back" />
            </div>
            <div style={{ width: '100%', padding: 10, borderRadius: 10 }}>
                <FormTodo userId={userId} />
            </div>
            {
                todos ?
                    _.size(todos) > 0 ?
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{ color: 'white' }}>ID</TableCell>
                                        <TableCell style={{ color: 'white' }}>Titulo</TableCell>
                                        <TableCell style={{ color: 'white' }}>Completado</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        _.map(_.orderBy(todos, 'id', 'desc'), (todo, key) => {
                                            return (
                                                <TableRow key={key}>
                                                    <TableCell style={{ color: 'white' }}>{todo && todo.id}</TableCell>
                                                    <TableCell style={{ color: 'white' }}>{todo && todo.title}</TableCell>
                                                    <TableCell><Icon style={{ color: todo.completed ? '#4caf50' : 'red' }}>{todo.completed ? 'done' : 'clear'}</Icon></TableCell>
                                                </TableRow>
                                            )
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                        :
                        <div>
                            <div>No hay tareas registrados.</div>
                        </div>
                    :
                    null
            }
        </Grid>
    )
}

export default Todos;