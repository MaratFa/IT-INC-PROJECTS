import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile';

const App = () => {
    return (
        <div className='grid-container'>
            <Header />
            <Navbar />
            <Profile />
        </div>
    );
}

export default App; 
