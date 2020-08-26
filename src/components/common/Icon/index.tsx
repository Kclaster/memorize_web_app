// External Dependencies
import React from 'react';
import svgPaths, { IconName } from './svg-data';
import Styles from '../../../constants/styles';

// Internal Dependencies

// Local Typings
interface Props {
  color?: string;
  name: IconName;
  size?: string;
}

// Local Variables

// Component Definition
const Icon: React.FC<Props> = ({
  color = Styles.colors.black,
  size = '16px',
  name,
}) => {
  return(
    <svg
    height={size}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
    >
      {svgPaths[name](color)}
    </svg>
  );
};

export default Icon;
