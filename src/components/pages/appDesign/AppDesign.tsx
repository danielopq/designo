import './appDesign.scss';

import { useWebNavigation } from '../../../utils/webNavigation';
import { SectionHeader, ProjectsList, ProjectView, ProjectsNavBar } from '../../layout';
import { BtProjectsNavBar } from '../../ui';
import { appDesignBg, webMobilePic, webTabletPic, webDesktopSmallPic, graphicMobilePic, graphicTabletPic, graphicDesktopPic, airFilter, eyeCam, faceit, todo, loopstudios } from '../../../assets/img'

/**
 * Component that renders the App Design portfolio page.
 * Displays the company's app-related projects.
 * 
 * @returns {JSX.Element} The App Design portfolio page.
 */
const AppDesign: React.FC = () => {
    const { navigateTo } = useWebNavigation();
    return (
        <main id="appDesign">
            <SectionHeader
                backgroundImage={appDesignBg}
                title='App Design'
                text='Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.'
            />
            <ProjectsList>
                <ProjectView pic={airFilter} title='AIRFILTER' description='Solving the problem of poor indoor air quality by filtering the air' />
                <ProjectView pic={eyeCam} title='EYECAM' description='Product that lets you edit your favorite photos and videos at any time' />
                <ProjectView pic={faceit} title='FACEIT' description='A state-of-the-art music player with high-resolution audio and DSP effects' />
                <ProjectView pic={todo} title='TODO' description='A todo app that features cloud sync with light and dark mode' />
                <ProjectView pic={loopstudios} title='LOOPSTUDIOS' description='A VR experience app made for Loopstudios' />
            </ProjectsList>
            <ProjectsNavBar>
                <BtProjectsNavBar
                    text='WEB DESIGN'
                    mobilePic={webMobilePic}
                    tabletPic={webTabletPic}
                    deskTopPic={webDesktopSmallPic}
                    handleClick={() => { navigateTo('/webdesign') }}
                />
                <BtProjectsNavBar
                    text='GRAPHIC DESIGN'
                    mobilePic={graphicMobilePic}
                    tabletPic={graphicTabletPic}
                    deskTopPic={graphicDesktopPic}
                    handleClick={() => { navigateTo('/graphicdesign') }}
                />
            </ProjectsNavBar>
        </main>
    )
}
export default AppDesign;