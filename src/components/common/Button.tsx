// External Dependencies
import React from 'react';
import styled from '@emotion/styled';

// Internal Dependencies
import Styles, { Colors } from '../../constants/styles';

// Local Typings
interface Props extends StyledButtonProps {
  onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
  type?: ButtonType
}

type ButtonType = 'submit' | 'button';

interface StyledButtonProps {
  backgroundColor?: Colors;
  gradientBackground?: GradientBackgroundColorProps;
  color?: Colors
}

interface GradientBackgroundColorProps {
  firstColor: Colors,
  secondColor: Colors,
}

// Local Variables
const getBackgroundColor = (
  backgroundColor: Colors,
  gradientBackground?: GradientBackgroundColorProps,
  ) => {
    if (gradientBackground) {
      return `linear-gradient(90deg, ${gradientBackground.firstColor}, ${gradientBackground.secondColor})`
    }
  return Styles.colors[backgroundColor];
};

const getColor = (color: Colors) => {
  return Styles.colors[color];
};

const StyledButton = styled.button(({
  backgroundColor = 'grey',
  gradientBackground,
  color = 'white',
}: StyledButtonProps) => ({
  '&:hover': {
    backgroundColor: getBackgroundColor(color, gradientBackground),
    color: getColor(backgroundColor),
  },
  background: getBackgroundColor(backgroundColor, gradientBackground),
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
