import './form-input.styles.scss';

type MyProps = {
  label: string;
  type: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
  value: string;
  required?: boolean;
};

const FormInput = ({ label, ...otherProps }: MyProps) => {
  return (
    <div className='group'>
      {label && (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
      <input className='form-input' {...otherProps} required />
    </div>
  );
};

export default FormInput;
