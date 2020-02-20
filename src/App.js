import React, { useState, useEffect } from 'react';

function App() {
  const [binaryNumber, setBinaryNumber] = useState("")
  const [decimalNumber, setDecimalNumber] = useState(0)

  const handleBinaryChange = (event) => {
    const isValid = isInputValid(event.target.value)

    if (isValid) {
      setBinaryNumber(event.target.value)
      calcDecimal()
    }
  }

  const isInputValid = (text) => {
    let typedText = text.charAt(text.length - 1)

    if (typedText === "")
      return true

    return isNumber(typedText) && isOneOrZero(typedText) && isLengthGreaterThanEigth(text)
  }

  const isLengthGreaterThanEigth = (input) => {
    let maxLengthPermit = 8
    if (input.length > maxLengthPermit) {
      alert('Max input exceeded!')
    } else {
      return true
    }
  }

  const isNumber = (number) => {
    if (!isNaN(number)) {
      return true
    } else {
      alert('Not a number!')
    }
  }

  const isOneOrZero = (number) => {
    if (parseInt(number) === 0 || parseInt(number) === 1) {
      return true
    } else {
      alert('Input must be 0 or 1!')
    }
  }

  const calcDecimal = () => {
    setDecimalNumber(0)

    var total = 0
    
    for (let i = binaryNumber.length - 1; i >= 0; i--) {
      
      let calc = parseInt(binaryNumber[i]) * Math.pow(2, total)
      console.log(calc);
      console.log(decimalNumber);
      setDecimalNumber(decimalNumber + calc)
      total++
    }
  }

  return (
    <div className="App">
      <input type="text" onChange={handleBinaryChange} value={binaryNumber} ></input>
      <h1> {decimalNumber} </h1>
      <h1> {binaryNumber} </h1>
    </div>
  );
}

export default App;
