import React from 'react'
import {useState} from 'react'


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [input, setInput] = useState({
    nombre: '',
    email: ''
  })

  const [message, setMessage] = useState('')
  // validar  nombre 
  const HandleChange = (e) => {
    const nombre = e.target.name
    let value = e.target.value
    setInput({...input, [nombre]: value})
    console.log(input)
  }
  // validar  email 
  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    if (regEx.test(input.email)) {
      return true
    } else {
      return false
    }
  }

  const HandleSubmit = (e) => {
    e.preventDefault()
    if (input.nombre.length > 5 && emailValidation() === true) {
      setMessage(
        'Gracias ' +
          input.nombre +
          ' te contactaremos via email'
      )
    } else {
      setMessage('Por favor verifica su informacion nuevamente')
    }
  }

  return (
    <div>
      <form className='formStyle'>
        <input className='InputStyle'
          type="text"
          placeholder="Nombre"
          name="nombre"
          onChange={(e) => HandleChange(e)}></input>
        <input className='InputStyle'
          type="text"
          placeholder="Email"
          name="email"
          onChange={(e) => HandleChange(e)}></input>
        <button type="submit" onClick={(e) => HandleSubmit(e)} className="button-form">
          Envia
        </button>
      </form>
      <h3>{message}</h3>
    </div>
  )
}

export default Form