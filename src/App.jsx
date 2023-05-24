import { useState } from 'react'
import '../public/main.css'

import Calculator from './calculator'

import Header from './Components/Header'
import Screen from './Components/Screen'
import KeyPad from './Components/KeyPad'
import styles from './Styles'

const calculator = new Calculator

function App() {
  const [currentVal, setCurrentVal] = useState(0)
  const [currentStyle, setCurrentStyle] = useState(0)

  const calculate = (input) => {
    calculator.Calculate(input)
    setCurrentVal(calculator.currentVal)
  }

  return (
    <div className={'w-screen min-h-screen flex flex-col justify-center items-stretch md:items-center transition-colors ' 
    + styles[currentStyle].backgroundStyle}>
      <div className='sm:w-10/12 md:w-5/6 lg:w-2/3 xl:w-1/3 h-5/6 flex flex-col items-center'>
        <Header style={styles[currentStyle]} onSelect={setCurrentStyle}/>
        <Screen style={styles[currentStyle]} value={currentVal} />
        <KeyPad style={styles[currentStyle]} buttonClick={calculate}/>
      </div>
    </div>
  )
}

export default App
