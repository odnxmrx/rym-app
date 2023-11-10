import { Link, useLocation } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"
import style from './Nav.module.css'

export default function Nav({ onSearch, logout, getRandomCharacter }) {

    const { pathname } = useLocation();

    return (<>
        <div className={style.navContainer}>
            <div className={style.navMenu}>
                <ul>
                    <li className={style.myLogo}>
                        <Link to='/home'>Rick&Morty</Link>
                    </li>
                    <li>
                        <Link to='/home'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/favorites'>
                            Favorites
                        </Link>
                    </li>
                    <li>
                        <Link to='/about'>
                            About
                        </Link>
                    </li>
                    <li>
                        <a href='#' onClick={() => logout()}>Logout
                        </a>
                    </li>
                </ul>
            </div>

            {
                pathname === '/home' && <SearchBar onSearch={onSearch} getRandomCharacter={getRandomCharacter} />
            }

        </div>
    </>)
}
