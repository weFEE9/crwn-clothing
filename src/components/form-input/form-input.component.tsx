import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from './form-input.styles';

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
    <GroupContainer>
      {label && (
        <FormInputLabel shrink={otherProps.value.length > 0}>
          {label}
        </FormInputLabel>
      )}
      <FormInputContainer {...otherProps} required />
    </GroupContainer>
  );
};

export default FormInput;
