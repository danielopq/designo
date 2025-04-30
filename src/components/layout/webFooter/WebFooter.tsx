import './webFooter.scss';

import { BtMedia } from '../../ui';

const WebFooter: React.FC = () => {
    return (
        <footer id="webFooter">
            <div id="topWebfooter"></div>
            <div id="bottomWebfooter">
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
                <div id="webFooterMedia">
                    <BtMedia />
                    <BtMedia />
                    <BtMedia />
                    <BtMedia />
                    <BtMedia />
                </div>
            </div>
        </footer>
    )

}
export default WebFooter;