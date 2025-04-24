import './topNavBar.scss';
import { BtHamburger } from '../../ui';
import { useState } from 'react';

const TopNavBar: React.FC = () => {
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);

    const handleClick = () => {
        setMobileMenu(!mobileMenu);
    }

    return (
        <div id="topNavBar">
            <div>
                <BtHamburger menuDeployed={mobileMenu} handleClick={handleClick} />
            </div>
        </div>
    )
}
export default TopNavBar;