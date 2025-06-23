import './btMedia.scss';

type BtMediaProps = {
    imagePath: string;
    ariaLabel: string;
}

/**
 * BtMedia is a button component styled with a mask image, typically used for social media icons.
 *
 * @param {Object} props - Component props.
 * @param {string} props.imagePath - Public URL path to the SVG icon used as the mask image.
 * @param {string} props.ariaLabel - Descriptive label for accessibility purposes.
 * @returns {React.JSX.Element} - The rendered button element.
 */
const BtMedia: React.FC<BtMediaProps> = ({ imagePath,ariaLabel }) => {
    
    return (
        <button
            className="mediaBt" style={{ backgroundImage: `url(${imagePath})`}}
            aria-label={ariaLabel}
            type='button'
        ></button>
    )
}
export default BtMedia;