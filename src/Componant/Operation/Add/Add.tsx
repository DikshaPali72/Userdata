import React from 'react'
import Sub from '../Sub/Sub'

const Add:React.FC<{A:number,B:number}> = (props) => {
    const{A,B}=props
  return (
    <>
    <div>ADDITION =   {A+B} </div>
    <Sub C={A}  D={B}></Sub>
    </>
  )
}

export default Add