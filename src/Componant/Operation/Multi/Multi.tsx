import React from 'react'
import Div from '../Div/Div'

const Multi:React.FC<{E:number,F:number}>  = (props) => {
    const{E,F}=props
  return (
    <>
    <div>MULTIPLICATION = {E*F}</div>
      <Div G={E}  H={F}></Div>
    </>
  )
}

export default Multi