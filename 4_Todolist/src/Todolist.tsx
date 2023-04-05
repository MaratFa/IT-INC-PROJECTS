import { ChangeEvent, useState } from "react"
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
    addTask: (title: string) => void
    changeFilter: (value: FilterValuesType) => void
}

export function Todolist(props: PropsType) {
    const [newTaskTitle, setNewTaskTitle] = useState('')

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: { charCode: number }) => {
        if (e.charCode === 13) {
            props.addTask(newTaskTitle)
            setNewTaskTitle('')
        }
    }

    const addTask = () => {
        props.addTask(newTaskTitle)
        setNewTaskTitle('')
    }

    const onAllClickHandler = () => props.changeFilter('All')
    const onActiveClickHandler = () => props.changeFilter('Active')
    const onCompletedClickHandler = () => props.changeFilter('Completed')
      
    return <div>
        <h3>{props.title}</h3>
        <div>
            <label>Enter new task<br />
                <input
                    type="text" 
                    value={newTaskTitle}
                    onChange={onNewTitleChangeHandler}
                    onKeyPress={onKeyPressHandler}
                />
                <button onClick={addTask}>+</button>
            </label>            
        </div>
        <ul>
            {props.tasks.map((task: TaskType) => {
                const onRemoveHandler = () => {
                    props.removeTask(task.id)
                }

                return (
                    <li key={task.id}>
                        <input type='checkbox' checked={task.isDone} />
                        <span>{task.title}</span>
                        <button onClick={onRemoveHandler}>✖️</button>
                    </li>
                )
            }
        
        )
        }
        </ul>
        <div>
            <button onClick={onAllClickHandler}>All</button>
            <button onClick={onActiveClickHandler}>Active</button>
            <button onClick={onCompletedClickHandler}>Completed</button>    
        </div>
    </div>
}
