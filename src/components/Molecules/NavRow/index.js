import React from "react"

import NavRowStyle from "./style"
import NavLeft from "../../Atoms/NavLeft"
import NavMiddle from "../../Atoms/NavMiddle"
import NavRight from "../../Atoms/NavRight"


const NavRow = () => {
    return(
        <NavRowStyle>
            <NavLeft/>
            <NavMiddle/>
            <NavRight/>
        </NavRowStyle>
    )
}

export default NavRow