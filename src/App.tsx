import Homepage from "./components/templates/Homepage"
import styled from "styled-components"

function App() {
  const Body = styled.body`
    background-color: #e5e4e2;
    height: 100vh
  `

  return (
    <Body>
      <Homepage />
    </Body>
  )
}

export default App
