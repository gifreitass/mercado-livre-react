import { ButtonNewProduct, FormNewProduct, InputNewProduct, LabelNewProduct, ParagraphNewProduct } from "../../styled-components"
import Header from "../organisms/Header"
import React, { useState, useEffect } from "react"
import axios from "axios"
import { useFormik } from "formik"
import * as Yup from 'yup';

const NewProduct: React.FC = () => {
    const [disabled, setDisabled] = useState(true)

    const formik = useFormik({
        initialValues: {
            nome: "",
            marca: "",
            valor: "",
            categoria: "",
            imagem: ""
        },
        validationSchema:
            Yup.object().shape({
            nome: Yup.string()
                .matches(/^[a-zA-Z]{0,}(?: [a-zA-Z]+){0,2}$/, 'O nome não pode conter caracteres especiais'),
            valor: Yup.number()
                .typeError('O campo deve ser preenchido com um número')
                .integer('O número precisa ser inteiro')
                .moreThan(0, 'O número precisa ser maior que zero'),
            imagem: Yup.string()
                .required('Campo obrigatório')
        }),
        onSubmit: async () => {
            await axios.post("https://apigenerator.dronahq.com/api/C9D5jR1z/mercadoLivre", {
                nome: formik.values.nome,
                marca: formik.values.marca,
                valor: Number(formik.values.valor),
                categoria: formik.values.categoria,
                imagem: formik.values.imagem
            })
            formik.resetForm()
        }
    })

    useEffect(() => {
        setDisabled(!(
            !!formik.values.nome &&
            !!formik.values.marca &&
            !!formik.values.valor &&
            !!formik.values.categoria &&
            !!formik.values.imagem))
    }, [formik.values])

    return (
        <section>
            <Header />
            <div>
                <FormNewProduct onSubmit={formik.handleSubmit}>
                    <ParagraphNewProduct>Cadastre um novo produto abaixo:</ParagraphNewProduct>
                    <LabelNewProduct htmlFor="nome">Nome:</LabelNewProduct>
                    <InputNewProduct type="text" id="nome" onChange={formik.handleChange} value={formik.values.nome} />
                    {formik.errors.nome && (<div>{formik.errors.nome}</div>)}
                    <LabelNewProduct htmlFor="marca">Marca:</LabelNewProduct>
                    <InputNewProduct type="text" id="marca" onChange={formik.handleChange} value={formik.values.marca} />
                    <LabelNewProduct htmlFor="valor">Valor:</LabelNewProduct>
                    <InputNewProduct type="text" id="valor" onChange={formik.handleChange} value={formik.values.valor} />
                    {formik.errors.valor && (<div>{formik.errors.valor}</div>)}
                    <LabelNewProduct htmlFor="categoria">Categoria:</LabelNewProduct>
                    <InputNewProduct type="text" id="categoria" onChange={formik.handleChange} value={formik.values.categoria} />
                    <LabelNewProduct htmlFor="imagem">Imagem:</LabelNewProduct>
                    <InputNewProduct type="text" id="imagem" onChange={formik.handleChange} value={formik.values.imagem} />
                    {formik.errors.imagem && (<div>{formik.errors.imagem}</div>)}
                    <ButtonNewProduct type="submit" disabled={disabled} >Cadastrar</ButtonNewProduct>
                </FormNewProduct>
            </div>
        </section>
    )
}

export default NewProduct