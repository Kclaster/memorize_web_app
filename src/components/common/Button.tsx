// External Dependencies
import React from 'react';
import styled from '@emotion/styled';

// Internal Dependencies
import Styles, { Colors } from '../../constants/styles';

// Local Typings
interface Props {
  onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
  type?: ButtonType
}

type ButtonType = 'submit' | 'button';

interface StyledButtonProps {
  backgroundColor?: Colors;
  color?: Colors
}

// Local Variables
const getBackgroundColor = (
  backgroundColor: Colors) => {
  return Styles.colors[backgroundColor];
};

const getColor = (color: Colors) => {
  return Styles.colors[color];
};

const StyledButton = styled.button(({
  backgroundColor = 'grey',
  color = 'white',
}: StyledButtonProps) => ({
  '&:hover': {
    backgroundColor: getBackgroundColor(color),
    color: getColor(backgroundColor),
  },
  background: getBackgroundColor(backgroundColor),
  border: 'none',
  borderRadius: '3px',
  color: getColor(color),
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  outline: 'none',
  padding: '12px 30px',
  transition: 'color .3s',

}));

// Component Definition
const Button: React.FC<Props> = ({
  children,
  ...props
}) => {
  return (
    <StyledButton {...props} >
      {children}
    </StyledButton>
  );
};

export default Button;
