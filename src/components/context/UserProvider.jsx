import { useState} from "react";
import UserContext from "./UserContext";

const UserProvider = ({children})=>{
    const [user, setUser] = useState({
        name: 'saikat', loggedIn: true,
    });
    return (
        <UserContext.Provider value={{user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;