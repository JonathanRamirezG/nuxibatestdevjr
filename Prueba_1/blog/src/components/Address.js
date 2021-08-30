import React from 'react';
import Grid from '@material-ui/core/Grid';
import Title from './Title';
import GridItem from './GridItem';

const Address = ({ address }) => {
    return (
        <Grid container spacing={3} style={{ margin: '10px 0px 0px 0px', borderBottom: '1px solid #4caf50', borderTop: '1px solid #4caf50' }}>
            <Title title={"Dirección"} />
            <GridItem label="Calle: " value={address && address.street} />
            <GridItem label="Suite: " value={address && address.suite} />
            <GridItem label="Ciudad: " value={address && address.city} />
            <GridItem label="Código Postal: " value={address && address.zipcode} />
        </Grid>
    )
}

export default Address;