import './btMobileNavBar.scss';

type BtMobileNavBarProps = {
    text: string;
    handleClick: () => void;
}

/**
 * Renders a button used in the mobile navigation bar.
 * 
 * @param text - The label displayed on the button.
 * @param handleClick - Function to be called when the button is clicked.
 * @returns A styled button component for the mobile navigation bar.
 */
const BtMobileNavBar: React.FC<BtMobileNavBarProps> = ({ text, handleClick }) => {
    return (
        <button className='btMobileNavBar' onClick={handleClick} aria-label={text}>
            {text.toUpperCase()}
        </button>
    )
}
export default BtMobileNavBar;