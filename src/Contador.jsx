

// uso del primer hook useState
import { useState } from "react"

const Button = () => {
    return (
        <button>Click para aumentar el Contador</button>
    )
}

// function contador(value) {
//     value += 1
//     console.log(value)
// }

export const Contador =({value})=>{

    const [contador,setContador] = useState (value)

    function hadleClick() {
        setContador(contador + 1)
    }

    function descontar(){
        setContador(contador - 1 )
    }

    return (
    <>
        <div>Contador App</div>
        <p>{contador}</p>
        {/* <Button></Button> */}
        <button onClick={hadleClick}>Click para aumentar el Contador</button>
        <button onClick={descontar}> click para descontar el Contador</button>
    </>
    )
}