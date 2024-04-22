import { useState, forwardRef } from 'react';
import InputUncontrolledProps from '../interfaces/index.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { initialIconStateUncontrolled } from '../../utilities.ts'

const InputUncontrolled = forwardRef<HTMLInputElement, InputUncontrolledProps>((props, ref) => {
    const [icon, setIcon] = useState(initialIconStateUncontrolled);

    const handleClick: void = () => {
        if (icon[props.name] === faEyeSlash) {
            setIcon(icon => {
                return {
                    ...icon,
                    [props.name]: faEye
                }
            });

            ref.current.type = 'text';
        } else if (icon[props.name] === faEye) {
            setIcon(icon => {
                return {
                    ...icon,
                    [props.name]: faEyeSlash
                }
            });

            ref.current.type = 'password';
        };
    };

    return (
      <div className="form-field">
        <label htmlFor={props.id}>{props.label}*</label>
        <div className="input-container">
          <input ref={ref} {...props} required autoComplete="off"/>
          { props.type === 'password' &&
          <FontAwesomeIcon onClick={handleClick} icon={icon[props.name]} style={{color: "#ffffff",}} /> }
        </div>
        <span className="error-message">{props.message}</span>
      </div>
    )
});

export default InputUncontrolled
