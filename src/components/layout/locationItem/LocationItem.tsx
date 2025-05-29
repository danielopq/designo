import './locationItem.scss';

import { BtRegular } from '../../ui';

const LocationItem = () => {
    return (
        <div className='locationItem'>
            <div></div>
            <p>CANADA</p>
            <BtRegular text='SEE LOCATION' btType='orangeBg' />
        </div>
    )
}
export default LocationItem;