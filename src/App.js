import './App.css';
import { Li } from './components/Li'
import { useEffect, useRef, useState } from 'react';

function App() {
  const inputTitle = useRef()
  const inputDate = useRef()
  const inputTime = useRef()

  const [tasksList, setTasksList] = useState([])

  useEffect(() => {
    const tasksListSalved = localStorage.getItem('tasksList')
    if(tasksListSalved) {
      setTasksList(JSON.parse(tasksListSalved))
    }
  }, [])

  const handleClick = (e) => {
    e.preventDefault()
    const taskTitle = inputTitle.current.value 
    const taskDate = inputDate.current.value 
    const taskTime = inputTime.current.value 

    const task = {
      text: `${taskTitle} dia: ${taskDate} às ${taskTime}`,
      isDone: false
    } 

    const newTasksList = [...tasksList, task]

    setTasksList(newTasksList)

    localStorage.setItem('tasksList', JSON.stringify(newTasksList))
  }

  const handleCheckboxChange = (index) => {
    const task = tasksList[index]
    task.isDone ? task.isDone = false : task.isDone = true
    console.log(this)
    localStorage.setItem('tasksList', JSON.stringify(tasksList))
  }

  return (
    <div className="App">
      <h1>Tarefas</h1>
      <ul id="list">
        
        {tasksList.map((task, index) => (
          <Li 
            isDone={task.isDone}
            key={index} 
            id={index} 
            text={task.text}
            onCheckboxChange={() => handleCheckboxChange(index)}
          />
        ))}
      </ul>
      <form id="form-newTask">
        <input ref={inputTitle} type="text" required="required" />
        <input ref={inputDate} type="date" required="required" />
        <input ref={inputTime} type="time" required="required" />
        <button id="buttonAdd" type="submit" onClick={handleClick}>+<img src="./assets/add.svg" alt="" /></button>
    </form>
    </div>
  );
}

export default App;
