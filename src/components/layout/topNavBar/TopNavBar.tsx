import './topNavBar.scss';
import { BtHamburger } from '../../ui';

const TopNavBar: React.FC = () => {
    return (
        <div id="topNavBar">
            <div>
                <BtHamburger />
            </div>
        </div>
    )
}
export default TopNavBar;