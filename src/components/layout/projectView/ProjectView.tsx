import './projectView.scss';

type ProjectViewProps = {
    pic: string;
    title: string;
    description: string;
}

const ProjectView: React.FC<ProjectViewProps> = ({ pic, title, description }) => {
    return (
        <article className='projectView'>
            <div className='projectViewPic' style={{backgroundImage: `url(${pic})`}}></div>
            <div>
                <p className='projectViewTitle'>{title.toLocaleUpperCase()}</p>
                <p className='defaultTextReg'>{description}</p>
            </div>
        </article>
    )
}
export default ProjectView;