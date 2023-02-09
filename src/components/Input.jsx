import React from 'react'

const Input = () => {
  return (
    <div className='inputChat'>
        <input type="text" placeholder='Escribe...'/>
        <div className='send'>
            <button>Enviar</button>
        </div>
    </div>
  )
}
export default Input