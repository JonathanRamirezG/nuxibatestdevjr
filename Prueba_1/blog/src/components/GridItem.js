import { Grid } from '@material-ui/core';
import React from 'react';

const styles = {
    root: {
        margin: 30
    },
    divData: {
        display: 'flex',
        width: '100%',
        textAlign: 'left',
        margin: 0
    },
    label: {
        fontWeight: 'bold'
    }
}

const GridItem = ({ label, value }) => {
    return (
        <Grid container item xs={6} style={styles.divData}>
            <Grid item xs={6} style={styles.label}>{label}</Grid>
            <Grid item xs={6}>{value} </Grid>
        </Grid>
    )
}

export default GridItem;