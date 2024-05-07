import React from 'react'
import Multi from '../Multi/Multi'

const Sub:React.FC<{C:number,D:number}> = (props) => {
    const{C,D}=props
  return (
    <>
    <div>SUBTRACTION =   {C-D} </div>
    <Multi E={C}  F={D}></Multi>
    </>
  )
}

export default Sub