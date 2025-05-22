import './sectionHeader.scss';

type SectionHeaderProps = {
    title: string;
    text: string;
}

/**
 * 
 * Displays a heading and a short description,
 * typically used at the top of a section in the site layout.
 *
 * @param props - Component props
 * @param props.title - Section title
 * @param props.text - Descriptive text below the title
 * @returns - The rendered SectionHeader component
 */
const SectionHeader: React.FC<SectionHeaderProps> = ({ title, text }) => {
    return (
        <header className='sectionHeader'>
            <h1>{title}</h1>
            <p>{text}</p>
        </header>
    )
}
export default SectionHeader;