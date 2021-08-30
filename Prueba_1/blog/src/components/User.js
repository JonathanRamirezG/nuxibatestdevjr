import React from 'react';
import Grid from '@material-ui/core/Grid';
import Company from './Company';
import Address from './Address';
import GridItem from './GridItem';

const User = ({ user }) => {
    return (
        <Grid container spacing={3} style={{ margin: '10px', backgroundColor: '#445899', color: 'white' }} >
            <GridItem label="Nombre: " value={user.name && user.name} />
            <GridItem label="Usuario: " value={user.username && user.username} />
            <GridItem label="Correo electrónico: " value={user.email && user.email} />
            <GridItem label="Teléfono: " value={user.phone && user.phone} />
            <GridItem label="Sitio web: " value={user.website && user.website} />
            {
                user.address ?
                    <Address address={user.address} />
                    :
                    null
            }
            {
                user.company ?
                    <Company company={user.company} />
                    :
                    null
            }

        </Grid>
    )
}

export default User;