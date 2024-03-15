
import { useState } from 'react';

function MyButton() {


    const [count, setcount] = useState(0);

    function hadleClick() {
        setcount(count + 1);
    }

    return ( <button onClick={hadleClick}> contador {count} times</button> )
}

// const user = { imageSize: 90 };

export function Components({ nombre, imageUrl, nombreImagen }) {


    function handleClick() {
        alert('hola')
    }
    const products = [
        { title: 'Cabbage', isFruit: false, id: 1 },
        { title: 'Garlic', isFruit: false, id: 2 },
        { title: 'Apple', isFruit: true, id: 3 },
    ];

    const listaItem = products.map((product) =>
        <li key={product.id} style={{ color: product.isFruit ? 'magenta' : 'darkgreen' }}>
            {product.title}
        </li>
    )

    return (
        <>
            <div>
                <h1>Welcome to my app</h1>
                <h2>{nombre}</h2>

                <ul>{listaItem}</ul>
                <button onClick={handleClick}>click aqui</button>
                <MyButton></MyButton>
            </div>

            {/* <img 
                className="avatar" 
                src={imageUrl} 
                alt={'imagen de' + nombreImagen}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
            <MyButton /> */}
        </>
    );
}