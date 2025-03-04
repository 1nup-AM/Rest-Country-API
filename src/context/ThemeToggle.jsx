import React, {useContext} from 'react'
import themeContext from './themeContext';
import { BiMoon } from 'react-icons/bi';


const ThemeToggle = () => {
    const {theme, setTheme} = useContext(themeContext);
  return (
    <button onClick={() => setTheme(theme === "Light" ? "Dark" : "Light")} className='flex justify-center items-center gap-2'>
        <BiMoon />
        {theme === "Light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
};

export default ThemeToggle;
