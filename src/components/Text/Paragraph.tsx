
// External Dependencies
import React from 'react';

// Internal Dependencies
import Text, { TextProps } from '.';

// Component Definition
const Paragraph: React.FC<TextProps> = (props) => {
  return (
    <Text 
    fontSize="sm" 
    {...props}
    >
      {props.children}
    </Text>
  );
};

export default Paragraph;