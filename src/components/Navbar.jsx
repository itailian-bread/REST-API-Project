import React from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Navbar(){
    return(
        <div className="navbar">
            <h4 className="heading">Where in the world?</h4>
            <button type="button" className="btn btn-link"><DarkModeIcon fontSize="small" />Dark Mode</button>
        </div>
    )
}

export default Navbar;