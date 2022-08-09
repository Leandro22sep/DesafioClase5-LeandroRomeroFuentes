import React from 'react'
import Item from '../Item'

const ItemList = ({listProductos}) => {
  return (
    <>
      {listProductos.map(producto => <Item key={producto.id} producto={producto} />)}
    </>
  )
}

export default ItemList