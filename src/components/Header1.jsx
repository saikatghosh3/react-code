import React,{useContext} from "react";
import UserContext from "./context/UserContext";

const Header1= ()=>{
    const {user} = useContext(UserContext);
    return (
        <header style={{padding: '10px', backgroundColor: "#eee"}}>
            {user.loggedIn
            ? <h2>Welome, {user.name}</h2>
        :<h2> Please log in </h2>}
        </header>
    )
}

export default Header1;