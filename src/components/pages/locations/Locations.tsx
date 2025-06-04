import './locations.scss';

import LocationDetails from './components/LocationDetails';

const Locations: React.FC = () => {
    return (
        <main id="locations">
            <LocationDetails />
            <LocationDetails />
            <LocationDetails />
        </main>
    )
}
export default Locations;