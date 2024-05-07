import React from 'react'

const Div:React.FC<{G:number,H:number}>  = (props) => {
    const{G,H}=props
  return (
    <>
    <div>DIVISION = {G/H}</div>
    </>
  )
}

export default Div