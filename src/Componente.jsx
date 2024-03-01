

import PropTypes from 'prop-types'

import './Componente.css'

// const strin = 'hola mundo'
// const number = 10
// const skill = ['java', 'astro', 'tailwid',]
// const funci = () => 1 + 1



export const Componente = ({titulo,subTitulo}) => {



    return (
        <>
            <h1>{titulo}</h1>
            <h2>{subTitulo}</h2>
        </>
    )
}

Componente.PropTypes = {
    titulo: PropTypes.string.isRequired,
    subTitulo: PropTypes.string.isRequired
}

Componente.defaultProps = {
    titulo: 'Bienvenidos a nuestra plataforma web',
    subTitulo: 'donde aprenderas todo lo necesario'
}