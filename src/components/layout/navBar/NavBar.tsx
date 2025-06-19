import './navBar.scss';
import { BtNavegation } from '../../ui';
import { useWebNavigation } from '../../../utils/useWebNavigation';

type NavBarProps = {
    navBarStyle: 'dark' | 'light';
}

/**
 * Renders the main navigation bar of the website.
 * 
 * @param {Object} props
 * @param {'dark' | 'light'} props.navBarStyle - Determines the visual style of the navigation buttons.
 * @returns {JSX.Element} The navigation bar component.
 */
const NavBar: React.FC<NavBarProps> = ({ navBarStyle }) => {
    const { navigateTo } = useWebNavigation();

    return (
        <nav className='navBar'>
            <BtNavegation text='OUR COMPANY' btStyle={navBarStyle} handleClick={() => { navigateTo('/about') }} />
            <BtNavegation text='LOCATIONS' btStyle={navBarStyle} handleClick={() => { navigateTo('/locations') }} />
            <BtNavegation text='CONTACT' btStyle={navBarStyle} handleClick={() => { navigateTo('/contact') }} />
        </nav>
    )
};
export default NavBar;