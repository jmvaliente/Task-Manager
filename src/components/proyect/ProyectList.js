import React, { useContext } from 'react'
import proyectContext from '../../context/proyects/proyectContext'
import taskContext from '../../context/tasks/taskContext'


const ProyectList = ({proyect}) =>{

    const context = useContext(proyectContext)
    const contextTask = useContext(taskContext)

    const { activeProyectFn } = context
    const { listTaskFn } = contextTask

    const onClick = () =>{
        activeProyectFn(proyect)
        listTaskFn(proyect.id)
    }

    return(
        <li>
            <button
                onClick={ () => onClick()}
            >
                {proyect.name}
            </button>
        </li>
    )
}

export default ProyectList