import './formField.scss';

type FormFieldProps = {
    fieldType: 'formTextField' | 'formTextArea';
    fieldId: string;
    placeholder: string;
    ariaLabel: string;
    errorMessage: string;
}

/**
 * Renders a form field that can be either a text input or a textarea,
 * based on the provided field type. Displays an error message if provided.
 *
 * @param {Object} props - The component props
 * @param {'formTextField' | 'formTextArea'} props.fieldType - Determines whether to render an <input> or <textarea>
 * @param {string} props.fieldId - The ID and name attribute of the form element
 * @param {string} props.ariaLabel - Accessible label for screen readers
 * @param {string} props.placeholder - Placeholder text for the form field
 * @param {string} props.errorMessage - Error message to display below the field
 * @returns {JSX.Element} A form field with optional error display
 */
const FormField: React.FC<FormFieldProps> = ({ fieldType, fieldId, placeholder, errorMessage, ariaLabel }) => {
    return (
        <div className={fieldType}>
            {fieldType === 'formTextField' ? (
                <input id={fieldId} name={fieldId} type="text" placeholder={placeholder} aria-label={ariaLabel} />
            ) : (
                <textarea id={fieldId} name={fieldId} placeholder={placeholder} aria-label={ariaLabel} />
            )}
            
            <div className='formError' style={{ display: (errorMessage !== '') ? 'flex' : 'none' }}>
                <p>{errorMessage}</p>
                <div></div>
            </div>
        </div>
    )
}
export default FormField;