import { ReactNode } from 'react';
import './projectsList.scss';

type ProjectsListProps = {
    children: ReactNode;
}

const ProjectsList: React.FC<ProjectsListProps> = ({children}) => {
    return (
        <section className='projectsList'>
            {children}
        </section>
    )
}
export default ProjectsList;