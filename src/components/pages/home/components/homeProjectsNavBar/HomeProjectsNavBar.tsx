import './homeProjectsNavBar.scss';
import { BtProjectsNavBar } from '../../../../ui';

import graphicDesignMb from '../../../../../../src/assets/img/shared/mobile/image-graphic-design.jpg';
import graphicDesignTb from '../../../../../../src/assets/img/shared/tablet/image-graphic-design.jpg';
import graphicDesignDt from '../../../../../../src/assets/img/shared/desktop/image-graphic-design.jpg';

/**
 * Navigation bar on the Home page displaying different types of projects.
 * 
 * @returns {React.JSX.Element} - The HomeProjectsNavBar component.
 */
const HomeProjectsNavBar: React.FC = () => {
    return (
        <nav id="homeProjectsNavBar">
            <BtProjectsNavBar text='WEB DESIGN' gridArea='web' mobilePic={graphicDesignPic} tabletPic={} desktopPic={}/>
            <BtProjectsNavBar text='APP DESIGN' gridArea='app' mobilePic={graphicDesignPic} tabletPic={} desktopPic={}/>
            <BtProjectsNavBar text='GRAPHIC DESIGN' gridArea='graphic' mobilePic={graphicDesignPic} tabletPic={} desktopPic={}/>
        </nav>
    )
}
export default HomeProjectsNavBar;