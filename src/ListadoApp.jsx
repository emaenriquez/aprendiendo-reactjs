// condicionales y ternarios

const Items = ({nombre,vistos}) =>{
    return (
        <>
            <li>
                {nombre}
                {/* {vistos ? ' visto' : ' no visto'} */}
                {vistos && '✔'}
            </li>
        </>
    )
} 

export const ListadoApp = () => {
    return (
        <>
            <div>Listado app </div>
            <ol>
                <Items nombre={"javaScript"} vistos={true}></Items>
                <Items nombre={"python"} vistos={true}></Items>
                <Items nombre={"Go"} vistos={false}></Items>
                <Items nombre={"C"} vistos={true}></Items>
            </ol>
        </>
    )
}
