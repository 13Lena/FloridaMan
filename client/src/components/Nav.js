import React from "react";
import {Link} from "react-router-dom";

function Nav() {
    return(
        <nav>
            <h2>Florida Man</h2>
            <Link to="/">Main</Link>
            <Link to="/saved">Saved</Link>
        </nav>
    );
}

export default Nav;