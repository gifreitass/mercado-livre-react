import styled from "styled-components"
import NewProduct from "../components/templates/NewProduct"

const Cadastro = () => {
    const Body = styled.body`
    background-color: #e5e4e2;
    height: 100vh
    `

    return (
        <Body>
            <NewProduct />
        </Body>
    )
}

export default Cadastro

