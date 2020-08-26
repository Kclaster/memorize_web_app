// External Dependencies
import React from 'react';
import styled from '@emotion/styled';

// Internal Dependencies

// Local Typings
interface Props extends StyledProps {
  src: string;
  alt: string;
}

interface StyledProps {
  height: number;
  width: number;
}

// Local Variables
const StyledImage = styled.img(({
  width, 
  height
}: StyledProps) => ({
  height: `${height}px`,
  width: `${width}px`
}))

// Component Definition
const Image: React.FC<Props> = (props) => {
  return(
    <StyledImage {...props} />
  );
};

export default Image;
