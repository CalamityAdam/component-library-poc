import React from 'react';

export interface ButtonProps {
  label: string;
}

function Button(props: ButtonProps): React.ReactElement {
  return <button>{props.label}</button>;
}

export default Button;
