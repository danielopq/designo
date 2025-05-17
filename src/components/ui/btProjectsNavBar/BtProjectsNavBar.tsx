import { useEffect, useState } from 'react';
import './btProjectsNavBar.scss';

type BtProjectsNavBarProps = {
    text: string;
    mobilePic: string;
    tabletPic: string;
    deskTopPic: string;
    gridArea?: string;
}

/**
 * Button for the Projects navigation bar.
 * 
 * @param param0 
 * @param {string} param0.text - text displayed on the button for mobile viewports. 
 * @param {string} param0.mobilePic - mobile background image path for mobile viewports. 
 * @param {string} param0.tabletPic - tablet background image path for mobile viewports.
 * @param {string} param0.desktopPic - desktop background image path for mobile viewports.
 * @param {string} param0.gridArea -  Optional CSS grid-area name for layout positioning. 
 * @returns {React.JSX.Element} - The rendered BtProjectsNavBar component
 */

const BtProjectsNavBar: React.FC<BtProjectsNavBarProps> = ({ text, gridArea = '', mobilePic, tabletPic, deskTopPic }) => {

    const [backgroundImage, setBackgroundImage] = useState<string>('');

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
        <div className='btProjectsNavBar' style={{ gridArea: gridArea, backgroundImage: `url(${backgroundImage})` }}>
            <div className='btPNBcontent'>
                <div className='btPNBtext'>
                    <p>{text}</p>
                    <div>VIEW PROJECTS</div>
                </div>
            </div>
        </div>
    )
}
export default BtProjectsNavBar;