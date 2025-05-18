import './home.scss';

import { HomeHeader, HomeProjectsNavBar, Values } from './components';

/**
 * Contains the home page.
 * 
 * @returns {React.JSX.Element} - The rendered Home component. 
 */
const Home: React.FC = () => {
    return (
        <main id="home">
            <HomeHeader />
            <HomeProjectsNavBar />
            <Values />
        </main>
    )
}
export default Home;