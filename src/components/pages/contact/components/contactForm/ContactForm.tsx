import './contactForm.scss';
import { BtRegular } from '../../../../ui';
import FormField from '../formField/FormField';
import { useState } from 'react';

type FormState = Record<string, string>;

/**
 * Renders the contact form section of the website.
 * Includes multiple input fields and handles basic form state and submission.
 *
 * @returns {JSX.Element} A contact form component
 */
const ContactForm = () => {
    const initialFormState: FormState = { name: 'hello', email: 'ueee', phone: '', message: '' }
    const [formErrors, setFormErrors] = useState<FormState>(initialFormState);
    const { name, email, phone, message } = formErrors;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newFormErrors: FormState = { name: '', email: '', phone: '', message: '' }
        setFormErrors(newFormErrors);
    }

    return (
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
                    <FormField fieldType='formTextField' fieldId='name' placeholder='name' errorMessage={name} ariaLabel='name' />
                    <FormField fieldType='formTextField' fieldId='email' placeholder='Email Address' errorMessage={email} ariaLabel='email' />
                    <FormField fieldType='formTextField' fieldId='phone' placeholder='Phone' errorMessage={phone} ariaLabel='phone' />
                    <FormField fieldType='formTextArea' fieldId='message' placeholder='Your Message' errorMessage={message} ariaLabel='message' />
                    <BtRegular text='SUBMIT' btType='whiteBg' />
                </div>
            </section>
        </form>
    )
}
export default ContactForm;