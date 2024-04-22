import { useState, useRef } from 'react';
import Input from '../InputUncontrolled/index.tsx';
import { initialErrorStateUncontrolled } from '../../utilities.ts'

const FormUncontrolled: React.FC = () => {
    const refName = useRef<HTMLInputElement>('');
    const refEmail = useRef<HTMLInputElement>('');
    const refPassword = useRef<HTMLInputElement>('');
    const refConfirmPassword = useRef<HTMLInputElement>('');
    const refCheckbox = useRef<HTMLInputElement>();
    const refSubmitBtn = useRef<HTMLInputElement>();
    const [error, setError] = useState(initialErrorStateUncontrolled);

    const handleChange: void = (event) => {
        setError(error => {
            return {
                ...error,
                [event.target.name]: {
                    messageError: null,
                    validity: ''
                }
            };
        });

        refSubmitBtn.current.disabled = false;
    };

    const handleCheckboxChange: void = () => {
        refCheckbox.current.checked === false
            ? true
            : false
    };

    const validateForm = () => {
        const validateInputValue = (field: string, errorValue: string | null) => {
            setError(error => {
                return {
                    ...error,
                    [field]: {
                        messageError: errorValue,
                        validity: errorValue !== null ? 'invalid' : ''
                    }
                };
            });

            if (errorValue !== null) {
                refSubmitBtn.current.disabled = true;
            };
        };

        const isName = () => {
            const name: string = refName.current.value.trim();
            const regexName: RegExp = '^[a-zA-Z0-9]+$';

            if (!name.match(regexName) && name !='') {
                validateInputValue('name', 'Alphabets and number only');
            } else if (name === '') {
                validateInputValue('name', 'This field is required');
            } else if (name.length === 1) {
                validateInputValue('name', 'The name is too short');
            } else if (name.match(regexName) && name != '') {
                validateInputValue('name', null);
            };
        };

        const isEmail = () => {
            const email: string = refEmail.current.value.trim();
            const regexEmail: Regexp = '^[a-zA-Z0-9.!_]+@[a-zA-Z]+[.]+([a-zA-Z]+)*$';

            if (!email.match(regexEmail) && email != '') {
                validateInputValue('email', 'Please enter a valid email adress');
            } else if (email === '') {
                validateInputValue('email', 'This field is required');
            } else if (email.match(regexEmail)) {
                validateInputValue('email', null);
            };
        };

        const isPassword = () => {
            const password: string = refPassword.current.value.trim();
            const regexPassword: RegExp = '^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$';

            if (!password.match(regexPassword) && password != '') {
                validateInputValue('password', 'Password must contain at least 8 symbols, including numbers and special characters');
            } else if (password === '') {
                validateInputValue('password', 'This field is required');
            } else if (password.match(regexPassword)) {
                validateInputValue('password', null);
            };
        };

        const isConfirmPassword = () => {
            const confirmPassword: string = refConfirmPassword.current.value.trim();

            if (confirmPassword != refPassword.current.value.trim()) {
                validateInputValue('confirmPassword', 'Password is not the same');
            } else if (confirmPassword === '') {
                validateInputValue('confirmPassword', 'This field is required');
            } else if (confirmPassword === refPassword.current.value.trim()) {
              validateInputValue('confirmPassword', null);
            };
        };

        isName();
        isEmail();
        isPassword();
        isConfirmPassword();
    };

    const submitForm = (e) => {
        e.preventDefault()

        validateForm();
    };

    return (
      <>
        <form onSubmit={submitForm} action="#" method="post" encType="multipart/form-data" noValidate>
          <Input
            ref={refName}
            onChange={handleChange}
            label="username"
            tabIndex="1"
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            validity={error.name.validity}
            message={error.name.messageError}
          />
          <Input
            ref={refEmail}
            onChange={handleChange}
            label="email"
            tabIndex="2"
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            message={error.email.messageError}
            validity={error.email.validity}
          />
          <Input
            ref={refPassword}
            onChange={handleChange}
            label="password"
            tabIndex="3"
            id="password"
            type='password'
            name="password"
            placeholder="Enter your password"
            message={error.password.messageError}
            validity={error.password.validity}
          />
          <Input
            ref={refConfirmPassword}
            onChange={handleChange}
            label="confirm password"
            tabIndex="3"
            id="confirm-password"
            type='password'
            name="confirmPassword"
            placeholder="Enter your password again"
            message={error.confirmPassword.messageError}
            validity={error.confirmPassword.validity}
          />
          <div className="agreement">
            <label>
              <input ref={refCheckbox} onClick={handleCheckboxChange} tabIndex="5" type="checkbox"/>
              <span className="check-icon"></span>
            </label>
            <p>I agree to the <a href="#">terms and conditions</a></p>
          </div>
          <input tabIndex="-1" ref={refSubmitBtn} id="submit_button" type="submit" value="Register" />
          <span>*Required field</span>
        </form>
      </>
    );
};

export default FormUncontrolled;
