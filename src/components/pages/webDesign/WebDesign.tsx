import './webDesign.scss';

import { SectionHeader, ProjectsNavBar } from '../../layout';
import { BtProjectsNavBar } from '../../ui';

const WebDesign: React.FC = () => {
    return (
        <main id="webDesign">
            <SectionHeader
                title='Web Design'
                text='We build websites that serve as powerful marketing tools and bring memorable brand experiences.'
            />
            <ProjectsNavBar>
                <BtProjectsNavBar text='APP DESIGN' mobilePic='' tabletPic='' deskTopPic=''/>
                <BtProjectsNavBar text='GRAPHIC DESIGN' mobilePic='' tabletPic='' deskTopPic=''/>
            </ProjectsNavBar>
        </main>
    )
}
export default WebDesign;