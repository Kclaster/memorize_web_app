// Internal Dependencies
import { login } from '../../../api/auth';
import { NULL_ACTION } from '../../../redux/actions';
import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
} from '../../../redux/reducers/auth';
import { createSaga } from '../createSaga';

const loginSaga = createSaga({
  apiRequest: login,
  errorAction: LOGIN_ERROR,
  requestAction: LOGIN_REQUEST,
  successAction: NULL_ACTION,
});

export default loginSaga.watcher;
