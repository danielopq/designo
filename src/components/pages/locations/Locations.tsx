import './locations.scss';

import data from '../../../data/offices.json';
import LocationDetails from './components/LocationDetails';

type details = {
    latitude:number;
    longitude:number;
    country: string;
    branch: string;
    firstLineAdd: string;
    secondLineAdd: string;
    phone: string;
    email: string;
}

/**
 * Locations component that displays all company offices listed in offices.json
 * 
 * @returns {JSX.Element} - Container with all office locations
 */
const Locations: React.FC = () => {
    return (
        <main id="locations">
            {data.offices.map((office: details, index: number) => (
                <LocationDetails
                    key={index}
                    latitude={office.latitude}
                    longitude={office.longitude}
                    index={index}
                    country={office.country}
                    branch={office.branch}
                    firstLineAdd={office.firstLineAdd}
                    secondLineAdd={office.secondLineAdd}
                    phone={office.phone}
                    email={office.email}
                />
            ))}
        </main>
    )
}
export default Locations;