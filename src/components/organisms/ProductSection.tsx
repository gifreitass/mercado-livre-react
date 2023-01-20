import Product from "../molecules/Product"
import { DivProductSection } from "../../styled-components"

const ProductSection: React.FC = () => {
    return (
        <DivProductSection>
            <Product src="https://http2.mlstatic.com/D_NQ_NP_906003-MLA51439581349_092022-W.jpg" p="Notebook" h4="R$3000" />
            <Product src="https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/c/e/celular-smartphone-samsung-a53-5g-tela-6-1--8gb-ram-128gb_776212.jpg" p="Celular" h4="R$4000" />
            <Product src="https://cdn.weasy.io/users/xiaomi/catalog/thumb_tv_p1e_43_1.png" p="Televisão" h4="R$2500" />
        </DivProductSection>
    )
}

export default ProductSection