import { Img } from "../../styled-components"
import { DivProduct } from "../../styled-components"

const Product: React.FC<{
    src: string,
    p: string,
    h4: string
}> = (props) => {
    return (
        <DivProduct>
            <Img src={props.src} />
            <p>{props.p}</p>
            <h4>{props.h4}</h4>
        </DivProduct>
    )
}

export default Product