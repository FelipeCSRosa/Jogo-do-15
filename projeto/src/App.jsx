import { useState } from 'react'

import Tabuleiro from './Components/Tabuleiro'

import './App.css'

function App() {

  const [pecas,setPecas] = useState([]);

  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function gerarTabuleiro(){
    let arrPecas = [];

    do{
        let numero = randomIntFromInterval(1,15);
        if(arrPecas.indexOf(numero) === -1) {
            arrPecas = [...arrPecas, numero];
        }
    }while(arrPecas.length < 15);

    arrPecas = [...arrPecas, 0];
    setPecas(arrPecas);
    console.log("arr " + arrPecas);
    console.log("pecas " + pecas);
  }

  return (
    <div className='app-container'>
      <button onClick={gerarTabuleiro}>GERAR</button>
      <Tabuleiro pecas={pecas}/>
    </div>
  )
}

export default App
