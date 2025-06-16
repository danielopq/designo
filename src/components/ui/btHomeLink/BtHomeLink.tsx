import './btHomeLink.scss';
import { useWebNavigation } from '../../../utils/webNavigation';

type BtHomeLinkProps = {
    BtType: 'darkLogo' | 'lightLogo';
}

/**
 * Button component that navigates to the home page.
 *
 * @param {BtHomeLink} param0 - Component props.
 * @param {'darkLogo' | 'lightLogo'} param0.BtType - Visual style of the button (dark or light logo).
 * @returns {JSX.Element} A button that navigates to the home page.
 */
const BtHomeLink: React.FC<BtHomeLinkProps> = ({ BtType }) => {
    const { navigateTo } = useWebNavigation();
    return (
        <button className={'btHomeLink ' + BtType} onClick={() => navigateTo('/')}></button>
    )
}
export default BtHomeLink;