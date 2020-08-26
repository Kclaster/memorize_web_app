// External Dependencies
import React from 'react';
import Popout from '../../components/layout/Popout';
import styled from '@emotion/styled';
import Form from '../../components/common/Form';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { LOGIN_REQUEST } from '../../redux/reducers/auth';
import { usePasswordField, useTextField } from '../../hooks';
import { useDispatch } from 'react-redux';

// Internal Dependencies

// Local Typings
interface Props {}

// Local Variables
const StyledPopout = styled(Popout)({
  display: 'flex'
})
const LeftWrapper = styled.div({
  height: '100%',
  width: '60%',
})
const RightWrapper = styled.div({
  height: '100%',
  width: '40%'
})

// Component Definition
const Login: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const usernameField = useTextField();
  const passwordField = usePasswordField();

  const handleLogin = () => {

    dispatch(LOGIN_REQUEST({
      password: passwordField.value,
      username: usernameField.value,
    }));
  };
  
  return(
    <StyledPopout>
      <LeftWrapper />
      <RightWrapper>
        <Form onSubmit={handleLogin}>
          <Input
            {...usernameField}
            placeholder="Username"
          />
          <Input
            {...passwordField}
            placeholder="Password"
          />
          <Button
            type="submit"
          >
            log in
          </Button>
        </Form>
      </RightWrapper>
    </StyledPopout>
  );
};

export default Login;
