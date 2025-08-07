import React from 'react'

const Footer = ({length}) => {
    const year = new Date();
  return (
    <footer>
      {(length===0)?null:
        (
          <h1>{length} List {(length===1)?"item":"items"}</h1>
        )
      } 
        <h1>Copyright &copy; {year.getFullYear()}</h1>
    </footer>
  )
}

export default Footer