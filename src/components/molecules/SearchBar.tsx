import Input from "../atoms/Input"
import { DivSearchBar } from "../../styled-components"

const SearchBar: React.FC<{ findProduct: string, setFindProduct: any }> = (props) => {
    return (
        <DivSearchBar>
            <Input findProduct={props.findProduct} setFindProduct={props.setFindProduct} />
        </DivSearchBar>
    )
}

export default SearchBar