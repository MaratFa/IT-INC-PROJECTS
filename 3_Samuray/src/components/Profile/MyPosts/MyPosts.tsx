import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return(        
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi friends!' />
                <Post message={`What's up?`} />
            </div>
        </div>  
    )
}

export default MyPosts;