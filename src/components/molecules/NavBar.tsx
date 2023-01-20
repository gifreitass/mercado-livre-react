import NavegationTitle from "../atoms/NavegationTitle"

const NavBar: React.FC = () => {
    return (
        <div>
            <NavegationTitle>Categorias</NavegationTitle>
            <NavegationTitle>Ofertas do dia</NavegationTitle>
            <NavegationTitle>Histórico</NavegationTitle>
            <NavegationTitle>Moda</NavegationTitle>
        </div>
    )
}

export default NavBar