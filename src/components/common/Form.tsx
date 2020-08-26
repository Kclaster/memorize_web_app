// External Dependencies
import React from 'react';

// Internal Dependencies

// Local Typings
interface Props {
  onSubmit: () => void;
}

// Local Variables

// Component Definition
const Form: React.FC<Props> = (props) => {

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    props.onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      {props.children}
    </form>
  );
};

export default Form;
