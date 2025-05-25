import './projectView.scss';

type ProjectViewProps = {
    pic: string;          // URL of the project's image
    title: string;        // Title of the project
    description: string;  // Short description of the project
}

/**
 * ProjectView component displays a project card with an image, title, and description.
 *
 * @param {Object} props - Component props
 * @param {string} props.pic - URL of the project's image
 * @param {string} props.title - Title of the project
 * @param {string} props.description - Description of the project
 * @returns {JSX.Element} Rendered project card component
 */
const ProjectView: React.FC<ProjectViewProps> = ({ pic, title, description }) => {
    return (
        <article className='projectView'>
            <div className='projectViewPic' style={{backgroundImage: `url(${pic})`}}></div>
            <div className='projectContent'>
                <p className='projectViewTitle'>{title.toLocaleUpperCase()}</p>
                <p className='defaultTextReg'>{description}</p>
            </div>
        </article>
    )
}
export default ProjectView;