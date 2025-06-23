import './locationDetails.scss';
import { Map } from '../../../layout';

type LocationDetailsProps = {
    index: number;
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
 * Renders a component that displays details of one branch office of the company.
 * Alternates layout direction based on index to create a zig-zag layout.
 * 
 * @param {Object} props - Props for LocationDetails component
 * @param {number} props.index - Index number used to alternate layout direction (even = reversed)
 * @param {string} props.country - Country name
 * @param {string} props.branch - Name of the office branch
 * @param {string} props.firstLineAdd - First line of the address
 * @param {string} props.secondLineAdd - Second line of the address
 * @param {string} props.phone - Contact phone number
 * @param {string} props.email - Contact email address
 * 
 * @returns {JSX.Element} The rendered location details component
 */
const LocationDetails:React.FC<LocationDetailsProps> = ({index,latitude,longitude,country,branch,firstLineAdd,secondLineAdd,phone,email}) => {
    return (
        <div className={'locationDetails' + ((index % 2 == 0) ? ' reverse' : '')}>
            <div className='locationMap'>
                <Map latitude={latitude} longitude={longitude}/> 
            </div>
            <div className='locationOffice'>
                <h1 className='LocationCountry'>{country}</h1>
                <div className='detailsCont'>
                    <div>
                        <p className='detailsHeader'>{branch}</p>
                        <p className='detailsLine'>{firstLineAdd}</p>
                        <p className='detailsLine'>{secondLineAdd}</p>
                    </div>
                    <div>
                        <p className='detailsHeader'>Contact</p>
                        <p className='detailsLine'>P : {phone}</p>
                        <p className='detailsLine'>M : {email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LocationDetails;