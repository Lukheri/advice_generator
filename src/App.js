import React from 'react'
import { useEffect, useState } from 'react'

import desktopDivider from './images/pattern-divider-desktop.svg'
import mobileDivider from './images/pattern-divider-mobile.svg'
import diceIcon from './images/icon-dice.svg'
import axios from 'axios'

function App() {
  const [advice, setAdvice] = useState({})

  const getAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then(response => setAdvice(response.data.slip))
  }

  useEffect(getAdvice, [])

  return (
    <div className='container'>
        <h5 className='adviceNum'>ADVICE #{advice.id}</h5>
        <h2 className='adviceText'>"{advice.advice}"</h2>
        <picture className='divider'>
            <source media='(min-width: 768px)' srcSet={desktopDivider} />
            <img src={mobileDivider} alt='' />
        </picture>
        <div className='diceButtonContainer'>
            <button onClick={getAdvice} className='diceButton'>
                <img src={diceIcon} alt='' />
            </button>
        </div>
    </div>
  )
}

export default App