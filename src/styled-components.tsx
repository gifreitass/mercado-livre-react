import styled, { css } from "styled-components"

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

export const DivSearchBar = styled.div`
    ${sharedDivStyle}
    justify-content: center;
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

export const Img = styled.img`
    width: 250px;
    height: 250px
`

export const DivProduct = styled.div`
    background-color: white;
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px
`

export const DivProductSection = styled.div`
    margin: 50px auto;
    display: flex;
    justify-content: space-around;
    width: 80vw;    
`
