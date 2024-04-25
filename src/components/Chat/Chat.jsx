import './chat.css'

const Chat = () => {
    return (
        <div className='chat'>

            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Juan perez</p>
                        <span>Con Dios todo</span>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div>

            <div className="center">

                <div className="message">
                    <div className="text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repellat ea tempore animi alias ipsa?</p>
                        <span>hace 1 min</span>
                    </div>

                    <div className="img">
                        <img src="/mayi.png" alt="" />
                    </div>
                </div>

                <div className="message own">
                    <div className="text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repellat ea tempore animi alias ipsa?</p>
                        <span>hace 1 min</span>
                    </div>

                    <div className="img">
                        <img src="/mayi.png" alt="" />
                    </div>
                </div>

                <div className="message">
                    <div className="text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repellat ea tempore animi alias ipsa?</p>
                        <span>hace 1 min</span>
                    </div>

                    <div className="img">
                        <img src="/mayi.png" alt="" />
                    </div>
                </div>

            </div>

            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>

                <input type="text" placeholder='Type a messge' />

                <img src="./emoji.png" alt="" />

                <button>Send</button>
            </div>



        </div>
    )
}

export default Chat
