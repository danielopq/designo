import './navBar.scss';
import { BtNavegation } from '../../ui';

type NavBarProps = {
    navBarStyle: 'dark' | 'light';
}

const NavBar: React.FC<NavBarProps> = ({ navBarStyle }) => {
    return (
        <nav className='navBar'>
            <BtNavegation text='OUR COMPANY' btStyle={navBarStyle}/>
            <BtNavegation text='LOCATIONS' btStyle={navBarStyle}/>
            <BtNavegation text='CONTACT' btStyle={navBarStyle}/>
        </nav>
    )
};
export default NavBar;