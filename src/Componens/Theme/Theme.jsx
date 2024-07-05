import React, { useState, useEffect } from 'react';
import ChildofApp from './ChildofApp';

const Theme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const themeChanger = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <ChildofApp theme={theme} themeChanger={themeChanger} />
    </div>
  );
};

export default Theme;
