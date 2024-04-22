import { useState } from 'react';
import Input from '../InputControlled/index.tsx';
import FormInputs from '../interfaces/index.tsx';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { initialFormStateControlled } from '../../utilities.ts'

const FormControlled: React.FC = () => {
    const [form, setForm] = useState<FormInputs>(initialFormStateControlled);
    const [disabledBtn, setDisableBtn] = useState<boolean>(false);
    const [isChecked, setChecked] = useState<boolean>(false);

    const handleChange: void = (event) => {
        setForm(form => {
            return {
                ...form,
                [event.target.name]: {
                    ...form[event.target.name],
                    content: event.target.value.trim(),
                    messageError: null,
                    validity: ''
                }
            };
        });

        setDisableBtn(false);
    };

    const handleClick: void = (field) => {
        const type: string = form[field].type;
        const icon: IconDefinition = form[field].icon;

        setForm(form => {
            return {
                ...form,
                [field]: {
                    ...form[field],
                    type: type === 'password' ? 'text' : 'password',
                    icon: icon === faEyeSlash ? faEye : faEyeSlash
                }
            };
        });
    };

    const checkBox: void = () => isChecked === false ? setChecked(true) : setChecked(false);

    const validateForm: void = () => {
        const validateInputValue: void = (field, errorValue) => {
            setForm(form => {
                return {
                    ...form,
                    [field]: {
                        ...form[field],
                        messageError: errorValue,
                        validity: errorValue === null ? '' : 'invalid'
                    }
                };
            });

            if (errorValue !== null) {
                setDisableBtn(true);
            };
        };

        const isName: void = () => {
            const regexName: RegExp = '^[a-zA-Z0-9]+$';
            const userName: string = form.name.content;

            if (!userName.match(regexName) && userName !== '') {
                validateInputValue('name', 'Alphabets and number only');
            } else if (userName.length === 1) {
                validateInputValue('name', 'The name is too short');
            } else if (userName === '') {
                validateInputValue('name', 'This field is required');
            } else if (!!userName.match(regexName) && userName!== '') {
                validateInputValue('name', null);
            };
        };

        const isEmail: void = () => {
            const regexEmail: RegExp = '^[a-zA-Z0-9.!_]+@[a-zA-Z]+[.]+([a-zA-Z]+)*$';
            const userEmail: string = form.email.content;

            if (!userEmail.match(regexEmail) && userEmail !== '') {
                validateInputValue('email', 'Please enter a valid email adress');
            } else if (userEmail === '') {
                validateInputValue('email', 'This field is required');
            } else if (userEmail.match(regexEmail)) {
                validateInputValue('email', null);
            };
        };

        const isPassword: void = () => {
            const regexPassword: RegExp = '^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$';
            const userPassword: string = form.password.content;

            if (!userPassword.match(regexPassword) && userPassword !== '') {
                validateInputValue('password','Password must contain at least 8 symbols, including numbers and special characters');
            } else if (form.password.content === '') {
                validateInputValue('password', 'This field is required');
            } else if (!!form.password.content.match(regexPassword)) {
                validateInputValue('password', null);
            };
        };

        const isConfirmPassword: void = () => {
            const userConfirmPassword: string = form.confirmPassword.content;

            if (userConfirmPassword !== form.password.content) {
                validateInputValue('confirmPassword', 'Password is not the same');
            } else if (userConfirmPassword === '') {
                validateInputValue('confirmPassword', 'This field is required');
            } else if (userConfirmPassword === form.password.content) {
                validateInputValue('confirmPassword', null);
            };
        };

        isName();
        isEmail();
        isPassword();
        isConfirmPassword();
    };

    const submitForm: void = (e) => {
        e.preventDefault();

        validateForm();
    };

    return (
      <>
        <form onSubmit={submitForm} action="#" method="post" encType="multipart/form-data" noValidate>
          <Input
          onChange={handleChange}
          attributes={
            { label: 'username',
              tabIndex: 1,
              id: 'user-name',
              type: 'text',
              name: 'name',
              placeholder: 'Enter your name',
              validity: form.name.validity,
              value: form.name.content,
              error: form.name.messageError }
            }
          />
          <Input
          onChange={handleChange}
          attributes={
            { label: 'email',
              tabIndex: 2,
              id: 'user-email',
              type: 'email',
              name: 'email',
              placeholder: 'Enter your email',
              validity: form.email.validity,
              value: form.email.content,
              error: form.email.messageError }
            }
          />
          <Input
          onChange={handleChange}
          onClick={() => handleClick('password')}
          attributes={
            { label: 'password',
              tabIndex: 3,
              id: 'user-password',
              type: form.password.type,
              name: 'password',
              placeholder: 'Enter your password',
              validity: form.password.validity,
              value: form.password.content,
              error: form.password.messageError,
              icon: form.password.icon }
            }
          />
          <Input
          onChange={handleChange}
          onClick={() => handleClick('confirmPassword')}
          attributes={
            { label: 'confirm password',
              tabIndex: 4,
              id: 'user-confirm-password',
              type: form.confirmPassword.type,
              name: 'confirmPassword',
              placeholder: 'Enter your password again',
              validity: form.confirmPassword.validity,
              value: form.confirmPassword.content,
              error: form.confirmPassword.messageError,
              icon: form.confirmPassword.icon }
            }
          />
          <div className="agreement">
            <label>
              <input onChange={checkBox} tabIndex="5" type="checkbox" checked={isChecked} />
              <span className="check-icon"></span>
            </label>
            <p>I agree to the <a href="#">terms and conditions</a></p>
          </div>
          <input tabIndex="-1" id="submit-button" type="submit" value="Register" disabled={disabledBtn}/>
          <span>*Required field</span>
        </form>
      </>
      )
};

export default FormControlled;
