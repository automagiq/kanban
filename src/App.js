import React, {useState} from 'react';
import Column from './Column';
import {Container, Row} from "reactstrap";
import Controller from "./Controller";


function App() {

    const taskList = [
        {id:Math.random(), name:"Task One", priority:0, status: "todo"},
        {id:Math.random(), name:"Task Two", priority:1, status: "todo"},
        {id:Math.random(), name:"Task Three", priority:1, status: "todo"},
        {id:Math.random(), name:"Task Four", priority:2, status: "todo"}
        ]

    const columnList = [
        {id:Math.random(), title:"To DO",  status: "todo"},
        {id:Math.random(), title:"In Progress Two",  status: "progress"},
        {id:Math.random(), title:"Review",  status: "review"},
        {id:Math.random(), title:"D O N E ",  status: "done"}
        ]


const statuses = ['todo', 'progress', 'review', 'done'];
const taskPriority =[0,1,2];

    const [tasks, setTasks] = useState(taskList);


    const changeTaskStatus = (taskId, direction)=> {
        const newTask =tasks.map(el=>{
            if (el.id===taskId) {
                if (direction==='right') el.status=statuses[statuses.indexOf(el.status)+1]
                if (direction==='left') el.status=statuses[statuses.indexOf(el.status)-1]
                 if (direction==='left') el.status=statuses[statuses.indexOf(el.status)-1]
                if (direction==='up') el.priority=taskPriority[taskPriority.indexOf(el.priority)+1]
                if (direction==='down') el.priority=taskPriority[taskPriority.indexOf(el.priority)-1]


            }
            return el
        })
    setTasks(newTask)
    }



  return (
    <div >

 <Container>

 <Controller/>
<Row>



    {columnList.map(el=> <Column tasks={tasks} column={el}  changeTaskStatus={changeTaskStatus}/>)}
            {/*<Column changeTaskStatus={changeTaskStatus} title={'todo'} tasks={tasks}/>*/}
            {/*<Column changeTaskStatus={changeTaskStatus} title={'progress'} tasks={tasks}/>*/}
            {/*<Column changeTaskStatus={changeTaskStatus} title={'review'} tasks={tasks}/>*/}
            {/*<Column changeTaskStatus={changeTaskStatus} title={'done'} tasks={tasks}/>*/}
 </Row>



 </Container>


    </div>
  );
}

export default App;
