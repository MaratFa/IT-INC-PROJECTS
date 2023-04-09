import s from './Post.module.css'

const Post = () => {
    return(        
        <div className={s.item}>       
            <img src='https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg' alt=''/>     
            Post 1
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}

export default Post;