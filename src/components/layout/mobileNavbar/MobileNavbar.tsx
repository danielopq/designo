import './mobileNavbar.scss';

import { BtMobileNavBar } from '../../ui';
import { useWebNavigation } from '../../../utils/useWebNavigation';

type MobileNavbarProps = {
    displayed: boolean;
    switchMobileMenu: () => void;
}

/**
 * Renders the mobile version of the navigation bar.
 * 
 * @param displayed - Determines whether the navigation bar should be visible.
 * @returns The mobile navigation bar component.
 */
const MobileNavbar: React.FC<MobileNavbarProps> = ({ displayed, switchMobileMenu }) => {
    const { navigateTo } = useWebNavigation();

    const handleClick = (path: string): void => {
        navigateTo(path);
        switchMobileMenu();
    }

    return (
        <nav id="mobileNavbar" style={{ display: displayed ? 'flex' : 'none' }}>
            <div>
                <BtMobileNavBar text='OUR COMPANY' handleClick={() => handleClick('/about')} />
                <BtMobileNavBar text='LOCATIONS' handleClick={() => handleClick('/locations')} />
                <BtMobileNavBar text='CONTACT' handleClick={() => handleClick('/contact')} />
            </div>
        </nav>
    )
}
export default MobileNavbar;