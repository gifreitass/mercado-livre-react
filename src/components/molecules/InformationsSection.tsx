import Information from "../atoms/Information"
import { DivInformation } from "../../styled-components"

const InformationSection: React.FC = () => {
    return (
        <DivInformation>
            <Information h2="Pagamento rápido e seguro" h4="Com cartão" />
            <Information h2="Até 10 parcelas sem juros" h4="Ver mais" />
            <Information h2="Parcelamento sem cartão" h4="Conheça o mercado de crédito" />
            <Information h2="Via Pix" h4="Ver mais" />
        </DivInformation>
    )
}

export default InformationSection