import NavBar from "../molecules/NavBar"
import SearchBar from "../molecules/SearchBar"

const Header: React.FC<{ findProduct?: string, setFindProduct?: React.Dispatch<React.SetStateAction<string>> }> = (props) => {
    return(
        <div>
            {props.findProduct && props.setFindProduct &&
                <SearchBar findProduct={props.findProduct} setFindProduct={props.setFindProduct} />
            }
            <NavBar />
        </div>
    )
}

export default Header