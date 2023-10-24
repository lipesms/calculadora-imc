import { useEffect, useState } from "react"

import styles from './Imc.module.css'

import abaixoDoPeso from "../../assets/abaixo-do-peso.png"
import pesoNormal from "../../assets/peso-normal.png"
import sobrepeso from "../../assets/sobrepeso.png"
import obesidade from "../../assets/obeso.png"
import obesidadeGrave from "../../assets/obesidade-grave.png"

const imagensFaixaImc = [abaixoDoPeso, pesoNormal, sobrepeso, obesidade, obesidadeGrave]
// eslint-disable-next-line react/prop-types
const Imc = ({resultadoImc}) => {

    const [faixaImc, setFaixaImc] = useState({})

    useEffect(()=>{
        atualizaImagem()
    }, [resultadoImc])

    const atualizaImagem = () => {
        const imcTratado = parseInt(resultadoImc)
        console.log(imcTratado)

        if(imcTratado < 18.5){
            setFaixaImc({
                id: 0, 
                titulo: "abaixo do peso",
                infos: "Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso."
            })
            console.log("abaixo")
        }else if(imcTratado <= 24.9){
            setFaixaImc({
                id: 1, 
                titulo: "Peso ideal",
                infos: "Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada."
            })
            console.log("normal")
        }else if(imcTratado <=29.9){
            setFaixaImc({
                id: 2, 
                titulo: "sobrepeso",
                infos: "Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer."
            })
            console.log("sobre")
        }else if(imcTratado <= 34.9){
            setFaixaImc({
                id: 3, 
                titulo: "Obesidade",
                infos: "Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista."
            })
            console.log("obe grav")
        }else if(imcTratado >= 35){
            setFaixaImc({
                id: 4, 
                titulo: "Obesidade grave",
                infos: "Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente."
            })
            console.log("obe grav")
        }
    }

    return(
        <div className={styles.resultadoImc}>
            <h2 className={styles.resultadoTitulo}>{faixaImc.titulo}</h2>
            <div className={styles.resultadoInfos}>
                <img className={styles.resultadoImagem} src={imagensFaixaImc[faixaImc.id]} alt="" />
                <p className={styles.resultadoTexto}>{faixaImc.infos}</p>
            </div>
        </div>
    )
}

export default Imc