import './letsTalk.scss';

import { useWebNavigation } from '../../../../../utils/webNavigation';
import { BtRegular } from '../../../../ui';
import { useLocation } from 'react-router-dom';

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