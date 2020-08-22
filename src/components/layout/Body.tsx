// External Dependencies
import React from 'react';
import styled from '@emotion/styled';
import Div100vh from 'react-div-100vh';


// Local Variables
const StyledDiv100vh = styled(Div100vh)({
  alignItems: 'stretch',
  display: 'flex',
  flexDirection: 'column',
});

// Component Definition
const Body: React.FC = props => {
  return (
    <StyledDiv100vh>
      {props.children}
    </StyledDiv100vh>
  );
};

export default Body;
