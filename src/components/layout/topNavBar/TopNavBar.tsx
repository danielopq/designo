import './topNavBar.scss';

import { useTopNavBarEvents } from './utils/useTopNavBarEvents';
import { NavBar, MobileNavbar } from '../../layout';
import { BtHamburger, BtHomeLink } from '../../ui';


/**
 * Renders the top navigation bar of the website, including the home link,
 * main navigation, hamburger menu, and mobile navigation menu.
 * 
 * @returns {JSX.Element} The rendered TopNavBar component.
 */
const TopNavBar: React.FC = () => {
    const { mobileMenuDisplayed, switchMobileMenu, onHomeLinkClick } = useTopNavBarEvents();

    return (
        <>
            <div id="topNavBar">
                <div>
                    <BtHomeLink BtType='darkLogo' handleClick={() => onHomeLinkClick()} />
                    <NavBar navBarStyle='dark' />
                    <BtHamburger menuDeployed={mobileMenuDisplayed} handleClick={switchMobileMenu} />
                </div>
            </div>
            <MobileNavbar displayed={mobileMenuDisplayed} switchMobileMenu={switchMobileMenu} />
        </>
    )
}
export default TopNavBar;