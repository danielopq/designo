import './home.scss';

import { HomeHeader, HomeLargeNavBar } from './components';

const Home: React.FC = () => {
    return (
        <main id="home">
            <HomeHeader />
            <HomeLargeNavBar />
        </main>
    )
}
export default Home;