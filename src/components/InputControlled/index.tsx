import InputControlledProps from '../interfaces/index.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Input: React.FC<InputControlledProps> = ({onChange, onClick, attributes}) => {
    return (
        <div className="form-field">
          <label htmlFor={attributes.id}>{attributes.label}*</label>
          <div className="input-container">
            <input onChange={onChange}
              tabIndex={attributes.tabIndex} id={attributes.id} type={attributes.type} name={attributes.name} placeholder={attributes.placeholder}
              required autoComplete="off" validity={attributes.validity} value={attributes.value}/>
            { attributes.icon &&
              <FontAwesomeIcon onClick={onClick} icon={attributes.icon} style={{color: "#ffffff",}} />
            }
          </div>
          <span className="error-message">{attributes.error}</span>
        </div>
    );
};

export default Input;
