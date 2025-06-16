import './mobileNavbar.scss';

import { BtMobileNavBar } from '../../ui';
import { useWebNavigation } from '../../../utils/webNavigation';

type MobileNavbarProps = {
    displayed: boolean;
}

/**
 * Renders the mobile version of the navigation bar.
 * 
 * @param displayed - Determines whether the navigation bar should be visible.
 * @returns The mobile navigation bar component.
 */
const MobileNavbar: React.FC<MobileNavbarProps> = ({ displayed }) => {
    const { navigateTo } = useWebNavigation();
    return (
        <nav id="mobileNavbar" style={{ display: displayed ? 'flex' : 'none' }}>
            <div>
                <BtMobileNavBar text='OUR COMPANY' handleClick={() => navigateTo('/about')} />
                <BtMobileNavBar text='LOCATIONS' handleClick={() => navigateTo('/locations')} />
                <BtMobileNavBar text='CONTACT' handleClick={() => navigateTo('/contact')} />
            </div>
        </nav>
    )
}
export default MobileNavbar;