import './webDesign.scss';

import { SectionHeader, ProjectsList, ProjectView, ProjectsNavBar } from '../../layout';
import { BtProjectsNavBar } from '../../ui';

import { appMobilePic, appTabletPic, appDesktopPic, graphicMobilePic, graphicTabletPic, graphicDesktopPic,express,transfer,photon,builder,blogr,camp } from '../../../assets/img'

const WebDesign: React.FC = () => {
    return (
        <main id="webDesign">
            <SectionHeader
                title='Web Design'
                text='We build websites that serve as powerful marketing tools and bring memorable brand experiences.'
            />
            <ProjectsList>
                <ProjectView pic={express} title='EXPRESS' description='A multi-carrier shipping website for ecommerce businesses'/>
                <ProjectView pic={transfer} title='TRANSFER' description='Site for low-cost money transfers and sending money within seconds'/>
                <ProjectView pic={photon} title='PHOTON' description='A state-of-the-art music player with high-resolution audio and DSP effects'/>
                <ProjectView pic={builder} title='BUILDER' description='Connects users with local contractors based on their location'/>
                <ProjectView pic={blogr} title='BLOGR' description='Blogr is a platform for creating an online blog or publication'/>
                <ProjectView pic={camp} title='CAMP' description='Get expert training in coding, data, design, and digital marketing'/>
            </ProjectsList>
            <ProjectsNavBar>
                <BtProjectsNavBar text='APP DESIGN' mobilePic={appMobilePic} tabletPic={appTabletPic} deskTopPic={appDesktopPic} />
                <BtProjectsNavBar text='GRAPHIC DESIGN' mobilePic={graphicMobilePic} tabletPic={graphicTabletPic} deskTopPic={graphicDesktopPic} />
            </ProjectsNavBar>
        </main>
    )
}
export default WebDesign;