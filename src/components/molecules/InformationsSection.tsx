import Information from "../atoms/Information"

const InformationSection: React.FC = () => {
    return (
        <div>
            <Information h2="Pagamento rápido e seguro" h4="Com cartão" />
            <Information h2="Até 10 parcelas sem juros" h4="Ver mais" />
            <Information h2="Parcelamento sem cartão" h4="Conheça o mercado de crédito" />
            <Information h2="Via Pix" h4="Ver mais" />
        </div>
    )
}

export default InformationSection