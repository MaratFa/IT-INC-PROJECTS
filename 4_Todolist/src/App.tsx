import { v1 } from 'uuid';
import './App.css';
import {Todolist} from './Todolist';
import { useState } from 'react';
export type FilterValuesType = 'All'|'Active'|'Completed'

function App() {

    let[tasks, setTasks] = useState([
        { id: v1(), title: "HTML&CSS", isDone: true },
        { id: v1(), title: "JS", isDone: true },
        { id: v1(), title: "ReactJS", isDone: false },
        { id: v1(), title: "React API", isDone: false },
        { id: v1(), title: "GraphQL", isDone: false }
    ])
    console.log(tasks)

    function removeTask(id: string) {
        let filteredTasks = tasks.filter(task => task.id !== id)
        setTasks(filteredTasks)
    }

    function addTask() {
        let newTask = {id: v1(), title: "New Task", isDone: false };
        let newTasks = [newTask, ...tasks]
        setTasks(newTasks)
    }

    let [filter, setFilter] = useState<FilterValuesType>('All')
    
    let tasksForTodolist = tasks

    if (filter === 'Active') {
        tasksForTodolist = tasks.filter(task => task.isDone === false)
    }

    if (filter === 'Completed') {
        tasksForTodolist = tasks.filter(task => task.isDone === true)
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value)
    }
        

    return (
        <div className="App">
            <Todolist 
                title="What to learn"
                tasks={tasksForTodolist}
                removeTask={removeTask}
                addTask={addTask}
                changeFilter={changeFilter}
            />                
        </div>
    );
}

export default App;
