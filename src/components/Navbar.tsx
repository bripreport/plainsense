import { useNavigate } from "react-router";
import {FaHome,FaUniversalAccess} from "react-icons/fa";
import "../styles/navbar.css";



export default function Navbar(){
    const nav = useNavigate();

    return(
        <div className="bottom-navbar">

        <div id="home">
            <button onClick={() => nav("/")}>
                <FaHome/>
            </button>
        </div>

        <div id="settings">
            <button onClick={() => nav("/settings")}>
                <FaUniversalAccess/>
            </button>
        </div>
    </div>

    );
}