import React, { useEffect, useState } from 'react';

const ChangeThemeButton: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    
    useEffect(() => {
        if (typeof window !== 'undefined') {
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          setTheme(prefersDark ? 'dark' : 'light');
        }
      }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.getElementsByTagName('html')[0].className = newTheme;
        // TODO: Change the button icon based on the theme
        // You can use React state to manage the icon. For example:
        // const [icon, setIcon] = useState(lightIcon);
        // if (newTheme === 'light') {
        //     setIcon(lightIcon);
        // } else {
        //     setIcon(darkIcon);
    };

    return (
        <button className="header--change-theme-button" onClick={toggleTheme}>
            Cambiar a tema {theme === 'light' ? 'oscuro' : 'claro'}
        </button>
    );
};

export default ChangeThemeButton;