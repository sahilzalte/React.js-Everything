import { useContext } from 'react';
import { themeDataContext } from '../context/ThemeContext'
import Nav2 from './Nav2'

const Navbar = (props) => {

    const [theme] = useContext(themeDataContext)
    console.log(theme);
    
    return (
        <div className='nav'>
            <h2>{theme}'s</h2>
            <Nav2 theme={props.theme} />
        </div>
    )
}

export default Navbar