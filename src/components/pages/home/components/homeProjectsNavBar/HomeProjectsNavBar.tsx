import './homeProjectsNavBar.scss';
import { BtProjectsNavBar } from '../../../../ui';
import { useWebNavigation } from '../../../../../utils/useWebNavigation';
import { appMobilePic, appTabletPic, appDesktopPic, graphicMobilePic, graphicTabletPic, graphicDesktopPic, webMobilePic, webTabletPic, webDesktopLargePic } from '../../../../../assets/img';


/**
 * Navigation bar on the Home page displaying different types of projects.
 * 
 * @returns {React.JSX.Element} - The HomeProjectsNavBar component.
 */
const HomeProjectsNavBar: React.FC = () => {
    const { navigateTo } = useWebNavigation();
    return (
        <nav id="homeProjectsNavBar">
            <BtProjectsNavBar text='WEB DESIGN' gridArea='web' mobilePic={webMobilePic} tabletPic={webTabletPic} deskTopPic={webDesktopLargePic} handleClick={()=>navigateTo('/webdesign')} />
            <BtProjectsNavBar text='APP DESIGN' gridArea='app' mobilePic={appMobilePic} tabletPic={appTabletPic} deskTopPic={appDesktopPic} handleClick={()=>navigateTo('/appdesign')}/>
            <BtProjectsNavBar text='GRAPHIC DESIGN' gridArea='graphic' mobilePic={graphicMobilePic} tabletPic={graphicTabletPic} deskTopPic={graphicDesktopPic} handleClick={()=>navigateTo('/graphicdesign')}/>
        </nav>
    )
}
export default HomeProjectsNavBar;