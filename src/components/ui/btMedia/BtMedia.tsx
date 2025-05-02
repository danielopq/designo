import './btMedia.scss';

type BtMediaProps = {
    imagePath: string;
}

/**
 * BtMedia is a button component styled with a mask image, typically used for social media icons.
 *
 * @param {Object} props - Component props.
 * @param {string} props.imagePath - Public URL path to the SVG icon used as the mask image.
 * @returns {React.JSX.Element} - The rendered button element.
 */
const BtMedia: React.FC<BtMediaProps> = ({ imagePath }) => {
    return (
        <button
            className="mediaBt" style={{ maskImage: `url(${imagePath})`, WebkitMaskImage: `url(${imagePath})` }}
        ></button>
    )
}
export default BtMedia;