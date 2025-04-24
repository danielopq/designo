import './btHamburger.scss';

type BtHamburgerProps = {
    menuDeployed: boolean;
    handleClick: () => void;
}

const BtHamburger: React.FC<BtHamburgerProps> = ({ menuDeployed, handleClick }) => {
    return (
        <button className={menuDeployed ? 'btHamburger closeIcon' : 'btHamburger hamburgerIcon'} onClick={handleClick}></button>
    )
}
export default BtHamburger;