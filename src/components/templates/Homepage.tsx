import axios from "axios"
import React, { useEffect, useState } from "react"
import InputSelect from "../atoms/InputSelect"
import InformationSection from "../molecules/InformationsSection"
import Header from "../organisms/Header"
import ProductSection from "../organisms/ProductSection"

export interface iGetProductsResponse{
    nome: string,
    marca: string,
    valor: number,
    categoria: string,
    imagem: string,
    id: number
}

const Homepage: React.FC = () => {
    const[products, setProducts] = useState<iGetProductsResponse[]>([])
    const[priceProduct, setPriceProduct] = useState<string>('less')
    const [findProduct, setFindProduct] = useState<string>('')

    const getProducts: () => Promise<void> = async () => {
        const response = await axios.get("https://apigenerator.dronahq.com/api/C9D5jR1z/mercadoLivre")
        setProducts(response.data)
    }

    useEffect(() => {
        getProducts()
    }, [])

    const handleClick = (evt: React.ChangeEvent<HTMLSelectElement>) => {
        setPriceProduct(evt.currentTarget.value)
    }

    return (
        <>
            <Header findProduct={findProduct} setFindProduct={setFindProduct} />
            <InformationSection />
            <InputSelect onChange={handleClick} />
            <ProductSection productsList={products} priceProduct={priceProduct} findProduct={findProduct} />
        </>
    )
}

export default Homepage