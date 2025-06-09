import './locationDetails.scss';

type LocationDetailsProps = {
    country: string;
    branch: string;
    firstLineAdd: string;
    secondLineAdd: string;
    phone: string;
    email: string;
}

const LocationDetails:React.FC<LocationDetailsProps> = ({country,branch,firstLineAdd,secondLineAdd,phone,email}) => {
    return (
        <div className='locationDetails'>
            <div className='locationMap'></div>
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