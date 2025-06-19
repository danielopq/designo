import './graphicDesign.scss';

import { useWebNavigation } from '../../../utils/useWebNavigation';
import { SectionHeader, ProjectsList, ProjectView, ProjectsNavBar } from '../../layout';
import { BtProjectsNavBar } from '../../ui';
import { graphicDesignBg, appMobilePic, appTabletPic, appDesktopPic, webMobilePic, webTabletPic, webDesktopSmallPic, timBrown, boxedWater, science, builder, blogr, camp } from '../../../assets/img'

/**
 * Component that renders the graphic design portfolio page.
 * Displays the company's graphic design related projects.
 * 
 * @returns {JSX.Element} The graphic design portfolio page.
 */
const GraphicDesign: React.FC = () => {
    const { navigateTo } = useWebNavigation();

    return (
        <main id="graphicDesign">
            <SectionHeader
                backgroundImage={graphicDesignBg}
                title='Graphic Design'
                text='We deliver eye-catching branding materials that are tailored to meet your business objectives.'
            />
            <ProjectsList>
                <ProjectView pic={timBrown} title='TIM BROWN' description='A book cover designed for Tim Brown’s new release, ‘Change’' />
                <ProjectView pic={boxedWater} title='BOXED WATER' description='A simple packaging concept made for Boxed Water' />
                <ProjectView pic={science} title='SCIENCE!' description='A poster made in collaboration with the Federal Art Project' />
            </ProjectsList>
            <ProjectsNavBar>
                <BtProjectsNavBar
                    text='APP DESIGN'
                    mobilePic={appMobilePic}
                    tabletPic={appTabletPic}
                    deskTopPic={appDesktopPic}
                    handleClick={() => { navigateTo('/appdesign') }}
                />
                <BtProjectsNavBar
                    text='WEB DESIGN'
                    mobilePic={webMobilePic}
                    tabletPic={webTabletPic}
                    deskTopPic={webDesktopSmallPic}
                    handleClick={() => { navigateTo('/webdesign') }}
                />
            </ProjectsNavBar>
        </main>
    )
}
export default GraphicDesign;