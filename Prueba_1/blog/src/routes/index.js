import React from 'react';

const Users = React.lazy(() => import('../screens/users'));

const routes = [
    { path: '/', exact: true, name: 'Users', component: Users }
]

export default routes;