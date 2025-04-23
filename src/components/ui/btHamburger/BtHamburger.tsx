import './btHamburger.scss';

type BtHamburgerProps = {
    menuDeployed?: boolean;
}

const BtHamburger: React.FC<BtHamburgerProps> = ({ menuDeployed = false }) => {
    return (
        <button className={menuDeployed ? 'btHamburger closeIcon' : 'btHamburger hamburgerIcon'}></button>
    )
}
export default BtHamburger;