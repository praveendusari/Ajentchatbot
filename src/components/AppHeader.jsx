import {Box,Typography,AppBar, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';

const styles = {
    appBar:{
       bgcolor:'primary.main',
    }
}
function AppHeader() {
    const handleClick = () => {
        console.log('click');
    }
    return (
        <AppBar position="static" color="primary" enableColorOnDark>
        <Toolbar>
            <IconButton onClick={handleClick} color='secondary' aria-label="menu">
                <MenuIcon />
            </IconButton> 
        </Toolbar>
      </AppBar>
    );
}


export default AppHeader;