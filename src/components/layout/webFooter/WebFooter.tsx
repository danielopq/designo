import './webFooter.scss';

import { BtMedia } from '../../ui';
import NavBar from '../navBar/NavBar';

const WebFooter: React.FC = () => {
    return (
        <footer id="webFooter">
            <div id="topWebfooter">
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
                        <p className='defaultTextReg'>P : +1 253-863-8967</p>
                        <p className='defaultTextReg'>M : contact@designo.co</p>
                    </div>
                </div>
                <div id="webFooterMedia">
                    <BtMedia imagePath='../src/assets/img/shared/icon-facebook.svg' />
                    <BtMedia imagePath='../src/assets/img/shared/icon-youtube.svg' />
                    <BtMedia imagePath='../src/assets/img/shared/icon-twitter.svg' />
                    <BtMedia imagePath='../src/assets/img/shared/icon-pinterest.svg' />
                    <BtMedia imagePath='../src/assets/img/shared/icon-instagram.svg' />
                </div>
            </div>
        </footer>
    )

}
export default WebFooter;