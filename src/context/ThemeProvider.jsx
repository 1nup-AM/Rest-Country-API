import React, {useState} from 'react'
import themeContext from './themeContext';

function ThemeProvider({children}) {
    const [theme, setTheme] = useState("Light");

  return (
    <themeContext.Provider value={{theme, setTheme}}>
        {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
