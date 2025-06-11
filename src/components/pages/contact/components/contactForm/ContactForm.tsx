import './contactForm.scss';
import { BtRegular } from '../../../../ui';

import FormError from '../formError/formError';

const ContactForm = () => {
    return (
        <form id="contactForm">
            <section id="contactDetails">
                <h1>Contact US</h1>
                <p>
                    Ready to take it to the next level? Let’s talk about your
                    project or idea and find out how we can help your business
                    grow. If you are looking for unique digital experiences
                    that’s relatable to your users, drop us a line.
                </p>
                <div>
                    <div className='contactFormTextField'>
                        <input id="name" name="name" type="text" placeholder="Name" />
                        <FormError errorMessage="Can't be empty" displayed={true}/>
                    </div>
                    <div className='contactFormTextField'>
                        <input id="email" name="email" type="text" placeholder="Email Address" />
                        <FormError errorMessage="Can't be empty" displayed={true}/>
                    </div>
                    <div className='contactFormTextField'>
                        <input id="phone" name="phone" type="text" placeholder="Phone" />
                        <FormError errorMessage="Can't be empty" displayed={true}/>
                    </div>
                    <div className='contactFormTextArea'>
                        <textarea id="message" name="message" placeholder="Your Message" />
                        <FormError errorMessage="Can't be empty" displayed={true}/>
                    </div>
                    <BtRegular text='SUBMIT' btType='whiteBg' />
                </div>
            </section>
        </form>
    )
}
export default ContactForm;