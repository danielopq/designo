import './homeHeader.scss';

import { BtRegular } from '../../../../ui';
import { useWebNavigation } from '../../../../../utils/webNavigation';

/**
 * Renders the header displayed at the top of the Home page.
 *
 * @returns {React.JSX.Element} The HomeHeader component.
 */
const HomeHeader: React.FC = () => {
    const { navigateTo } = useWebNavigation();

    return (
        <header id="homeHeader">
            <h1>Award-winning custom designs and digital branding solutions</h1>
            <p>
                With over 10 years in the industry, we are experienced in creating
                fully responsive websites, app design, and engaging brand experiences.
                Find out more about our services.
            </p>
            <BtRegular text='LEARN MORE' btType='whiteBg' handleClick={()=>navigateTo('/about')}/>

        </header>
    )
}
export default HomeHeader;