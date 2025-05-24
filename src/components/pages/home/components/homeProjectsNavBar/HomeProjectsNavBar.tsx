import './homeProjectsNavBar.scss';
import { BtProjectsNavBar } from '../../../../ui';

import { appMobilePic, appTabletPic, appDesktopPic, graphicMobilePic, graphicTabletPic, graphicDesktopPic, webMobilePic, webTabletPic, webDesktopLargePic } from '../../../../../../src/assets/img/shared';


/**
 * Navigation bar on the Home page displaying different types of projects.
 * 
 * @returns {React.JSX.Element} - The HomeProjectsNavBar component.
 */
const HomeProjectsNavBar: React.FC = () => {
    return (
        <nav id="homeProjectsNavBar">
            <BtProjectsNavBar text='WEB DESIGN' gridArea='web' mobilePic={webMobilePic} tabletPic={webTabletPic} deskTopPic={webDesktopLargePic} />
            <BtProjectsNavBar text='APP DESIGN' gridArea='app' mobilePic={appMobilePic} tabletPic={appTabletPic} deskTopPic={appDesktopPic} />
            <BtProjectsNavBar text='GRAPHIC DESIGN' gridArea='graphic' mobilePic={graphicMobilePic} tabletPic={graphicTabletPic} deskTopPic={graphicDesktopPic} />
        </nav>
    )
}
export default HomeProjectsNavBar;