import { InputSelectStyle, DivInputSelect } from "../../styled-components"

const InputSelect: React.FC<{onChange: (evt: React.ChangeEvent<HTMLSelectElement>) => void}> = (props) => {

    return (
        <DivInputSelect>
            <InputSelectStyle onChange={props.onChange}>
                <option value="less">Menor preço</option>
                <option value="more">Maior preço</option>
            </InputSelectStyle>
        </DivInputSelect>
    )
}

export default InputSelect