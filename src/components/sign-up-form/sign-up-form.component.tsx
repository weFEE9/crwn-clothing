import { useState } from 'react';
import {
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import Button from '../button/botton.component';

import './sign-up-form.styles.scss';

type formFields = {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const defaultFormFields: formFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('sign up');

    const validConfirmPassword = password === confirmPassword;
    if (!validConfirmPassword) {
      alert('password do not match');
      return;
    }

    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      console.log(response);

      if (!response) {
        return;
      }

      await createUserDocumentFromAuth(response.user);

      resetFormFields();
    } catch (error) {
      console.log('user creation encountered error', error);
    }
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account</h2>
      <span>Sing up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          onChange={handleChange}
          name='displayName'
          value={displayName}
          required
        />

        <FormInput
          label='Email'
          type='email'
          onChange={handleChange}
          name='email'
          value={email}
          required
        />

        <FormInput
          label='Password'
          type='password'
          onChange={handleChange}
          name='password'
          value={password}
          required
        />

        <FormInput
          label='Confirm Password'
          type='password'
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
          required
        />

        <Button type='submit' buttonType='default'>
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
