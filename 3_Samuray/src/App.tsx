import './App.css';

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src='https://mediaprocessor.websimages.com/fit/1920x1920/vijaykantindia.webs.com/web.png' alt=''/>
            </header>
            <nav className='nav'>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img src='https://justcoolidea.ru/wp-content/uploads/2017/10/KEYS.jpg' alt=''/>
                </div>
                <div>                    
                    Avatar + Description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                </div>
                <div>
                    Post 1
                </div>
                <div>
                    Post 2
                </div>
            </div>
        </div>
    );
}

export default App; 
