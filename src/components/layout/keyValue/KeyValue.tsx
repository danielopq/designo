import './keyValue.scss';

type KeyValueProps = {
    keyPicPath: string;
    keyTitle: string;
    keyText: string;
}

/**
 * Component that renders a key company value with an image,
 * a title, and a descriptive text.
 * 
 * @param {Object} props - Component properties.
 * @param {string} props.keyPicPath - Path to the image used as the background.
 * @param {string} props.keyTitle - Title of the key value.
 * @param {string} props.keyText - Description of the key value.
 * @returns {JSX.Element} The rendered KeyValue component.
 */
const KeyValue: React.FC<KeyValueProps> = ({ keyPicPath, keyTitle, keyText }) => {
    return (
        <div className='keyValue'>
            <div className='keyValueHero' style={{ backgroundImage: `url(${keyPicPath})` }}></div>
            <div className='KeyValueText'>
                <p>{keyTitle.toLocaleUpperCase()}</p>
                <p>{keyText}</p>
            </div>
        </div>
    )
}
export default KeyValue;