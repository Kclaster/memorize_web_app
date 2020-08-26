// External Dependencies
import React from 'react';
import Popout from '../../components/layout/Popout';
import styled from '@emotion/styled';
import Styles from '../../constants/styles';
import LoginForm from './LoginForm';

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


// Component Definition
const Login: React.FC<Props> = (props) => {
  return(
    <StyledPopout>
      <LeftWrapper />
      <RightWrapper>
        <LoginForm />
      </RightWrapper>
    </StyledPopout>
  );
};

export default Login;
