import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';

function Test() {
    const [anchorE1m, setAnchorE1m] = useState(null);
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setAnchorE1m(null);
        setOpen(false);
    }

    const handleClick = (e) => {
        setAnchorE1m(e.currentTarget);
        setOpen(true);

    };

    return (
        <div>
            <Button variant='contained' onClick={handleClick}>Open Menu</Button>
            <Button onClick={handleClick}>Open Menu Again</Button>
            <Menu anchorE1={anchorE1m} open={open} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Balance</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    )
}

export default Test;