import './btNavegation.scss';

type BtNavegationProps = {
    text:string;
}

/**
 * Renders a button used in the navigation bar.
 * 
 * @param {BtNavegationProps} props - The properties for the BtNavegation component.
 * @param {string} props.text - The text to display on the button.
 * @returns {React.JSX.Element} - The rendered BtNavegation component.
 */
const BtNavegation: React.FC<BtNavegationProps> = ({text}) => {
    return (
        <button className='btNavegation'>{text.toUpperCase()}</button>
    )
}
export default BtNavegation;