import './btLargeNavBar.scss';

type BtLargeNavBarProps = {
    text: string;
    gridArea?: string;
}

const BtLargeNavBar: React.FC<BtLargeNavBarProps> = ({ text, gridArea = '' }) => {
    return (
        <div className='btLargeNavBar' style={{gridArea:gridArea}}>
            <div>
                <p>{text}</p>
                <div>VIEW PROJETS</div>
            </div>
        </div>
    )
}
export default BtLargeNavBar;