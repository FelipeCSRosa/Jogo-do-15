import { useEffect, useState } from 'react'

import Peca from './Peca'

import './Tabuleiro.css'

function Tabuleiro(props) {

  const [pecas, setPecas] = useState(props.pecas);

  function handlePeca(posicaoPeca, valorPeca){
    let cima = posicaoPeca - 4;
    let baixo = posicaoPeca + 4;
    let esquerda = posicaoPeca - 1;
    let direita = posicaoPeca + 1;

    let novoArray = [];

    if(pecas[baixo] === 0){
        novoArray = pecas;
        novoArray[baixo] = valorPeca;
    }

    setPecas(novoArray);
    console.log(pecas);
  }

  return (
    <>
      <div className='tabuleiro'>
        {
            pecas.map((item, index) => <Peca key={index} position={index} numero={item} onClick={handlePeca}/>)
        }
    </div>
    </>
  )
}

export default Tabuleiro
