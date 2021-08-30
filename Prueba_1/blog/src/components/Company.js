import React from 'react';
import Grid from '@material-ui/core/Grid';
import Title from './Title';
import GridItem from './GridItem';

const Company = ({ company }) => {
    return (
        <Grid container spacing={3} style={{ margin: '0px 0px 10px 0px' }}>
            <Title title={"Compañia"} />
            <GridItem label="Empresa: " value={company && company.name} />
            <GridItem label="Eslogan: " value={company && company.catchPhrase} />
            <GridItem label="BS: " value={company && company.bs} />
        </Grid>
    )
}

export default Company;