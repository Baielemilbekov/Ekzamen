import './App.css';
import ToDo from "./componenty/To-Do";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [user, setUser] = useState([]);
    useEffect(() => {
        axios.get("https://64340de21c5ed06c958dd2da.mockapi.io/:endpoint")
            .then((data) => setUser(data))
    }, [])
    return (
        <div className="App">
            <ToDo  users={user}/>
        </div>
    );
}

export default App;
