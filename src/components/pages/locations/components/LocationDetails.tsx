import './locationDetails.scss';

const LocationDetails = () => {
    return (
        <div className='locationDetails'>
            <div className='locationMap'></div>
            <div className='locationOffice'>
                <h1 className='LocationCountry'>Canada</h1>
                <div className='detailsCont'>
                    <div>
                        <p className='detailsHeader'>Designo Central Office</p>
                        <p className='detailsLine'>3886 Wellington Street</p>
                        <p className='detailsLine'>Toronto, Ontario M9C 3J5</p>
                    </div>
                    <div>
                        <p className='detailsHeader'>Contact</p>
                        <p className='detailsLine'>P : +1 253-863-8967</p>
                        <p className='detailsLine'>M : contact@designo.co</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LocationDetails;