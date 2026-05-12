import { useNavigate } from "react-router";
import {FaHome} from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
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
                <IoMdSettings/>
            </button>
        </div>
    </div>

    );
}