import React from "react";

type PropsType={
    track1: string
    track2?: number
    tasks: Array<TaskType>
}

type TaskType={
    id: number
    title: string
    isDone: boolean
}


export const Todolist=(props: PropsType)=>{
    return(
        <div>
            <h3>{props.track1}</h3>
            <h3>{props.track2}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((el: TaskType )=>{
                    return(
                        <li><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span></li>
                    )
                })}
                {/*<li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>*/}
                {/*<li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>*/}
                {/*<li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>React</span>{props.tasks[2].title}</li>*/}                
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>    
    )
}