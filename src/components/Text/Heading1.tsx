// External Dependencies
import React from 'react';
import Text from '.';

// Internal Dependencies

// Component Definition
const Heading1: React.FC = (props) => {
  return (
    <Text fontSize="lg">
      {props.children}
    </Text>
  );
};

export default Heading1;