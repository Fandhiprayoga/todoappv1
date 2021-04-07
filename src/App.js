
import React, { useState } from 'react';
import './App.css';
import { Container, TextField, Button, Paper   } from '@material-ui/core';

function App() {
  const [Datas,setDatas]=useState([
    {
      "id":1,
      "title":"Todo List Pertama",
      "status":"Completed ✅"
    },
    {
      "id":2,
      "title":"Todo List Kedua",
      "status":"Incomplete 🏃‍♂️"
    },
    {
      "id":3,
      "title":"Todo List Ketiga",
      "status":"Incomplete 🏃‍♂️"
    }
    
  ])
  
  function DeleteData(e){
      let index=Datas.findIndex(c=>c.id===e)
      console.log(index)
      Datas.splice(index,1)
      setDatas(Datas=>[...Datas])
      console.log(Datas)
      
  }

  function DoneData(e){
      console.log('done')
      const DoneArr= Datas.map((Data)=>{
            let x
            if(Data.id===e){
                x={...Data,"status":"Completed ✅"}
            }
            else
            {
                x=Data
            }
            return x
      })

      setDatas(Datas=>[...DoneArr])
  }

  function UndoneData(e){
      console.log('undone')
      const DoneArr= Datas.map((Data)=>{
        let x
        if(Data.id===e){
            x={...Data,"status":"Incomplete 🏃‍♂️"}
        }
        else
        {
            x=Data
        }
        return x
  })

  setDatas(Datas=>[...DoneArr])
  }

  function BtnDone(props){
    const {status, kunci}=props
      if(status==="Completed ✅"){
        return(<Button  style={{width:100}} onClick={()=>UndoneData(kunci)} >Undone</Button>)
      }
      else{
        return(<Button  style={{width:100}} onClick={()=>DoneData(kunci)} >Done</Button>)
      }
  }

  function ListTodo(props){
    const {status, title, kunci}=props
    
    return(
        <Paper className='List-todo'>
            <h1>{title}</h1>
            <h3>{status}</h3>
            <Button onClick={(e)=>DeleteData(kunci)}>X</Button>
            <BtnDone  status={status} kunci={kunci}/>
        </Paper>
    )
  }

  function AddData(e){
    // console.log(e)
    const countDatas=Datas.length
    setDatas(Datas=> [...Datas,{"id":(countDatas+1),"title":e,"status":"incomplete 🏃‍♂️"}])
    console.log(Datas)
    setTitle('')
}

  const [title, setTitle]=useState('')
  const Listdata=Datas.map((data)=>{
    return(
      <ListTodo kunci={data.id} key={data.id} title={data.title} status={data.status}/>
    )
  })

  return (
    <Container className="Main-App">
      <Paper className='App'>
        <h1>Fandhi's todo app 😀</h1>
        <TextField  value={title} className='TextField' id="filled-basic" label="Add todo list" variant="filled" onChange={(e)=>setTitle(e.target.value)}/>
        <Button onClick={(e)=>AddData(title,e)}className='Button' variant="contained" color="secondary">
            Add
        </Button>
      </Paper>
      {Listdata}
    </Container>
  );
}

export default App;
