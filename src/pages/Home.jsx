import { useContext } from 'react';
import Chat from '../components/Chat'
import Sidebar from '../components/Sidebar'
import { AuthContext } from '../context/AuthContext';

function Home(){
    const {currentUser} = useContext(AuthContext)
    return(
        <div className="home">
            <div className="container">
                <Sidebar/>
                <Chat/>
            </div>
        </div>
    );
}

export default Home;
