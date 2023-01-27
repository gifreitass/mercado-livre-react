import NavBar from "../molecules/NavBar"
import SearchBar from "../molecules/SearchBar"

const Header: React.FC<{ findProduct: string, setFindProduct: any }> = (props) => {
    return(
        <div>
            <SearchBar findProduct={props.findProduct} setFindProduct={props.setFindProduct} />
            <NavBar />
        </div>
    )
}

export default Header