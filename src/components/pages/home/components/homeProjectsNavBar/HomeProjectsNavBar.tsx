import './homeProjectsNavBar.scss';
import { BtProjectsNavBar } from '../../../../ui';

/**
 * Navigation bar on the Home page displaying different types of projects.
 * 
 * @returns {React.JSX.Element} - The HomeProjectsNavBar component.
 */
const HomeProjectsNavBar: React.FC = () => {
    return (
        <nav id="homeProjectsNavBar">
            <BtProjectsNavBar text='WEB DESIGN' gridArea='web' />
            <BtProjectsNavBar text='APP DESIGN' gridArea='app' />
            <BtProjectsNavBar text='GRAPHIC DESIGN' gridArea='graphic' />
        </nav>
    )
}
export default HomeProjectsNavBar;