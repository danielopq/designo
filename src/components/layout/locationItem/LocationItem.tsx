import './locationItem.scss';

import { BtRegular } from '../../ui';

type LocationItemProps = {
    locationName: string;
    locationPic: string;
}

const LocationItem:React.FC<LocationItemProps> = ({locationName, locationPic}) => {
    return (
        <div className='locationItem'>
            <div style={{backgroundImage:`url(${locationPic})`}}></div>
            <p>{locationName.toLocaleUpperCase()}</p>
            <BtRegular text='SEE LOCATION' btType='orangeBg' />
        </div>
    )
}
export default LocationItem;