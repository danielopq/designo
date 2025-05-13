import './btRegular.scss';

type BtRegularProps = {
    text: string;
    btType: 'whiteBg' | 'orangeBg';
}

/**
 * Reusable button component used throughout the website.
 *
 * @param {Object} props - Component props
 * @param {string} props.text - The text displayed on the button
 * @param {'whiteBg' | 'orangeBg'} props.btType - Defines the background color of the button
 * @returns {React.JSX.Element} The rendered BtRegular component
 */
const BtRegular: React.FC<BtRegularProps> = ({ text, btType }) => {
    return (
        <button className={'btRegular ' + btType}>{text.toUpperCase()}</button>
    )
}
export default BtRegular;