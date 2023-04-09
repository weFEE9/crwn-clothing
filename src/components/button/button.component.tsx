import './button.styles.scss';

type MyProps = {
  children: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  buttonType: 'google' | 'inverted' | 'default';
};

const BUTTON_TYPE_CLASSES = {
  default: 'default',
  google: 'google-sign-in',
  inverted: 'inverted',
};

const Button = ({ children, type, buttonType, ...otherProps }: MyProps) => {
  return (
    <button
      type={type}
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
