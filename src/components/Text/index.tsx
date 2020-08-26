// External Dependencies
import { css } from 'emotion';
import React from 'react';

// Internal Dependencies
import Styles from '../../constants/styles';

// Local Typings
export interface TextProps {
  as?: any;
  color?: string;
  fontSize?: string;
  fontWeight?: number;
}

// Local Variable
const getStyle = ({
  color,
  fontSize = '16px',
  fontWeight = 400,
}: TextProps) => css({
  color: color ? color : Styles.colors.grey,
  fontSize: fontSize,
  fontWeight,
  textDecoration: 'none',
  margin: '0px'
});

// Component Definition
const Text: React.FC<TextProps> = ({
  as = 'p',
  ...props
}) => {
  return React.createElement(
    as,
    {
      className: getStyle(props),
      ...props,
    }, props.children);
};

export default Text;
