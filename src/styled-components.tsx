import styled, { css } from "styled-components"
import { Link } from "react-router-dom"

export const InputStyle = styled.input`
    border-radius: 3px;
    padding: 3px
`

const sharedDivStyle = css`
    background-color: #fff45c;
    display: flex;
    align-items: center;
    height: 10vh;
    border-bottom: 3px solid black;
    font-size: 20px;
`

const sharedInputStyle = css`
    border-radius: 3px;
`

export const DivSearchBar = styled.div`
    ${sharedDivStyle}
    justify-content: center;
`

export const LetterNavBar = styled.p`
    color: black;
`

export const LinkNavBar = styled(Link)`
    text-decoration: none
`

export const DivNavBar = styled.div`
    ${sharedDivStyle}
    justify-content: space-evenly;
`

export const DivInformation = styled.div`
    display: flex;
    width: 80vw;
    margin: 40px auto;
    justify-content: space-around;
    background-color: white;
    padding: 30px;
    border-radius: 10px
`

export const DivInputSelect = styled.div`
    display: flex;
    justify-content: center
`

export const InputSelectStyle = styled.select`
    ${sharedInputStyle}
`

export const Img = styled.img`
    width: 250px;
    height: 250px
`

export const DivProduct = styled.div`
    background-color: white;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 10px;
    padding: 15px
`

export const DivProductSection = styled.div`
    margin: 50px auto 0 auto;
    display: flex;
    justify-content: space-around;
    width: 80vw; 
    flex-wrap: wrap;
    gap: 20px
`

export const FormNewProduct = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px
`

export const ParagraphNewProduct = styled.p`
    font-size: 20px;
    font-weight: 600 
`

export const InputNewProduct = styled.input`
    ${sharedInputStyle}
`
export const ButtonNewProduct = styled.button`
    padding: 5px;
    margin-top: 20px;
    cursor: pointer
`

export const LabelNewProduct = styled.label`
    margin-top: 10px
`

