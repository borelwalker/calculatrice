import React, { useState } from 'react';
import * as  math from "mathjs"
import Button from './composant/Button';
import Input from './composant/Input';
import "./styles/Button.css";
import "./styles/Input.css";
import "./styles/App.css"

const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) => {
    setText((text) => [...text, val + ""])
  }
  const calculateResult = () => {
    const input = text.join("");// remove commas

    setResult(math.evaluate(input));
  }
  const cleanInput = () => {
    setText("");
    setResult("");
  }
  const colorButton = "#f2a33c"
  const colorAC = "red"


  return (
    <div className='App'>
      <div className='calc-wrapper'>
        <Input text={text} result={result} />

        <div className='row'>
          <Button synbole="AC" handleClick={cleanInput} color={colorAC} />
          <Button synbole="(" handleClick={addToText} color={colorButton} />
          <Button synbole=")" handleClick={addToText} color={colorButton} />
          <Button synbole="/" handleClick={addToText} color={colorButton} />
        </div>
        <div className='row'>
          <Button synbole="7" handleClick={addToText} />
          <Button synbole="8" handleClick={addToText} />
          <Button synbole="9" handleClick={addToText} />
          <Button synbole="*" handleClick={addToText} color={colorButton} />
        </div>
        <div className='row'>
          <Button synbole="4" handleClick={addToText} />
          <Button synbole="5" handleClick={addToText} />
          <Button synbole="6" handleClick={addToText} />
          <Button synbole="-" handleClick={addToText} color={colorButton} />
        </div>
        <div className='row'>
          <Button synbole="1" handleClick={addToText} />
          <Button synbole="2" handleClick={addToText} />
          <Button synbole="3" handleClick={addToText} />
          <Button synbole="+" handleClick={addToText} color={colorButton} />
        </div>
        <div className='row'>
          <Button synbole="0" handleClick={addToText} />
          <Button synbole="." handleClick={addToText} />
          <Button synbole="," handleClick={addToText} />
          <Button synbole="=" handleClick={calculateResult} color={colorButton} />

        </div>

      </div>


    </div>
  )

}
export default App;