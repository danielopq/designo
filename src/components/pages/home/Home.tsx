import './home.scss';

import { HomeHeader, HomeProjectsNavBar } from './components';

const Home: React.FC = () => {
    return (
        <main id="home">
            <HomeHeader />
            <HomeProjectsNavBar />
        </main>
    )
}
export default Home;