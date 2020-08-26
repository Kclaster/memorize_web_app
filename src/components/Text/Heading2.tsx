// External Dependencies
import React from 'react';

// Internal Dependencies
import Text, { TextProps } from '.';

// Component Definition
const Heading2: React.FC<TextProps> = (props) => {
  return (
    <Text
      fontSize="22px"
      {...props}
    >
      {props.children}
    </Text>
  );
};

export default Heading2;