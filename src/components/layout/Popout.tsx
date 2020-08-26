// External Dependencies
import React from 'react';
import styled from '@emotion/styled';

// Internal Dependencies

// Local Typings
interface Props {

}


// Local Variables
const Wrapper = styled.div({
boxShadow: 'inset 0 0 10px #000000',
width: '80%',
height:'80%',
margin: 'auto auto'
})

// Component Definition
const Popout: React.FC<Props> = (props) => {
  return(
    <Wrapper {...props}>
      {props.children}
    </Wrapper>
  );
};

export default Popout;
