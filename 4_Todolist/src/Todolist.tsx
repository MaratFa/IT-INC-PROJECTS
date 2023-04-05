import { useState } from "react"
import { FilterValuesType } from "./App"

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {  
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    addTask: () => void
    changeFilter: (value: FilterValuesType) => void
}

export function Todolist(props: PropsType) {
    const [newTitleTask, setNewTitleTask] = useState('')
    
    
    return <div>
        <h3>{props.title}</h3>
        <div>
            <label>Enter new task<br />
                <input
                    type="text" 
                    value={newTitleTask}
                    onChange={(e) => setNewTitleTask(e.target.value)}
                />
                <button onClick={
                    () => {
                        props.addTask()
                    }
                }>+</button>
            </label>

            
        </div>
        <ul>
            {props.tasks.map((task: TaskType) => {
                return (
                    <li key={task.id}>
                        <input type='checkbox' checked={task.isDone} />
                        <span>{task.title}</span>
                        <button onClick={() => {
                            props.removeTask(task.id)
                        }}>
                            ✖️
                        </button>
                    </li>
                )
            }
        
        )
        }
        </ul>
        <div>
            <button onClick={() => {
                props.changeFilter('All')
            }}>
                All
            </button>
            <button onClick={() => {
                props.changeFilter('Active')
            }}>
                Active
            </button>
            <button onClick={() => {
                props.changeFilter('Completed')
            }}>
                Completed
            </button>
        </div>
    </div>
}
