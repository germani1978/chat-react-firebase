import ListContacts from './ListContacts/ListContacts'
import UserInfo from './UserInfo/UserInfo'
import './listchats.css'


const ListChats = () => {
    return (
        <div className='listchats'>
            <UserInfo />
            <ListContacts />
        </div>
    )
}

export default ListChats
