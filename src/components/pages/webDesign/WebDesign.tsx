import './webDesign.scss';

import { SectionHeader, ProjectsNavBar } from '../../layout';
import { BtProjectsNavBar } from '../../ui';

import { appMobilePic, appTabletPic, appDesktopPic, graphicMobilePic, graphicTabletPic, graphicDesktopPic } from '../../../assets/img'

const WebDesign: React.FC = () => {
    return (
        <main id="webDesign">
            <SectionHeader
                title='Web Design'
                text='We build websites that serve as powerful marketing tools and bring memorable brand experiences.'
            />
            <ProjectsNavBar>
                <BtProjectsNavBar text='APP DESIGN' mobilePic={appMobilePic} tabletPic={appTabletPic} deskTopPic={appDesktopPic} />
                <BtProjectsNavBar text='GRAPHIC DESIGN' mobilePic={graphicMobilePic} tabletPic={graphicTabletPic} deskTopPic={graphicDesktopPic} />
            </ProjectsNavBar>
        </main>
    )
}
export default WebDesign;