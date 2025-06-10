import './navBar.scss';
import { BtNavegation } from '../../ui';
import { useWebNavigation } from '../../../utils/webNavigation';

type NavBarProps = {
    navBarStyle: 'dark' | 'light';
}

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