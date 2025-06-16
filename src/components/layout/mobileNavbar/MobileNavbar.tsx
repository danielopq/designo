import './mobileNavbar.scss';

type MobileNavbarProps = {
    displayed: boolean;
}

const MobileNavbar:React.FC<MobileNavbarProps> = ({displayed}) => {
    return (
        <nav id="mobileNavbar" style={{display: displayed ? 'flex' : 'none'}}></nav>
    )
}
export default MobileNavbar;