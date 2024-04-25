import './details.css'

const Details = () => {
    return (
        <div className='details'>
            <div className="user">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <p>Juan perez</p>
                    <span>Con Dios todo</span>
                </div>
            </div>

            <div className="center"></div>

            <div className="buttons">
                <button className='block'>Block User</button>
                <button className='logout'>Logout</button>
            </div>
        </div>
    )
}

export default Details
