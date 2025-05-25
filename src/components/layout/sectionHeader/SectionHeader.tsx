import './sectionHeader.scss';

type SectionHeaderProps = {
    backgroundImage: string;
    title: string;
    text: string;
}

/**
 * 
 * Displays a heading and a short description,
 * typically used at the top of a section in the site layout.
 *
 * @param props - Component props
 * @param props.backgroundImage - URL of the background image
 * @param props.title - Section title
 * @param props.text - Description below the title
 * @returns - The rendered SectionHeader component
 */
const SectionHeader: React.FC<SectionHeaderProps> = ({ title, text, backgroundImage }) => {
    return (
        <header className='sectionHeader' style={{backgroundImage: `url(${backgroundImage})`}}> 
            <h1>{title}</h1>
            <p>{text}</p>
        </header>
    )
}
export default SectionHeader;