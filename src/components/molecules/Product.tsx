import { Img } from "../../styled-components"
import { DivProduct } from "../../styled-components"

const Product: React.FC<{
    imagem: string,
    nome: string,
    valor: number,
    marca: string,
    categoria: string
}> = (props) => {
    return (
        <DivProduct>
            <Img src={props.imagem} />
            <p>{props.nome}</p>
            <h4>R${props.valor}</h4>
            <p>{props.marca} - {props.categoria}</p>
        </DivProduct>
    )
}

export default Product