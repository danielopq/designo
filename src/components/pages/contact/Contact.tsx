import './contact.scss';

import { LocationsNavBar } from '../../layout';
import ContactForm from './components/ContactForm';
const Contact: React.FC = () => {
    return (
        <main id="contact">
            <ContactForm />
            <LocationsNavBar />
        </main>
    )
}
export default Contact;