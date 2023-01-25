import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Routes } from 'react-router-dom'
import { Route } from 'react-router'
import Cadastro from './pages/Cadastro'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/cadastro' element={<Cadastro />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
)
