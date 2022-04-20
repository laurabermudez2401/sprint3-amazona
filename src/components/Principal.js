import React, {useEffect}from 'react'
import { useDispatch } from 'react-redux'
import { MostrarProducto } from './MostrarProducto'
import { ListarAsincronico } from '../actions/actionProducto'
import { ListarProducto } from './ListarProducto'
import Navb from './Navb'


export const Principal = () => {

const dispatch = useDispatch()

    useEffect(() => {
        dispatch(ListarAsincronico());
      }, []);


    return (
        <div>
            <Navb/>
        <ListarProducto/> 
        </div>
    )
}
