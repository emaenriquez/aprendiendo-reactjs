
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

    function contador() {
        value += 1
        console.log(value)
    }

    return (
    <>
        <div>Contador App</div>
        <p>{value}</p>
        {/* <Button></Button> */}
        <button onClick={contador}>Click para aumentar el Contador</button>
    </>
    )
}