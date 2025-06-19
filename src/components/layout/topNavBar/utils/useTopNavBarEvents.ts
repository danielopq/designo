import { useEffect, useState } from 'react';
import { useWebNavigation } from '../../../../utils/useWebNavigation';

/**
 * Hook that contains all the actions related to the top navigation bar of the website.
 * 
 * @returns Object with functions and state to control the top navigation bar.
 */
export const useTopNavBarEvents = () => {
    const [mobileMenuDisplayed, setMobileMenuDisplayed] = useState<boolean>(false);
    const { navigateTo } = useWebNavigation();

    // Disables website scrolling when the mobile menu is open, and re-enables it when closed. 
    useEffect(() => {
        if (mobileMenuDisplayed) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [mobileMenuDisplayed]);

     // Hides the mobile menu when the window is resized to tablet or desktop size (width >= 768px).
    useEffect(() => {
        const checkWidowSize = () => {
            window.innerWidth >= 768 && setMobileMenuDisplayed(false);
        }

        window.addEventListener('resize', checkWidowSize);
        return () => window.removeEventListener('resize', checkWidowSize);
    }, [window.innerWidth])

    /**
     * Toggles the visibility of the mobile menu.
     */
    const switchMobileMenu = ():void => {
        setMobileMenuDisplayed(!mobileMenuDisplayed);
    }

    /**
     * Handles click on the BtHomeLink button.
     * Hides the mobile menu if open, then navigates to the home page.
     */
    const onHomeLinkClick = (): void => {
        mobileMenuDisplayed && switchMobileMenu();
        navigateTo('/');
    }

    return { switchMobileMenu, mobileMenuDisplayed, onHomeLinkClick }
};