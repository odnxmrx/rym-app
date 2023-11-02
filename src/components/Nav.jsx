import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"

export default function Nav({onSearch}){
    return (
        <div>
            <button>
                <Link to='/about'>About</Link>
            </button>
            <button>
                <Link to='/home'>Home</Link>
            </button>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}
