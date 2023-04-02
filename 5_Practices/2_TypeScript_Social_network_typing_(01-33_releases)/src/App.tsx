import * as React from "react";
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import state from "./redux/state";

const App = () => {
    let name1 = state.dialogsPage.messages[0].name
    let name2 = state.dialogsPage.messages[1].name
    return (
        <BrowserRouter>
            <div className='App'>
                APP HELLO 
                <Routes>
                  <Route path='/hello/' element={<HelloMessage message={name1} />} />                
                  <Route path='/bye' element={<ByeMessage message={name2} />} />
                </Routes>
            </div>            
         </ BrowserRouter>
    );
}

type MessageType = {
    message: string
}

function HelloMessage(props: MessageType) {
  debugger
    return <h1>{props.message}</h1>    
}

const ByeMessage: React.FC<MessageType> = (props) => {
return <h1>{props.message}</h1>
}

export default App; 
