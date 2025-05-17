import './homeProjectsNavBar.scss';
import { BtProjectsNavBar } from '../../../../ui';

import graphicDesignMb from '../../../../../../src/assets/img/shared/mobile/image-graphic-design.jpg';
import graphicDesignTb from '../../../../../../src/assets/img/shared/tablet/image-graphic-design.jpg';
import graphicDesignDt from '../../../../../../src/assets/img/shared/desktop/image-graphic-design.jpg';

import appDesignMb from '../../../../../../src/assets/img/shared/mobile/image-app-design.jpg';
import appDesignTb from '../../../../../../src/assets/img/shared/tablet/image-app-design.jpg';
import appDesignDt from '../../../../../../src/assets/img/shared/desktop/image-app-design.jpg';

import webDesignMb from '../../../../../../src/assets/img/shared/mobile/image-web-design.jpg';
import webDesignTb from '../../../../../../src/assets/img/shared/tablet/image-web-design.jpg';
import webDesignDt from '../../../../../../src/assets/img/shared/desktop/image-web-design-large.jpg';

/**
 * Navigation bar on the Home page displaying different types of projects.
 * 
 * @returns {React.JSX.Element} - The HomeProjectsNavBar component.
 */
const HomeProjectsNavBar: React.FC = () => {
    return (
        <nav id="homeProjectsNavBar">
            <BtProjectsNavBar text='WEB DESIGN' gridArea='web' mobilePic={webDesignMb} tabletPic={webDesignTb} deskTopPic={webDesignDt}/>
            <BtProjectsNavBar text='APP DESIGN' gridArea='app' mobilePic={appDesignMb} tabletPic={appDesignTb} deskTopPic={appDesignDt}/>
            <BtProjectsNavBar text='GRAPHIC DESIGN' gridArea='graphic' mobilePic={graphicDesignMb} tabletPic={graphicDesignTb} deskTopPic={graphicDesignDt}/>
        </nav>
    )
}
export default HomeProjectsNavBar;