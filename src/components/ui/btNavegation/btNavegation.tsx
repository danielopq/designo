import './btNavegation.scss';

type BtNavegationProps = {
    text: string;
    btStyle: 'dark' | 'light';
    handleClick: () => void;
}

/**
 * Renders a navigation bar button.
 * 
 * @param {BtNavegationProps} props - The properties for the BtNavegation component.
 * @param {string} props.text - The text displayed on the button.
 * @param {'dark' | 'light'} props.btStyle - The visual style of the button.
 * @returns {React.JSX.Element} - The rendered BtNavegation component.
 */
const BtNavegation: React.FC<BtNavegationProps> = ({ text, btStyle, handleClick }) => {
    return (
        <button className='btNavegation' style={{ color: (btStyle == 'dark') ? 'var(--darkGrey)' : 'white' }} onClick={handleClick}>{text.toUpperCase()}</button>
    )
}
export default BtNavegation;