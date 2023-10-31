import SearchBar from "./SearchBar"

export default function Nav({onSearch}){
    return (
        <div>
            <SearchBar onSearch={onSearch} />
            {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
        </div>
    )
}
