import React from 'react';
import Grid from '@material-ui/core/Grid';

const Title = ({ title }) => {
    return (
        <Grid item xs={12} style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '5px 35px',
            color: '#4caf50',
            paddingTop: 0
        }}>
            <div style={{ fontSize: '1.6em', fontWeight: 'bold' }}>{title}</div>
        </Grid>
    )
}

export default Title;