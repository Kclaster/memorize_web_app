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
import Styles from '../../constants/styles';

// Internal Dependencies

// Local Typings
interface Props {}

// Local Variables
const StyledPopout = styled(Popout)({
  display: 'flex'
})
const LeftWrapper = styled.div({
  backgroundColor: Styles.colors.brand.dark,
  height: '100%',
  width: '60%',
})
const RightWrapper = styled.div({
  backgroundColor: Styles.colors.white,
  height: '100%',
  width: '40%'
})
const FormWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  padding: '16px'
})
const StyledButton = styled(Button)({
  marginTop: '16px',
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
          <FormWrapper>
          <Input
            {...usernameField}
            placeholder="Username"
          />
          <Input
            {...passwordField}
            placeholder="Password"
          />
          <StyledButton
            gradientBackground={{
              firstColor: Styles.colors.brand.light,
              secondColor: Styles.colors.brand.dark 
            }}
            type="submit"
          >
            Log In
          </StyledButton>
          <StyledButton
            backgroundColor={Styles.colors.brand.dark}
          >
            Register
          </StyledButton>
          </FormWrapper>
        </Form>
      </RightWrapper>
    </StyledPopout>
  );
};

export default Login;
