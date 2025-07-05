import './btRegular.scss';

type BtRegularProps = {
    text: string;
    btType: 'whiteBg' | 'orangeBg';
    htmlType?: 'button' | 'submit' | 'reset';
    handleClick?: () => void;
}

/**
 * Reusable button component used throughout the website.
 *
 * @param {Object} props - Component props
 * @param {string} props.text - The text displayed on the button
 * @param {'whiteBg' | 'orangeBg'} props.btType - Defines the background color of the button
 * @param {function} props.handleClick - Function triggered on button click
 * @returns {React.JSX.Element} The rendered BtRegular component
 */
const BtRegular: React.FC<BtRegularProps> = ({ text, btType, htmlType = 'button', handleClick }) => {
    return (
        <button type={htmlType} className={'btRegular ' + btType} onClick={handleClick} aria-label={text}>
            {text.toUpperCase()}
        </button>
    )
}
export default BtRegular;