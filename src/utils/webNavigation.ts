import { useNavigate } from 'react-router-dom';

/**
 * Custom hook for navigation
 * @returns {function} navigateTo - Function to navigate to a specified path
 */
export const useWebNavigation = () => {
    const navigate = useNavigate();
    const navigateTo = (path: string) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return { navigateTo };
};