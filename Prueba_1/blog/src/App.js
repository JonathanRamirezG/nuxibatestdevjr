import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from './store/actions/users';
import routes from './routes';
import { Route, Switch } from 'react-router-dom';
import { Suspense } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

function App() {

  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);

  if (!users) {
    userActions.getUsers(dispatch);
  }

  return (
    <div className="App">
      <Suspense fallback={<CircularProgress />}>
        <Switch>
          {
            routes.map((route, key) => {
              return (
                <Route
                  key={key}
                  path={route.path}
                  exatc={route.exact}
                  name={route.name}
                  render={
                    props => <route.component {...props} />
                  }
                />
              )
            })
          }
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
