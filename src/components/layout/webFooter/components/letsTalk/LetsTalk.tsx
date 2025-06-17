import './letsTalk.scss';

import { useWebNavigation } from '../../../../../utils/webNavigation';
import { BtRegular } from '../../../../ui';

type LetsTalkProps = {
    displayed?: boolean;
}

/**
 * A call-to-action section in the footer that encourages users to visit the contact page.
 * This section is hidden when already on the contact page.
 * 
 * @param {LetsTalkProps} props - Component props.
 * @param {boolean} props.displayed - Determines whether the section should be hidden.
 * @returns {JSX.Element} The rendered "Let’s Talk" section with a navigation button.
 */
const LetsTalk: React.FC<LetsTalkProps> = ({ displayed = true}) => {

    const { navigateTo } = useWebNavigation();
    return (
        <section id="letsTalk" style={{display: displayed ? 'flex' : 'none'}}>
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