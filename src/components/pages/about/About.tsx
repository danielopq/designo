import './about.scss';

import { AboutHeader, AboutContent } from './component';
import { LocationsNavBar } from '../../layout';

const About = () => {
    return (
        <main id="about">
            <AboutHeader />
            <AboutContent />
            <LocationsNavBar />
            <AboutContent />
        </main>
    )
}
export default About;