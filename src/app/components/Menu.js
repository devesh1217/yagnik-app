"use client";

import React, { useState } from 'react'
import { Drawer } from '@mui/material'

function Menu() {
    const [open, setOpne] = useState();
    return (
        <Drawer open={open} onClose={()=>setOpne(false)}>
            { }
        </Drawer>
    )
}

export default Menu