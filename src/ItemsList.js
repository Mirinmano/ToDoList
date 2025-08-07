import React from 'react'
import { FcFullTrash } from 'react-icons/fc';
import LineItems from './LineItems';

const ItemsList = ({items,handleCheck,handleDelete}) => {
  return (
    <ul>
          {items.map((item) => (
            <LineItems
            item = {item}
            key = {item.id}
            handleCheck = {handleCheck}
            handleDelete = {handleDelete}
            />
          ))}
        </ul>
  )
}

export default ItemsList