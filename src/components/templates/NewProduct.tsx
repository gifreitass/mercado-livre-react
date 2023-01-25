import { ButtonNewProduct, FormNewProduct, InputNewProduct, LabelNewProduct, ParagraphNewProduct } from "../../styled-components"
import Header from "../organisms/Header"
import React, { useState, useEffect } from "react"
import axios from "axios"


const NewProduct: React.FC = () => {
    const [formValues, setFormValues] = useState({ nome: "", marca: "", valor: "", categoria: "", imagem: "" })
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        setDisabled(!(!!formValues && !!formValues.nome && !!formValues.marca && !!formValues.valor && !!formValues.categoria && !!formValues.imagem))
    }, [formValues])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({ ...formValues, [event.target.id]: event.target.value })
    }

    const postProducts = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        axios.post("https://apigenerator.dronahq.com/api/C9D5jR1z/mercadoLivre", {
            nome: formValues.nome,
            marca: formValues.marca,
            valor: Number(formValues.valor),
            categoria: formValues.categoria,
            imagem: formValues.imagem
        })
        setFormValues({ nome: "", marca: "", valor: "", categoria: "", imagem: "" })
    }

    return (
        <section>
            <Header />
            <div>
                <FormNewProduct onSubmit={postProducts}>
                    <ParagraphNewProduct>Cadastre um novo produto abaixo:</ParagraphNewProduct>
                    <LabelNewProduct htmlFor="nome">Nome:</LabelNewProduct>
                    <InputNewProduct type="text" id="nome" onChange={handleChange} value={formValues.nome} />
                    <LabelNewProduct htmlFor="marca">Marca:</LabelNewProduct>
                    <InputNewProduct type="text" id="marca" onChange={handleChange} value={formValues.marca} />
                    <LabelNewProduct htmlFor="valor">Valor:</LabelNewProduct>
                    <InputNewProduct type="text" id="valor" onChange={handleChange} value={formValues.valor} />
                    <LabelNewProduct htmlFor="categoria">Categoria:</LabelNewProduct>
                    <InputNewProduct type="text" id="categoria" onChange={handleChange} value={formValues.categoria} />
                    <LabelNewProduct htmlFor="imagem">Imagem:</LabelNewProduct>
                    <InputNewProduct type="text" id="imagem" onChange={handleChange} value={formValues.imagem} />
                    <ButtonNewProduct type="submit" disabled={disabled}>Cadastrar</ButtonNewProduct>
                </FormNewProduct>
            </div>
        </section>
    )
}

export default NewProduct