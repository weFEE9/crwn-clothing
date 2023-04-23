import React from 'react';
import { BaseButton, GoogleSignInButton, InvertButton } from './button.styles';

type MyProps = {
  children: React.ReactNode;
  type?: 'submit' | 'reset' | 'button' | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  buttonType: string;
};

export const BUTTON_TYPE_CLASSES = {
  default: 'default',
  google: 'google-sign-in',
  inverted: 'inverted',
};

const getButton = (buttonType: string = BUTTON_TYPE_CLASSES.default) => {
  return {
    [BUTTON_TYPE_CLASSES.default]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertButton,
  }[buttonType];
};

const Button = ({ children, type, buttonType, ...otherProps }: MyProps) => {
  const CustomButton = getButton(buttonType);

  return (
    <CustomButton type={type} {...otherProps}>
      {children}
    </CustomButton>
  );
};

export default Button;
