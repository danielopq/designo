import './navBar.scss';
import { BtNavegation } from '../../ui';

const NavBar:React.FC = () =>{
    return(
        <nav className='navBar'>
            <BtNavegation text='OUR COMPANY'/>
            <BtNavegation text='LOCATIONS'/>
            <BtNavegation text='CONTACT'/>
        </nav>
    )
};
export default NavBar;