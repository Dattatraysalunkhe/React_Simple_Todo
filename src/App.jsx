import React, { useState } from 'react'

var Arr=[
  {
    id:1,
    name:"harsh",
    age:30,

  },
  {
    id:2,
    name:"Anil",
    age:20,

  },
  {
    id:3,
    name:"Ajay",
    age:33,

  },
  {
    id:4,
    name:"Sunil",
    age:21,

  },
]



function App() {
  const [data,setData] = useState(Arr)
  const[name,setName] = useState("")
  const[age,setAge] = useState()

  const handledelete = (itemIndex) => {
    let newArr = data;
     let filterArray =newArr.filter((el,i)=>{
           
      return i !== itemIndex;
     })

     setData(filterArray)
  }
  const add =(e) => {
       e.preventDefault()
       console.log(name+""+age)
       setData((prev)=> [...prev,{id:Date.now(),name:name,age:age}])
  }

  return (
    <div>
      <h1>Student details</h1>
      <form onSubmit={add} action="">
      <label htmlFor="">name</label>
      <input type="text" placeholder='Enter name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <label htmlFor="">age</label>
      <input type="number" placeholder='enter age' value={age} onChange={(e)=>setAge(e.target.value)}/>
      <button>Add</button>
      </form>

      <table style={{border:"2px solid red"}}>
           <thead> <th>no</th> <th>name</th> <th>age</th></thead>

           <tbody>
                {
                  data.map((value,index)=>{
                     return (
                       <tr key={index} >

                        <td>{value.id} </td>
                        <td>{value.name}</td>
                        <td>{value.age}</td>
                  
                        <button onClick={()=>{handledelete(index)}}>x</button>
                       </tr>
                     )
                  })
                }
           </tbody>
      </table>
    </div>
  )
}

export default App
