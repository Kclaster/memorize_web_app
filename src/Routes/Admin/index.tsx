// External Dependencies
import React from 'react';
import {
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
} from 'react-router-dom';

// Internal Dependencies
import LoadingScreen from '../../pages/Loading';
import {
  ROUTES,
  ADMIN_ROUTES,
} from '../../constants/routes';

// Local Typings
interface RouteProps {
  id?: string;
}

// Local Variables
const defaultPath = `/${ROUTES.ADMIN}/${ADMIN_ROUTES.DASHBOARD}`;
const DefauRedirect = () => <Redirect to={defaultPath} />;

// Component Definition
const AdminRouter = ({ match }: RouteComponentProps<RouteProps>) => {
  return (
      <React.Suspense fallback={<LoadingScreen />}>
        <Switch>
          <Route
            component={DefauRedirect}
            exact
            path={match.path}
          />
        </Switch>
      </React.Suspense>
  );
};

export default AdminRouter;