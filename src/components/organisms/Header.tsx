import NavBar from "../molecules/NavBar"
import SearchBar from "../molecules/SearchBar"

const Header: React.FC = () => {
    return(
        <div>
            <SearchBar />
            <NavBar />
        </div>
    )
}

export default Header