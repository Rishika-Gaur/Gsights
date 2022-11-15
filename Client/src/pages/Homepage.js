import React from "react"
import { useNavigate } from "react-router-dom"
import "./Homepage.css"
import {Outlet} from "react-router-dom"

const Homepage = ({setLoginUser}) => {
    const navigate = useNavigate()
    return (
        // <main>
        <div className="layout">
        <div className="nav">
            <div className="buttonn" onClick={() => navigate('/create')}>Fill Form</div>
            <div className="buttonn" onClick={() => navigate('/create')}>Create Form</div>
            <div className="buttonn" onClick={() => setLoginUser({})} >Logout</div>
        </div>
        <div className="placehold">
            <Outlet />
        </div>
    </div>
    // </main>
    )
}

export default Homepage