import React from 'react';
import './App.css';
import {TaskType, Todolist } from './Todolist';

function App() {
    const forTrack1='What to learn1111';
    const forTrack2='What to learn2222';
    
    const tasks1: Array<TaskType> = [
        { id: 1, title: "HTML&CSS", isDone: true }, //0
        { id: 2, title: "JS", isDone: true },       //1
        { id: 3, title: "ReactJS", isDone: false }, //2
        { id: 4, title: "ReactJS", isDone: false }  //3
    ]
    const tasks2: Array<TaskType> = [
        { id: 1, title: "Hello world", isDone: true },
        { id: 2, title: "I am Happy", isDone: false },
        { id: 3, title: "Yo", isDone: false }
    ]

    return (
        <div className="App">
            <Todolist track1={forTrack1} track2={100200} tasks={tasks1} /> // янв
            <Todolist track1={forTrack2} tasks={tasks2} /> // февр
        </div>
    );
}

export default App;
