import Product from "../molecules/Product"
import { DivProductSection } from "../../styled-components"
import { iGetProductsResponse } from "../templates/Homepage"

const ProductSection: React.FC<{ productsList: iGetProductsResponse[], priceProduct: string }> = (props) => {
    return (
        <DivProductSection>
            {props.productsList.sort((a, b) => {
                if(props.priceProduct === "more"){
                    return b.valor - a.valor   
                }
                return a.valor - b.valor
            }).slice(0, 9).map((product) => {
                return <Product imagem={product.imagem} nome={product.nome} valor={product.valor} marca={product.marca} categoria={product.categoria} />
            })}
        </DivProductSection>
    )
}

export default ProductSection