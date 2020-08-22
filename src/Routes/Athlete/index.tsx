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
  ATHLETE_ROUTES,
} from '../../constants/routes';

// Local Typings
interface RouteProps {
  id?: string;
}

// Internal Dependencies
const LazyNumbersRoute = React.lazy(() => import('../../pages/athlete/Numbers'));

const NumbersRoute = (props: any) => <LazyNumbersRoute {...props} />;

// Local Variables
const defaultPath = `/${ROUTES.ATHLETE}/${ATHLETE_ROUTES.DASHBOARD}`;
const DefauRedirect = () => <Redirect to={defaultPath} />;

// Component Definition
const UserRouter = ({ match }: RouteComponentProps<RouteProps>) => {
  return (
      <React.Suspense fallback={<LoadingScreen />}>
        <Switch>
          <Route
            component={DefauRedirect}
            exact
            path={match.path}
          />
          <Route
            component={NumbersRoute}
            path={`${match.path}/${ATHLETE_ROUTES.NUMBERS}`}
          />
        </Switch>
      </React.Suspense>
  );
};

export default UserRouter;