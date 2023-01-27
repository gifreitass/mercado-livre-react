import { InputStyle } from "../../styled-components"

const Input: React.FC<{ findProduct: string, setFindProduct: React.Dispatch<React.SetStateAction<string>> }> = (props) => {
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        props.setFindProduct(evt.target.value)
        console.log(props.findProduct)
    }

    return(
        <InputStyle type="text" value={props.findProduct} onChange={handleChange}/>
    )
}

export default Input