// condicionales y ternarios

import { useState } from "react"
import { AgregarTarea } from "./components/AgregarTarea"

const Items = ({ nombre, vistos }) => {
    return (
        <>
            {/* className="color" */}
            <li>
                {nombre}
                {/* {vistos ? ' visto' : ' no visto'} */}
                {vistos && '✔'}
            </li>
        </>
    )
}


export const MapeoApp = () => {

    const addTask = () =>{
        setArreglo([...arreglo,{nombre:'C#',vistos:false}])
    }

    let listadoAprendizaje = [
        {nombre:"javaScript", vistos:true},
        {nombre:"python", vistos:true},
        {nombre:"Go", vistos:false},
        {nombre:"C", vistos:true},
    ]
    const [arreglo, setArreglo] = useState(listadoAprendizaje)

    // console.log(arreglo)
    return (
        <>
            <div>Listado app </div>
            <ol>
                {arreglo.map(item => <Items key={item.nombre} nombre={item.nombre} vistos={item.vistos}></Items>)}
            </ol>

            <AgregarTarea agregarTarea={setArreglo}></AgregarTarea>
            {/* <button onClick={() => addTask()}>Agregar tarea</button> */}
        </>
    )
}
