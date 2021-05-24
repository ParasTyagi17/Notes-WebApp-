import React, { useState } from "react";
import "./App.css";
function Func()
{   const [textt,setText]=useState();
    const [list,setList]=useState([]);
    const [check,setCheck]=useState(0);
   const add =(event)=>{
        setText(event.target.value);
    }
    const onAddTodo =()=>{
        setList([...list,{todo:textt,complete:false}]); 
        setText("");   
    }
    const showCom=()=>{
        
           setCheck(1);     

    }
    const showAll=()=>{
        
        setCheck(0);     

    }
 const showPen=()=>{
        
    setCheck(2);     

     }
    const onCom=(index)=>{
    const newTodoList = [...list];

        newTodoList[index] = {
          ...newTodoList[index],
          complete: !newTodoList[index].complete,
        };
    
        setList(newTodoList);

    } 
    const onCop=(index)=>{
           setList((old)=>{
            var a=list.slice(0,index);
            var b={...list[index],complete:false}
            var c=list.slice(index,list.length);
            var d=a.concat(b);
            var e=d.concat(c);
           return e;
        })

    }
    const onDel=(index)=>{
        setList((old)=>{
            var a=list.slice(0,index);
            var b=list.slice(index+1,list.length);
            var c=a.concat(b);
            return c;
        });

    }
    const center= {
        margin: "auto",
        width: "50%",
        border: "3px solid green",
        padding: "10px",
     };
   
    return(
       
        <div className="aa" style={center}>
          <center><h3>Todo App</h3></center> 
                     <center>
                        <input
                           type="text"
                           value={textt}
                           onChange={add}
                        />
                         <button onClick={onAddTodo}>Add Todo</button>
                         </center>
                      <div className="filters">
                          <center>Filters:
                          <button onClick={showAll}>Show All</button>
                          <button onClick={showCom}>Show Completed</button>
                          <button onClick={showPen}>Show Pending</button></center>
                      </div>
                       <center><ul>
                           {list.map((item,index) => {
                            if(item.complete && (check === 0 || check === 1))
                           { return(<li className={item.complete ? "completedTodo" : ""}>
                           <input
                           type="checkbox"  checked={item.complete} onChange={() => onCom(index)}/>
                            
                           <span>{item.todo}</span>
                           <button onClick={() => onDel(index)}>Delete Todo</button>
                           <button onClick={() => onCop(index)}>Copy Todo</button>
                         </li>);}

                          else if(!item.complete && (check === 0 || check === 2))
                          {return(<li className={item.complete ? "completedTodo" : ""}>
                           <input
                          type="checkbox"  checked={item.complete} onChange={() => onCom(index)}/>
 
                         <span>{item.todo}</span>
                         <button onClick={() => onDel(index)}>Delete Todo</button>
                         <button onClick={() => onCop(index)}>Copy Todo</button>
                         </li>);}
                         
                         
                           })}
                        </ul></center>
       
        </div>
    )
}
export default Func