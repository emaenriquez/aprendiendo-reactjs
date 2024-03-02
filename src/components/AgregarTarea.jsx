import { useState } from "react"

export const AgregarTarea = ({agregarTarea}) => {
    const [inputValue, setinputValue] = useState('')


    const onInputChange = (event) => {
        setinputValue(event.target.value)
        // console.log('esta cambiando')
    } 

    const onSubmit = (event) => {
        const envioDatos = {
            nombre: inputValue,
            vistos: true
        }
        event.preventDefault()
        // console.log(inputValue)
        agregarTarea(tareas => [...tareas,envioDatos])
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="agregar tarea" value={inputValue} onChange={onInputChange}/>
        </form>
        
    )
}
