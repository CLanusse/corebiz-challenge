import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { ProfileWidget } from '../ProfileWidget/ProfileWidget';
import mobileIcon from '../../../assets/mobile-menu.svg'
import './MobileMenu.scss'

export const MobileMenu = () =>{
  const [state, setState] = useState(false)

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open);
  };

  return (
    <>
        <button onClick={toggleDrawer(true)} className="mobile-btn">
            <img src={mobileIcon} alt="menu-icon"/>
        </button>
        <Drawer
            anchor={'left'}
            open={state}
            onClose={toggleDrawer(false)}
        >
            <Box
                sx={{ width: 250, padding: '2rem 0' }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                <List>
                    <ProfileWidget style={{display: 'block'}}/>
                </List>
                <Divider />
            </Box>
        </Drawer>
    </>
  );
}