// External Dependencies
import React from 'react';
import Popout from '../../components/layout/Popout';
import styled from '@emotion/styled';
import Styles from '../../constants/styles';
import LoginForm from './LoginForm';
import Heading1 from '../../components/Text/Heading1';
import Paragraph from '../../components/Text/Paragraph';
import Image from '../../components/common/Image';
import LoginListener from './LoginListener';

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
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
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
      <LeftWrapper>
        <Image 
          src={require('../../assets/images/incognito.png')}
          alt="Sleuth Icon"
          height={50}
          width={50}
        />
        <Heading1 color={Styles.colors.white}>
          Memorize
        </Heading1>
        <Paragraph color={Styles.colors.white}>
          Apply your memory techniques. We'll analyze them for you.
        </Paragraph>
      </LeftWrapper>
      <RightWrapper>
        <LoginListener>
          <LoginForm />
        </LoginListener>
      </RightWrapper>
    </StyledPopout>
  );
};

export default Login;
