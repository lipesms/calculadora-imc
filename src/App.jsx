import './global.css'

import Calculadora from './Components/Calculadora'
import { useState } from 'react'
import Imc from './Components/Imc';

function App() {

  const [data, setData] = useState('');
  const [preenchido, setPreenchido] = useState(false)

  const childToParent = (childdata) => {
    setData(childdata);
    setPreenchido(true)
  }

  return (
    <div className='container'>
      <div className='content'>

        <Calculadora childToParent={childToParent} />
        {preenchido && <Imc resultadoImc={data} />}
      </div>
    </div>
  )
}

export default App
