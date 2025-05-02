import './topNavBar.scss';
import { useState } from 'react';
import { NavBar } from '../../layout';
import { BtHamburger } from '../../ui';

const TopNavBar: React.FC = () => {
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);

    const handleClick = () => {
        setMobileMenu(!mobileMenu);
    }

    return (
        <div id="topNavBar">
            <div>
                <NavBar navBarStyle='dark' />
                <BtHamburger menuDeployed={mobileMenu} handleClick={handleClick} />
            </div>
        </div>
    )
}
export default TopNavBar;