import { useState } from "react";


const DataBase = () => {
  const [userName, setUserName] = useState("");
  const [userage, setUserage] = useState(0);
  const [course, setcourse] = useState("");

type userType ={

  userName:string,
  userage:number,
  course:string,

}
const newArr:userType[] =[
//  if u dont want any blank data show in your program u can also comment this 
  // { 
  //  userName:userName,
  //  userage:userage,
  //  course:course
 

 ]

 
  const [userData, setUserData] = useState<userType[]>(newArr);
  

  const onClickSubmit  = ():void => {
  
    // newArr.push({userage,userAdrs,userName})
    // setUserData([{userName,userage,userAdrs}])
    const addArr:userType[] =[...userData,{userName,userage,course}]
    setUserData(addArr)
    setUserName("")
    setUserage(0)
    setcourse("")
    // console.log(userData)

  };

  const deletItom =(del:any):void=>{
   
    const deletArr:userType[]=[...userData,]
   
    deletArr.splice(del,1)
   
    setUserData([...deletArr])
   
  }

  

// const userArr = newArr.map((user)=>{
  // now value of newArr is = to the userdata so we create userdata.map
  const userArr = userData.map((user)=>{

  return <div className="  justify-center flex text-start text-black">
    <div><p className=" bg-orange-100  p-1 rounded-2xl mt-4 w-64  hover:bg-amber-400 hover:text-rose-700  ">name : {user.userName}</p> </div>
   
    <div><p className=" bg-orange-100 p-1 rounded-2xl mt-4 w-64  hover:bg-amber-400 hover:text-rose-700 ">age : {user.userage}</p></div>
    
    <div><p className=" bg-orange-100 p-1 rounded-2xl mt-4 w-64  hover:bg-amber-400 hover:text-rose-700 ">course : {user.course} </p></div>
   
   <div><button onClick={deletItom} className="text-black bg-red-600 p-2 m-2 rounded-3xl hover:bg-black hover:text-white ">delete</button></div> 
   
   <br />
  </div>

})





  return (
    <>

      <div className=" text-center  h-screen  bg-slate-300 ">
      
      <div >
       <input className="bg-slate-200 p-1 rounded-2xl mt-4 w-64  hover:bg-slate-400" type="text" placeholder="enter name" value={userName} onChange={(e)=>{setUserName(e.target.value)}} />
      </div>
      <div>
        <input className="bg-slate-200 p-1 rounded-2xl mt-4 w-64 text-black  hover:bg-slate-400" type="number" placeholder="enter age" value={userage} onChange={(e)=>{setUserage(parseFloat(e.target.value))}} />
      </div>
      <div>
        <input className="bg-slate-200 p-1 rounded-2xl mt-4 w-64 text-black  hover:bg-slate-400"
          type="text"
          value={course}
          placeholder="enter course u want to join"
          onChange={(e)=>{setcourse(e.target.value)}}
        />
      </div>

      <button className="rounded-2xl bg-blue-950 text-sm p-2 m-2 border-orange-100 hover:bg-amber-400 hover:text-rose-700 text-white" type="submit" onClick={onClickSubmit}>
        submit
      </button>
      
      <p >{userArr}</p>

      </div>
    </>
  );
};

export default DataBase;