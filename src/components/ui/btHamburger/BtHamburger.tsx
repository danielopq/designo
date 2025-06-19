import './btHamburger.scss';

type BtHamburgerProps = {
    menuDeployed: boolean;
    handleClick: () => void;
}

/**
 * Renders the hamburger menu button for the mobile version of the website.
 * 
 * @param {boolean} menuDeployed - Indicates whether the mobile menu is currently open.
 * @param {() => void} handleClick - Function to toggle the menu's visibility.
 * 
 * @returns {JSX.Element} The hamburger button component.
 */
const BtHamburger: React.FC<BtHamburgerProps> = ({ menuDeployed, handleClick }) => {
    return (
        <button className={menuDeployed ? 'btHamburger closeIcon' : 'btHamburger hamburgerIcon'} onClick={handleClick}></button>
    )
}
export default BtHamburger;