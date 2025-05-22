import './webDesign.scss';

import { SectionHeader, ProjectsNavBar } from '../../layout';

const WebDesign: React.FC = () => {
    return (
        <main id="webDesign">
            <SectionHeader
                title='Web Design'
                text='We build websites that serve as powerful marketing tools and bring memorable brand experiences.'
            />
            <ProjectsNavBar />
        </main>
    )
}
export default WebDesign;