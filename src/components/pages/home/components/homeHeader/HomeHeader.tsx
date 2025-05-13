import './homeHeader.scss';

import { BtRegular } from '../../../../ui';

const HomeHeader: React.FC = () => {
    return (
        <header id="homeHeader">
            <h1>Award-winning custom designs and digital branding solutions</h1>
            <p>
                With over 10 years in the industry, we are experienced in creating fully
                responsive websites, app design, and engaging brand experiences.
                Find out more about our services.
            </p>
            <BtRegular text='GET IN TOUCH' btType='whiteBg'/>

        </header>
    )
}
export default HomeHeader;