import { useState } from 'react'
import styles from './Calculadora.module.css'

// eslint-disable-next-line react/prop-types
const Calculadora = ({childToParent}) => {

    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)

    const calcularImc = () => {
        if(weight > 0 && height > 0)
            childToParent(weight / (height*height))
    }

    return (
        <div className={styles.header}>
            <h1 className={styles.headerTitle}>Calcule seu IMC:</h1>

            <div>
                <input onBlur={({target}) => setWeight(Number(target.value))} className={styles.headerInputs} type="number" placeholder="peso" />
                <input onBlur={({target}) => setHeight(Number(target.value))} className={styles.headerInputs} type="number" placeholder="altura" />

                <button className={styles.headerButton} onClick={calcularImc}>Calcular</button>
            </div>

        </div>
    )

}

export default Calculadora