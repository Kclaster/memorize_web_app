// External Dependencies
import React from 'react';
import {
  Route,
  RouteComponentProps,
  Switch,
} from 'react-router-dom';

// Internal Dependencies
import LoadingScreen from '../pages/Loading';
import Body from '../components/layout/Body';
import { ROUTES } from '../constants/routes';

// Local Variables
const LazyLoginRoute = React.lazy(() => import('../pages/Login'));

// Portals
const LazyAthleteRoutes = React.lazy(() => import('./Athlete'));
const LazyAdminRoutes = React.lazy(() => import('./Admin'));

const AthleteRoutes = (props: RouteComponentProps) => <LazyAthleteRoutes {...props} />;
const AdminRoutes = (props: RouteComponentProps) => <LazyAdminRoutes {...props} />;
const Login = (props: any) => <LazyLoginRoute {...props} />;

// Component Definition
const MainRoutes: React.FC = () => {
  return (
    <React.Suspense fallback={<LoadingScreen />}>
      <Body>
        <Switch>
          <Route
            component={Login}
            exact
            path="/"
          />
          <Route
            component={AthleteRoutes}
            path={`/${ROUTES.ATHLETE}`}
          />
          <Route
            component={AdminRoutes}
            path={`/${ROUTES.ADMIN}`}
          />
        </Switch>
      </Body>
    </React.Suspense>
  );
};

export default MainRoutes;
