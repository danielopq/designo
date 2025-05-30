import './locationsNavBar.scss';

import { LocationItem } from '../../layout';

import { australiaIlus, canadaIlus, ukIlus } from '../../../assets/img'

const LocationsNavBar: React.FC = () => {
    return (
        <nav id="locationsNavBar">
            <LocationItem locationName='CANADA' locationPic={canadaIlus} />
            <LocationItem locationName='AUSTRALIA' locationPic={australiaIlus} />
            <LocationItem locationName='UNITED KINGDOM' locationPic={ukIlus} />
        </nav>
    )

}
export default LocationsNavBar;