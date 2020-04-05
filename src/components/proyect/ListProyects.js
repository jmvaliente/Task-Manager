import React, { useState } from 'react'
import ProyectList from './ProyectList'

const ListProyects = () =>{

    const [state, setState] = useState([
        {name: 'Web Developer'},
        {name: 'UI developer'},
        {name: 'SEO/SEM strategy'}
    ])

    return(
        <ul>
            {state.map(el => (
                <ProyectList proyect = {el}/>
            ))}
        </ul>
    )
}

export default ListProyects