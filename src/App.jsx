import Chat from "./components/Chat/Chat";
import Details from "./components/Details/Details";
import ListChats from "./components/ListChats/ListChats";
import Login from "./components/Login/Login";

const App = () => {

  const user = false

  return (
    <div className="container">
      {
        user ? <div className="app">
          <ListChats />
          <Chat />
          <Details />
        </div>
          : <Login />
      }
    </div>
  );
};

export default App;
