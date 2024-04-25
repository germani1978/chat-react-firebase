import { useState } from 'react'
import './listcontacts.css'

const ListContacts = () => {

    const [showDialog, setShowDialog] = useState(false)

    return (
        <div className='listcontacts'>
            <div className="searchbar">
                <div className="bar">
                    <img src="./search.png" alt="" />
                    <input type="text" placeholder='Search' />
                </div>
                <div className="plus" onClick={() => setShowDialog(!showDialog)}>
                    <img src="./plus.png" alt="" />
                </div>
            </div>
            <div className="contacts">
                <div className='contact'>
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Juan Perez</p>
                        <span>Hace 1 min</span>
                    </div>
                </div>
                <div className='contact'>
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Juan Perez</p>
                        <span>Hace 1 min</span>
                    </div>
                </div>
                <div className='contact'>
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Juan Perez</p>
                        <span>Hace 1 min</span>
                    </div>
                </div>
                <div className='contact'>
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Juan Perez</p>
                        <span>Hace 1 min</span>
                    </div>
                </div>
            </div>
            {
                showDialog && <div className='dialog'>
                    <div className='search-box'>
                        <input type="text" placeholder='Search user' />
                        <button>Add user</button>
                    </div>

                    <div className='founduser'>
                        <div className="texts">
                            <img src="./avatar.png" alt="" />
                            <p>Juan Perez</p>
                        </div>

                        <button>Select user</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default ListContacts
