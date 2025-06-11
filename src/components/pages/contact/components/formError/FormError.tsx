import './formError.scss';

type FormErrorProps = {
    errorMessage: string;
    displayed: boolean;
}

/**
 * Renders an error message related to a form input.
 * The component is conditionally shown based on the `displayed` prop.
 * 
 * @param {Object} props
 * @param {string} props.errorMessage - The error message text to display.
 * @param {boolean} props.displayed - Determines whether the error message is visible.
 * @returns {JSX.Element} The form error message component.
 */
const FormError: React.FC<FormErrorProps> = ({errorMessage,displayed}) => {
    return (
        <div className='formError' style={{display: displayed ? 'flex' : 'none'}}>
            <p></p>
            <div>{errorMessage}</div>
        </div>
    )
}
export default FormError;