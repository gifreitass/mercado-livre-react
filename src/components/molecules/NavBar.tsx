import NavegationTitle from "../atoms/NavegationTitle"
import { DivNavBar } from "../../styled-components"

const NavBar: React.FC = () => {
    return (
        <DivNavBar>
            <NavegationTitle>Categorias</NavegationTitle>
            <NavegationTitle>Ofertas do dia</NavegationTitle>
            <NavegationTitle>Histórico</NavegationTitle>
            <NavegationTitle>Moda</NavegationTitle>
        </DivNavBar>
    )
}

export default NavBar