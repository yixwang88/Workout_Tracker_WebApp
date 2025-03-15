import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './ThemePage.css';

const ThemePage = () => {
    const { theme, setTheme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className='theme-page flex flex-col justify-center items-center gap-5'>
            <h1>Choose a Theme</h1>
            <h2>Current Theme: {theme}</h2>


            <div className='theme-options flex gap-5'>
                <button className="btn" onClick={() => setTheme('light')}>Light Theme</button>
                <button className="btn" onClick={() => setTheme('dark')}>Dark Theme</button>
            </div>
        </div>
    )
}

export default ThemePage;