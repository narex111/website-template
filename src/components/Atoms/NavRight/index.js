import React from "react"

import NavRightStyle from "./style"
import routes from "../../../constants/routes"

const NavRight = () => {
    return(
        <NavRightStyle>{routes.map(route => <li>{route}</li>)}</NavRightStyle>
    )
}

export default NavRight