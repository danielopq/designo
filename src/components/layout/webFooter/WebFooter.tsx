import './webFooter.scss';

import { useEffect, useState } from 'react';
import { BtMedia, BtHomeLink } from '../../ui';
import { useWebNavigation } from '../../../utils/useWebNavigation';
import LetsTalk from './components/letsTalk/LetsTalk';
import NavBar from '../navBar/NavBar';

/**
 * Renders the footer section of the website, including the "Let’s Talk" component,
 * navigation links, contact information, and social media icons.
 * 
 * @returns {JSX.Element} The rendered WebFooter component.
 */
const WebFooter: React.FC = () => {

    const { navigateTo } = useWebNavigation();
    const [letsTalkDisplayed, setLetsTalkDisplayed] = useState<boolean>(true);

    useEffect(() => {
        location.pathname !== '/contact' ? setLetsTalkDisplayed(true) : setLetsTalkDisplayed(false);
    }, [location.pathname]);

    return (
        <footer id="webFooter" className={letsTalkDisplayed ? 'largeFooter' : 'shortFooter'}>
            <LetsTalk displayed={location.pathname !== '/contact'} />
            <div id="topWebfooter">
                <BtHomeLink BtType='lightLogo' handleClick={() => navigateTo('/')} />
                <NavBar navBarStyle='light' />
            </div>
            <div id="bottomWebfooter">
                <div>
                    <div id="webFooterAddress">
                        <p className='defaultTextBold'>Designo Central Office</p>
                        <p className='defaultTextReg'>3886 Wellington Street</p>
                        <p className='defaultTextReg'>Toronto, Ontario M9C 3J5</p>
                    </div>
                    <div id="webFooterContact">
                        <p className='defaultTextBold'>Contact Us (Central Office)</p>
                        <p className='defaultTextBold'>P : +1 253-863-8967</p>
                        <p className='defaultTextBold'>M : contact@designo.co</p>
                    </div>
                </div>
                <div id="webFooterMedia">
                    <BtMedia imagePath='/img/icon-facebook.svg' ariaLabel='facebook' />
                    <BtMedia imagePath='/img/icon-youtube.svg' ariaLabel='youtube' />
                    <BtMedia imagePath='/img/icon-twitter.svg' ariaLabel='twitter' />
                    <BtMedia imagePath='/img/icon-pinterest.svg' ariaLabel='pinterest' />
                    <BtMedia imagePath='/img/icon-instagram.svg' ariaLabel='intagram' />
                </div>
            </div>
        </footer>
    )

}
export default WebFooter;