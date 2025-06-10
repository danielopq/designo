import './letsTalk.scss';

import { useWebNavigation } from '../../../../../utils/webNavigation';
import { BtRegular } from '../../../../ui';
import { useLocation } from 'react-router-dom';

/**
 * Engagement section in the footer that encourages users to visit the contact page.
 * Automatically hides when already on the contact page.
 * 
 * @returns {React.JSX.Element} - "Let's Talk" call-to-action section with navigation button
 */
const LetsTalk: React.FC = () => {
    const location = useLocation();
    const { navigateTo } = useWebNavigation();
    return (
        <section id="letsTalk" style={{display: location.pathname === '/contact' ? 'none' : 'flex'}}>
            <div>
                <p>Let’s talk about your project</p>
                <p>
                    Ready to take it to the next level? Contact us today and find out
                    how our expertise can help your business grow.
                </p>
            </div>
            <BtRegular text='GET IN TOUCH' btType='whiteBg' handleClick={() => navigateTo('/contact')} />
        </section>
    )
}
export default LetsTalk;