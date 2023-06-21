import { useCallback,useEffect,useState } from 'react';
import '/Users/XPSL34N/tde2106/src/components/pages/UserList.css';
import axios from 'axios';
const UserList = () => {
    const [userData,setUserData] = useState([])

    
    const fetchUserData = useCallback(async()=>{
        const {data}= await axios.get('https://jsonplaceholder.typicode.com/todos')
        setUserData(data)
    },[])

    useEffect(()=>{
        fetchUserData() 

    },[])
    const renderUserData = ()=>{
        return(
            <div>
                <h3>dados do parceiro </h3>
                { userData.map(user=>(
                    <div>
                        <h4>{user.title}</h4>

                    </div>
                ))}
            </div>
        )
    }

    return (
        <div>
            <h2>lista</h2>
            {renderUserData()}
        </div>
        
    );
}

export default UserList;
