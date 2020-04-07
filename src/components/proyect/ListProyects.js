import React, { useState, useContext } from 'react'
import ProyectList from './ProyectList'

import proyectContext from '../../context/proyects/proyectContext'

const ListProyects = () =>{

    const context = useContext(proyectContext)

    const {listProyect} = context

    const [state, setState] = useState([
        {id:1, name: 'Web Developer'},
        {id:2, name: 'UI developer'},
        {id:3, name: 'SEO/SEM strategy'}
    ])
    
    return(
        <ul>
            {listProyect.map(el => (
                <ProyectList 
                    key ={el.id}
                    proyect = {el}/>
            ))}
        </ul>
    )
}

export default ListProyects