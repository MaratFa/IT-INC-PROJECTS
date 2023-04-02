import * as React from "react";
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <div className='App'>
                APP HELLO 
                <Routes>
                  <Route path='/hello/' element={<HelloMessage message={"Hello Friends"} />} />                
                  <Route path='/bye' element={<ByeMessage message={'Bye Samurai'} />} />
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