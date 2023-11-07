import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"

export default function Nav({onSearch, logout, getRandomCharacter}){
    return (
        <div>
            <button>
                <Link to='/home'>Home</Link>
            </button>

            <button>
                <Link to='/favorites'>Favorites</Link>
            </button>

            <button>
                <Link to='/about'>About</Link>
            </button>
            <button>
                <Link to='/' onClick={logout}>Logout</Link>
            </button>
            <SearchBar onSearch={onSearch} getRandomCharacter={getRandomCharacter} />
        </div>
    )
}
