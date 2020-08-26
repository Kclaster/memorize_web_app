// External Dependencies
import React from 'react';
import styled from '@emotion/styled';
import Div100vh from 'react-div-100vh';
import Styles from '../../constants/styles';
import Footer from './Footer';

// Local Variables
const StyledDiv100vh = styled(Div100vh)({
  alignItems: 'stretch',
  display: 'flex',
  flexDirection: 'column',
  background: `linear-gradient(45deg, ${Styles.colors.brand.light}, ${Styles.colors.white})`
});

// Component Definition
const Body: React.FC = props => {
  return (
    <StyledDiv100vh>
      {props.children}
      <Footer />
    </StyledDiv100vh>
  );
};

export default Body;
