import {useState} from 'react';
import s from './Post.module.css'

const Post = (props: any) => {     
    const [count, setCount] = useState(0);

    return(        
        <div className={s.item}>       
            <img src='https://static.wixstatic.com/media/1f1fbc8e08b24747acc9d7e409092f22.jpg/v1/fill/w_1600%2Ch_1066%2Cal_c%2Cq_90/file.jpg' alt=''/>     
            {props.message}
            <div>                
                <button type='button' onClick={() => setCount(count + 1)}>Like</button>
                <span>{count}</span>
            </div>
        </div>
    )
}

export default Post;