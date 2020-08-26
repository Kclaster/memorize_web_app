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
  border: 'none',
  fontSize: '18px',
  outline: 0,
  padding: '10px',
  color: Styles.colors.grey
});

const Divider = styled.div({
  backgroundImage: `linear-gradient(45deg, ${Styles.colors.brand.light}, ${Styles.colors.brand.dark})`,
  height: '2px',
  marginBottom: '12px',
})

// Component Definition
const Input: React.FC<Props> = ({
  onChange,
  ...props
}) => {
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onChange(evt);
  };

  return (
    <>
    <StyledInput
      onChange={handleChange}
      {...props}
    />
    <Divider />
    </>
  );
};

export default Input;
