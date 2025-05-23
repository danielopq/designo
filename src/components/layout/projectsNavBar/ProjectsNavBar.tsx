import './projectsNavBar.scss';

type ProjectsNavBarProps = {
    children: React.ReactNode;
}

/**
 * Navigation bar component that displays navigation buttons for different projects.
 * It renders the components passed as children inside a <nav> element.
 * 
 * @param {ProjectsNavBarProps} props - The props for ProjectsNavBar component.
 * @param {React.ReactNode} props.children - The buttons (BtProjectsNavBar) to be displayed within the navigation bar.
 * @returns {React.JSX.Element} - The rendered ProjectsNavBar component.
 */
const ProjectsNavBar: React.FC<ProjectsNavBarProps> = ({children}) => {
    return (
        <nav id="projectsNavBar">
            {children}
        </nav>
    )
}
export default ProjectsNavBar;