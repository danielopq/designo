import { ReactNode } from 'react';
import './projectsList.scss';

type ProjectsListProps = {
    children: ReactNode;
}

/**
 * Renders a container for displaying a list of company projects.
 *
 * @param {Object} param0 - Component props.
 * @param {ReactNode} param0.children - The child elements representing project items.
 * @returns {JSX.Element} -- The ProjectsList component. A section element containing the project items.
 */
const ProjectsList: React.FC<ProjectsListProps> = ({children}) => {
    return (
        <section className='projectsList'>
            {children}
        </section>
    )
}
export default ProjectsList;