import { useEffect, useRef, useState } from "react";

type FormState = Record<string, string>;


/**
 * Custom hook that manages form validation logic for the contact form.
 * 
 * Handles validation for required fields, email format, and UK phone numbers.
 * 
 * @returns {object} Form submission handler and validation error messages for each field.
 */
export const useContactForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const initialFormState: FormState = { nameError: '', emailError: '', phoneError: '', messageError: '' }
    const [formErrors, setFormErrors] = useState<FormState>(initialFormState);
    const { nameError, emailError, phoneError, messageError } = formErrors;
    const [confirmationDisplayed, setConfirmationDisplayed] = useState<boolean>(false);

    // Enables or disables website scrolling based on confirmation visibility
    useEffect(() => {
        if (confirmationDisplayed) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [confirmationDisplayed])

    /**
     * Toggles the visibility of the confirmation message/modal
     * shown after successfully submitting the form.
     */
    const switchConfirmation = (): void => {
        setConfirmationDisplayed(!confirmationDisplayed);
    }

    /**
     * Checks if a text value is empty after trimming whitespace.
     * 
     * @param textValue - The input string to validate.
     * @returns {string} An error message if empty, or an empty string if valid.
     */
    const validateEmpty = (textValue: string): string => {
        let errorMess: string = '';
        textValue?.trim() === '' && (errorMess = "Can't be empty");
        return errorMess;
    }

    /**
     * Validates if a given number is a UK phone number (without country prefix).
     * 
     * Assumes UK landline or mobile format starting with 01, 02, 03, 07, or 08.
     * Excludes international format (+44 / 0044).
     * 
     * @param phone - Phone number as a string.
     * @returns {string} Error message if invalid, or empty string if valid.
     */
    const validatePhone = (phone: string): string => {
        let errorMess: string = '';
        const trimmed = phone.replace(/\s+/g, '');
        const ukPhoneRegex = /^(0(1\d{9}|2\d{9}|3\d{9}|7\d{9}|8\d{9}))$/;

        if (validateEmpty(trimmed) === '') {
            !ukPhoneRegex.test(trimmed) && (errorMess = 'Invalid format');
        } else {
            errorMess = "Can't be empty";
        }
        return errorMess;
    }

    /**
     * Validates if a string has a valid email format.
     * 
     * @param textValue - Email input to validate.
     * @returns {string} An error message if invalid, or an empty string if valid.
     */
    const validateEmail = (textValue: string): string => {
        let errorMess: string = '';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (validateEmpty(textValue) === '') {
            !emailRegex.test(textValue) && (errorMess = 'Invalid format');
        } else {
            errorMess = "Can't be empty";
        }

        return errorMess;
    }

    /**
     * Handles form submission and updates form error state based on validations.
     * 
     * @param e - Form submit event.
     */
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(document.getElementById('contactForm') as HTMLFormElement);

        const newNameError: string = validateEmpty(form.get('name') as string);
        const newEmailError: string = validateEmail(form.get('email') as string);
        const newPhoneError: string = validatePhone(form.get('phone') as string);
        const newMessageError: string = validateEmpty(form.get('message') as string);

        const newFormErrors: FormState = { nameError: newNameError, emailError: newEmailError, phoneError: newPhoneError, messageError: newMessageError }
        setFormErrors(newFormErrors);

        const hasErrors = Object.values(newFormErrors).some((error) => error !== '');

        if (!hasErrors && formRef.current) {
            //formRef.current.submit();
            formRef.current.reset();
            switchConfirmation();
        }
    }

    return { handleSubmit, switchConfirmation, formRef, confirmationDisplayed, nameError, emailError, phoneError, messageError }
}