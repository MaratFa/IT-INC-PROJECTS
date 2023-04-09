import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

const Profile = () => {
    return(
        <div className={s.content}>
            <div>
                <img src='https://crescensinc.com/wp-content/uploads/2018/05/Happy-People1-1.jpg' alt=''/>
            </div>
            <div>                    
                Avatar + Description
            </div>
            <MyPosts />   
        </div>
    )
}

export default Profile;