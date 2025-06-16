import './topNavBar.scss';
import { useTopNavBarEvents } from './utils/useTopNavBarEvents';
import { NavBar, MobileNavbar } from '../../layout';
import { BtHamburger, BtHomeLink } from '../../ui';

const TopNavBar: React.FC = () => {
    const { mobileMenu, switchMobileMenu } = useTopNavBarEvents();
    return (
        <>
            <MobileNavbar displayed={mobileMenu} switchMobileMenu={switchMobileMenu} />
            <div id="topNavBar">
                <div>
                    <BtHomeLink BtType='darkLogo' />
                    <NavBar navBarStyle='dark' />
                    <BtHamburger menuDeployed={mobileMenu} handleClick={switchMobileMenu} />
                </div>
            </div>

        </>

    )
}
export default TopNavBar;