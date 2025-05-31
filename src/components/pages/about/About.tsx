import './about.scss';

import { AboutHeader, AboutContent } from './component';
import { LocationsNavBar } from '../../layout';
import { talentMobilePic, talentTabletPic, talentDesktopPic, realDealMobilePic, realDealTabletPic, realDealDesktopPic } from '../../../assets/img'

/**
 * Renders the complete About Us page
 * 
 * @returns {React.JSX.Element} - The rendered About component.
 */
const About = () => {
    const talentText = 'We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms. <br /><br /> Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.';
    const realDealText = 'As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success. <br /><br />We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.';
    return (
        <main id="about">
            <AboutHeader />
            <AboutContent header='World-class talent' text={talentText} mobilePic={talentMobilePic} tabletPic={talentTabletPic} deskTopPic={talentDesktopPic} />
            <LocationsNavBar />
            <AboutContent header='The real deal' text={realDealText} mobilePic={realDealMobilePic} tabletPic={realDealTabletPic} deskTopPic={realDealDesktopPic} />
        </main>
    )
}
export default About;