import React from  'react'

export default function Random(props){
  const {min, max} = props
  const random = parseInt(Math.random() * (max - min)) + min
  return(
    <div>
      <h2>Aleatório</h2>
      <p>Valor Mínimo: {min}</p>
      <p>Valor Máximo: {max}</p>
      <p>Valor Escolhido: {random}</p>

    </div>
  )
}