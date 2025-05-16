import './btProjectsNavBar.scss';

type BtProjectsNavBarProps = {
    text: string;
    mobilePic: string;
    tabletPic: string;
    deskTopPic: string;
    gridArea?: string;
}

const BtProjectsNavBar: React.FC<BtProjectsNavBarProps> = ({ text, gridArea = '', mobilePic }) => {
    return (
        <div className='btProjectsNavBar' style={{ gridArea: gridArea, backgroundImage: `url(${mobilePic})` }}>
            <div>
                <p>{text}</p>
                <div>VIEW PROJECTS</div>
            </div>
        </div>
    )
}
export default BtProjectsNavBar;