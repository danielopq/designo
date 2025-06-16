import { useEffect, useState } from 'react';

export const useTopNavBarEvents = () => {
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);

    const switchMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    }

    useEffect(() => {
        if (mobileMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [mobileMenu]);

    useEffect(() => {
        const checkWidowSize = () => {
            window.innerWidth >= 768 && setMobileMenu(false);
        }

        window.addEventListener('resize', checkWidowSize);
        return () => window.removeEventListener('resize', checkWidowSize);
    }, [window.innerWidth])

    return { switchMobileMenu, mobileMenu }
};