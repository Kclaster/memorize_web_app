// External Dependencies
import React from 'react';
import Text, { TextProps } from '.';

// Internal Dependencies

// Component Definition
const Heading1: React.FC<TextProps>  = (props) => {
  return (
    <Text 
    fontSize="28px"
    {...props}
    >
      {props.children}
    </Text>
  );
};

export default Heading1;