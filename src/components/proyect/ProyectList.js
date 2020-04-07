import React, { useContext } from 'react'
import proyectContext from '../../context/proyects/proyectContext'


const ProyectList = ({proyect}) =>{

    const context = useContext(proyectContext)

    const { activeProyectFn } = context

    return(
        <li>
            <button
                onClick={ () => activeProyectFn(proyect)}
            >
                {proyect.name}
            </button>
        </li>
    )
}

export default ProyectList