// External Dependencies
import React from 'react';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';

// Internal Dependencies
import Form from '../../components/common/Form';
import Input from '../../components/common/Input';
import Heading1 from '../../components/Text/Heading1';
import Button from '../../components/common/Button';
import { LOGIN_REQUEST } from '../../redux/reducers/auth';
import { usePasswordField, useTextField } from '../../hooks';
import Styles from '../../constants/styles';

// Local Typings
interface Props {}

// Local Variables
const FormWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  padding: '16px'
})
const StyledButton = styled(Button)({
  marginTop: '16px',
})

// Component Definition
const LoginForm: React.FC<Props> = (props) => {
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
            <Form onSubmit={handleLogin}>
          <FormWrapper>
          <Heading1>
            Sign In
          </Heading1>
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
  );
};

export default LoginForm;
