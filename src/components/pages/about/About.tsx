import './about.scss';

import { AboutHeader, Talent } from './component';
import { LocationsNavBar } from '../../layout';

const About = () => {
    return (
        <main id="about">
            <AboutHeader />
            <Talent />
            <LocationsNavBar />
        </main>
    )
}
export default About;