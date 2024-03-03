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
        {id: 1,nombre:"javaScript", vistos:true},
        {id: 2,nombre:"python", vistos:true},
        {id: 3,nombre:"Go", vistos:false},
        {id: 4,nombre:"C", vistos:true},
    ]
    const [arreglo, setArreglo] = useState(listadoAprendizaje)

    // console.log(arreglo)

    const onAddTarea = (val) => {
        // console.log(val)
        // let valor = val.trin()
        if(val < 1) return 
        const envioDatos = {
            id: arreglo.length + 1,
            nombre: val,
            vistos: true
        }
        setArreglo([...arreglo,envioDatos])
    }

    return (
        <>
            <div>Listado app </div>
            <ol>
                {arreglo.map(item => <Items key={item.id} nombre={item.nombre} vistos={item.vistos}></Items>)}
            </ol>

            <AgregarTarea agregarTarea={onAddTarea}></AgregarTarea>
            {/* <button onClick={() => addTask()}>Agregar tarea</button> */}
        </>
    )
}
