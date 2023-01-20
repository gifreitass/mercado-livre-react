import InformationSection from "../molecules/InformationsSection"
import Header from "../organisms/Header"
import ProductSection from "../organisms/ProductSection"

const Homepage: React.FC = () => {
    return (
        <>
            <Header />
            <InformationSection />
            <ProductSection />
        </>
    )
}

export default Homepage