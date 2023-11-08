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
            <button onClick={logout}>Logout
            </button>
            <SearchBar onSearch={onSearch} getRandomCharacter={getRandomCharacter} />
        </div>
    )
}
