import s from './Profile.module.css'

const Profile = () => {
    return(
        <div className={s.content}>
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
                <div className={s.posts}>
                    <div className={s.item}>             
                        Post 1
                    </div>
                    <div className={s.item}>
                        Post 2
                    </div>
                </div>
            </div>        
        </div>
    )
}

export default Profile;