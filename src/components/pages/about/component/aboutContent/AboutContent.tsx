import { useEffect, useRef, useState } from 'react';
import './aboutContent.scss';

type AboutContentProps = {
    header: string;
    text: string;
    mobilePic: string;
    tabletPic: string;
    deskTopPic: string;
}

/**
 * Component that renders a content section for the About page.
 * It includes a header, dynamic background image based on screen size,
 * and HTML-formatted text content.
 * 
 * @param {AboutContentProps} props - The props for the AboutContent component.
 * @param {string} props.header - The title/header displayed at the top of the section.
 * @param {string} props.text - The main content text, which may include HTML (e.g. <br />).
 * @param {string} props.mobilePic - The image URL for mobile background.
 * @param {string} props.tabletPic - The image URL for tablet background.
 * @param {string} props.deskTopPic - The image URL for desktop background.
 * 
 * @returns {React.JSX.Element} The rendered AboutContent section.
 */
const AboutContent: React.FC<AboutContentProps> = ({ header, text, mobilePic, tabletPic, deskTopPic }) => {

    const [backgroundImage, setBackgroundImage] = useState<string>('');
    const refText = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        refText.current && (refText.current.innerHTML = text);
    }, []);

    useEffect(() => {
        updateBackgroundImage();
        window.addEventListener('resize', updateBackgroundImage);
        return () => {
            window.removeEventListener('resize', updateBackgroundImage);
        };
    }, [mobilePic, tabletPic, deskTopPic]);

    /**
     * Updates the background image based on the current window size.
     * Determines the screen size category (desktop, tablet, or mobile)
     * and sets the appropriate image URL.
     */
    const updateBackgroundImage = () => {
        const isDesktop = window.innerWidth >= 1024;
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
        setBackgroundImage(isDesktop ? deskTopPic : isTablet ? tabletPic : mobilePic);
    };


    return (
        <section className="aboutContent" >
            <div style={{ backgroundImage: `url(${backgroundImage})` }}></div>
            <div>
                <p>{header}</p>
                <p ref={refText}></p>
            </div>
        </section>
    )
}
export default AboutContent;