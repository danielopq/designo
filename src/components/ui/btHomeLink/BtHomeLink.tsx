import './btHomeLink.scss';

type BtHomeLinkProps = {
    BtType: 'darkLogo' | 'lightLogo';
    handleClick: ()=>void;
}

/**
 * Button component that navigates to the home page.
 *
 * @param {BtHomeLinkProps} param0 - Component props.
 * @param {'darkLogo' | 'lightLogo'} param0.BtType - Visual style of the button (dark or light logo).
 * @param {() => void} param0.handleClick - Function to handle click events.
 * @returns {JSX.Element} A button that navigates to the home page.
 */
const BtHomeLink: React.FC<BtHomeLinkProps> = ({ BtType,handleClick }) => {
    return (
        <button className={'btHomeLink ' + BtType} onClick={handleClick} aria-label='Home' type='button'></button>
    )
}
export default BtHomeLink;