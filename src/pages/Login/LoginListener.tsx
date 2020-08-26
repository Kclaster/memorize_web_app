// External Dependencies
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

// Internal Dependencies
import { AUTH_USER_ROLE_IDS } from '../../constants/general';
import { logout } from '../../api/auth';
import {
  ADMIN_ROUTES,
  ROUTES,
  ATHLETE_ROUTES,
} from '../../constants/routes';
import { selectAuthRoleId, selectAuthIsTokenExpired } from '../../redux/selectors/auth';

// Local Variables
const getRedirectPath = (roleId: number) => {
  switch (roleId) {
    case AUTH_USER_ROLE_IDS.ATHLETE:
      return `/${ROUTES.ATHLETE}/${ATHLETE_ROUTES.DASHBOARD}`;

    default:
      return `/${ROUTES.ADMIN}/${ADMIN_ROUTES.DASHBOARD}`;
  }
};
// Component Definition
const LoginListener: React.FC = props => {
  const isTokenExpired = useSelector(selectAuthIsTokenExpired);
  const roleId = useSelector(selectAuthRoleId);
  const initialRedirectPath = !!roleId && !isTokenExpired ? `/${getRedirectPath(roleId)}` : null;
  const [redirectPath, setRedirectPath] = useState(initialRedirectPath);



  useEffect(() => {
    async function handleRedirectPath() {
      if (!!roleId && !isTokenExpired) {
        setRedirectPath(getRedirectPath(roleId));
      } else if (!!roleId && isTokenExpired) {
        await logout();
      }
    }

    handleRedirectPath();
  }, [roleId, isTokenExpired]);

  if (redirectPath) {
    return (
      <Redirect to={redirectPath} />
    );
  }

  return (
    <>
      {props.children}
    </>
  );
};

export default LoginListener;
