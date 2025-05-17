import './home.scss';

import { HomeHeader, HomeProjectsNavBar, Values } from './components';

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