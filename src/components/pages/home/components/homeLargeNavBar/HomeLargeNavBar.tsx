import './homeLargeNavBar.scss';
import { BtLargeNavBar } from '../../../../ui';

const HomeLargeNavBar:React.FC = ()=>{
    return(
        <section id="homeLargeNavBar">
            <BtLargeNavBar text='WEB DESIGN' gridArea='web'/>
            <BtLargeNavBar text='APP DESIGN' gridArea='app'/>
            <BtLargeNavBar text='GRAPHIC DESIGN' gridArea='graphic'/>
        </section>
    )
}
export default HomeLargeNavBar;