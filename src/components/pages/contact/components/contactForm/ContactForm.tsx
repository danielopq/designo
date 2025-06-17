import './contactForm.scss';
import { BtRegular } from '../../../../ui';
import FormField from '../formField/FormField';
import { useContactForm } from '../../utils/useContactForm';

/**
 * Renders the contact form component of the website.
 * 
 * Includes input fields for name, email, phone, and message,
 * and handles client-side validation using a custom hook.
 *
 * @returns {JSX.Element} The contact form section with input validation.
 */
const ContactForm:React.FC = () => {
    const { handleSubmit, nameError, emailError, phoneError, messageError } = useContactForm();
    return (
        <>
            <div id=""></div>
            <form id="contactForm" onSubmit={handleSubmit}>
                <section id="contactDetails">
                    <div>
                        <h1>Contact US</h1>
                        <p>
                            Ready to take it to the next level? Let’s talk about your
                            project or idea and find out how we can help your business
                            grow. If you are looking for unique digital experiences
                            that’s relatable to your users, drop us a line.
                        </p>
                    </div>
                    <div>
                        <FormField fieldType='formTextField' fieldId='name' placeholder='name' errorMessage={nameError} ariaLabel='name' />
                        <FormField fieldType='formTextField' fieldId='email' placeholder='Email Address' errorMessage={emailError} ariaLabel='email' />
                        <FormField fieldType='formTextField' fieldId='phone' placeholder='Phone' errorMessage={phoneError} ariaLabel='phone' />
                        <FormField fieldType='formTextArea' fieldId='message' placeholder='Your Message' errorMessage={messageError} ariaLabel='message' />
                        <BtRegular text='SUBMIT' btType='whiteBg' />
                    </div>
                </section>
            </form>
        </>
    )
}
export default ContactForm;