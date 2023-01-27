import Input from "../atoms/Input"
import { DivSearchBar } from "../../styled-components"

const SearchBar: React.FC<{ findProduct: string, setFindProduct: React.Dispatch<React.SetStateAction<string>> }> = (props) => {
    return (
        <DivSearchBar>
            {props.setFindProduct &&
                <Input findProduct={props.findProduct} setFindProduct={props.setFindProduct} />
            }
        </DivSearchBar>
    )
}

export default SearchBar