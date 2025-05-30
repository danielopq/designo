import './locationsNavBar.scss';

import { LocationItem } from '../../layout';

import { australiaIlus, canadaIlus, ukIlus } from '../../../assets/img'

const LocationsNavBar: React.FC = () => {
    return (
        <nav id="locationsNavBar">
            <LocationItem locationName='CANADA' locationPic='' />
        </nav>
    )

}
export default LocationsNavBar;