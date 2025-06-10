import './locationItem.scss';

import { BtRegular } from '../../ui';
import { useWebNavigation } from '../../../utils/webNavigation';

type LocationItemProps = {
    locationName: string;
    locationPic: string;
}

/**
 * Interactive location card component used in LocationsNavBar.
 * Displays a location preview with image, name, and navigation button.
 * 
 * @param {LocationItemProps} props - Component props
 * @param {string} props.locationName - Name of the location
 * @param {string} props.locationPic - Image source for location preview
 * @returns {React.JSX.Element} Location card with navigation capability
 */
const LocationItem:React.FC<LocationItemProps> = ({locationName, locationPic}) => {
    const { navigateTo } = useWebNavigation();
    return (
        <div className='locationItem'>
            <div style={{backgroundImage:`url(${locationPic})`}}></div>
            <p>{locationName.toLocaleUpperCase()}</p>
            <BtRegular text='SEE LOCATION' btType='orangeBg' handleClick={() => { navigateTo('/locations') }}/>
        </div>
    )
}
export default LocationItem;