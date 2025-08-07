import React from 'react'
import { FcFullTrash } from 'react-icons/fc';

const LineItems = ({item,handleCheck,handleDelete}) => {
  return (
    <li className='item' key={item.id} >
              <input 
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked = {item.checked}
              />
              <label
                onDoubleClick={() => handleCheck(item.id)}
                style={(item.checked)?{textDecoration:'line-through'}:null}
              >{item.item}</label>
              <FcFullTrash 
                role='button'
                tabIndex="0"
                onClick={() => handleDelete(item.id)}
                aria-label={`Delete ${item.item}`}
              />
            </li>
  )
}

export default LineItems