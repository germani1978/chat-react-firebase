import './userinfo.css'

const UserInfo = () => {
    return (
        <div className='userinfo'>
            <div className="user">
                <img src="./avatar.png" alt="" />
                <p>Juan Perez</p>
            </div>
            <div className="icons">
                <img src="./more.png" alt="" />
                <img src="./video.png" alt="" />
                <img src="./edit.png" alt="" />
            </div>
        </div>
    )
}

export default UserInfo
