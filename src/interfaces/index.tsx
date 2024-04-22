import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type InputAttributes = {
    onChange: () => void;
    label: string,
    id: string,
    tabIndex: number,
    type: string,
    name: string,
    placeholder: string,
    message: string,
    validity: string,
}

type InputFields = {
    content: string,
    error: string | null,
    validity: string,
}

export type InputValidationType = {
    messageError: string | null,
    validity: string,
}

export interface InputControlledProps extends InputAttributes {
    onClick: () => void;
    value: string,
    error: string | null,
    icon?: IconDefinition
}

export interface FormInputs extends InputFields {
    type: string,
    icon?: IconDefinition,
};

export interface IconStateUncontrolledType {
    password: IconDefinition,
    confirmPassword: IconDefinition,
};

export interface FormStateControlledTypes extends InputValidationType {
    content: string,
    type?: string,
    icon?: IconDefinition,
}
