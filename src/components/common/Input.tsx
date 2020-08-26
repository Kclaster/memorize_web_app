// External Dependencies
import React, { ChangeEvent } from 'react';
import styled from '@emotion/styled';

// Internal Dependencies
import Styles from '../../constants/styles';

// Local Typings
interface Props {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
}

// Local Variables
const StyledInput = styled.input({
  background: 'transparent',
  borderColor: Styles.colors.grey,
  borderWidth: '0 0 2px',
  fontSize: '18px',
  margin: '10px',
  outline: 0,
  padding: '10px',
});

// Component Definition
const Input: React.FC<Props> = ({
  onChange,
  ...props
}) => {
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onChange(evt);
  };

  return (
    <StyledInput
      onChange={handleChange}
      {...props}
    />
  );
};

export default Input;
