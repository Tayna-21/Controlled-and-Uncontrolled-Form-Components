import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import {  InputValidationType, IconStateUncontrolledType, FormStateControlledTypes } from '../interfaces/index.tsx';

export const initialErrorStateUncontrolled: InputValidationType = {
    name: {
        messageError: null,
        validity: '',
    },
    email: {
        messageError: null,
        validity: ''
    },
    password: {
        messageError: null,
        validity: '',
    },
    confirmPassword: {
        messageError: null,
        validity: ''
    }
};

export const initialIconStateUncontrolled: IconStateUncontrolledType = {
    password: faEyeSlash,
    confirmPassword: faEyeSlash,
};

export const initialFormStateControlled: FormStateControlledType = {
    name: {
        content: '',
        messageError: null,
        validity: '',
    },
    email: {
        content: '',
        messageError: null,
        validity: '',
    },
    password: {
        content: '',
        type: 'password',
        messageError: null,
        validity: '',
        icon: faEyeSlash,
    },
    confirmPassword: {
        content: '',
        type: 'password',
        messageError: null,
        validity: '',
        icon: faEyeSlash,
    },
}
