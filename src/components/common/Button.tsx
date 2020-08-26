// External Dependencies
import React from 'react';
import styled from '@emotion/styled';

// Internal Dependencies
import Styles from '../../constants/styles';

// Local Typings
interface Props extends StyledButtonProps {
  onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
  type?: ButtonType
}

type ButtonType = 'submit' | 'button';

interface StyledButtonProps {
  backgroundColor?: string;
  gradientBackground?: GradientBackgroundColorProps;
  color?: string
}

interface GradientBackgroundColorProps {
  firstColor: string,
  secondColor: string,
}

// Local Variables
const getBackgroundColor = (
  backgroundColor?: string,
  gradientBackground?: GradientBackgroundColorProps,
  ) => {
    console.log({backgroundColor})
    if (!!gradientBackground) {
      return `linear-gradient(90deg, ${gradientBackground.firstColor}, ${gradientBackground.secondColor})`
    }
  return backgroundColor;
};

const reverseGradients = (gradientBackground?: GradientBackgroundColorProps) => {
  console.log("firing")
  return gradientBackground ? (
    {
      firstColor: gradientBackground.secondColor,
      secondColor: gradientBackground.firstColor,
    }) : undefined 
}


const StyledButton = styled.button(({
  backgroundColor,
  gradientBackground,
  color = 'white',
}: StyledButtonProps) => ({
  '&:hover': {
    background: getBackgroundColor(
      color,
      reverseGradients(gradientBackground)
      ),
    color: backgroundColor || Styles.colors.white,
  },
  background: getBackgroundColor(backgroundColor, gradientBackground),
  border: 'none',
  borderRadius: '3px',
  color: Styles.colors.white,
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  outline: 'none',
  padding: '12px 30px',
  transition: 'color .3s, background .3',

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
