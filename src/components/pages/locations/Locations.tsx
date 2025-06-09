import './locations.scss';

import data from '../../../assets/data/offices.json';
import LocationDetails from './components/LocationDetails';

type details = {
    country: string;
    branch: string;
    firstLineAdd: string;
    secondLineAdd: string;
    phone: string;
    email: string;
}

const Locations: React.FC = () => {
    return (
        <main id="locations">
            {data.offices.map((office: details, index: number) => (
                <LocationDetails
                    key={index}
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