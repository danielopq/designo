import './contact.scss';

import { LocationsNavBar } from '../../layout';
import ContactForm from './components/contactForm/ContactForm';

/**
 * Renders the Contact page of the website.
 * 
 * Includes the contact form and a navigation section for office locations.
 * 
 * @returns {JSX.Element} The main content of the Contact page.
 */
const Contact: React.FC = () => {
    return (
        <main id="contact">
            <ContactForm />
            <LocationsNavBar />
        </main>
    )
}
export default Contact;