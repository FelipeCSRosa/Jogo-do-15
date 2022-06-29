import { useState } from 'react'

import './Peca.css'

function Peca(props) {

  function handleClick(){
    props.onClick(props.position, props.numero);
  }

  function createPeca(){
    if(props.numero != 0){
        return (
            <div className='peca' onClick={handleClick}><h1>{props.numero}</h1></div>
        )
    }
  }

  return (
    <div>
        {createPeca()}
    </div>
  )
}

export default Peca
