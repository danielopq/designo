import './locationsNavBar.scss';

import { LocationItem } from '../../layout';

import { australiaIlus, canadaIlus, ukIlus } from '../../../assets/img'

/**
 * Navigation bar that displays icons and buttons for the different countries 
 * where the company has a presence.
 *
 * @returns {React.JSX.Element} The rendered LocationsNavBar component.
 */
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