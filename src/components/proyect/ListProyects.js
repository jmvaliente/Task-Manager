import React, { useContext, useEffect } from 'react'
import ProyectList from './ProyectList'

import proyectContext from '../../context/proyects/proyectContext'

const ListProyects = () =>{

    const context = useContext(proyectContext)

    const {listProyect, listProyectFn} = context
    
    useEffect(() =>{
        listProyectFn()
    },[])
    
    if(listProyect===0) return null

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