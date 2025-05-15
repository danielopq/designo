import './btProjectsNavBar.scss';

type BtProjectsNavBarProps = {
    text: string;
    gridArea?: string;
}

const BtProjectsNavBar: React.FC<BtProjectsNavBarProps> = ({ text, gridArea = '' }) => {
    return (
        <div className='btProjectsNavBar' style={{gridArea:gridArea}}>
            <div>
                <p>{text}</p>
                <div>VIEW PROJECTS</div>
            </div>
        </div>
    )
}
export default BtProjectsNavBar;