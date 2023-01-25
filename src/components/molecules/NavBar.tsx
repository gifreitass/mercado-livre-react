import NavegationTitle from "../atoms/NavegationTitle"
import { DivNavBar, LinkNavBar } from "../../styled-components"
import { Link } from "react-router-dom"

const NavBar: React.FC = () => {
    return (
        <DivNavBar>
            <LinkNavBar to='/'><NavegationTitle>Produtos</NavegationTitle></LinkNavBar>
            <LinkNavBar to='/cadastro'><NavegationTitle>Cadastro</NavegationTitle></LinkNavBar>
        </DivNavBar>
    )
}

export default NavBar