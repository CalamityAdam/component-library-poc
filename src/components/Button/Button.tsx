import React from 'react';
import './Button.scss';

export interface ButtonProps {
  label: string;
}

function Button(props: ButtonProps): React.ReactElement {
  return <button className='button'>{props.label}</button>;
}

export default Button;
