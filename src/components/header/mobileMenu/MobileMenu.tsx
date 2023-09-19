import React, {useState} from "react";
import './MobileMenu.css'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {menuItems} from "../../../global/Variables";
import {ArrElement} from "../../../global/Types";


function MobileMenu({selectedMenuItem, setSelectedMenuItem}: {
    selectedMenuItem: string,
    setSelectedMenuItem: Function
}) {
    const [anchorEl, setAnchorEl] =
        useState<HTMLElement | undefined>(undefined);

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (option: ArrElement<typeof menuItems> | undefined) => () => {
        setAnchorEl(undefined);

        if (option)
            setSelectedMenuItem(option.url)
    }

    return (
        <div id={'mobile-menu'}>
            <IconButton
                aria-label={'more'}
                id={'mobile-menu-button'}
                aria-controls={open ? 'menu-popup' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup={'true'}
                onClick={handleClick}
            >
                {
                    open ? <CloseRoundedIcon id={'mobile-menu-icon'}/> :
                        <MenuRoundedIcon id={'mobile-menu-icon'}/>
                }
            </IconButton>
            <Menu
                id={'menu-popup'}
                MenuListProps={{
                    'aria-labelledby': 'mobile-menu-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose(undefined)}
                sx={{
                    maxHeight: '70%',
                    '& .MuiMenu-paper': {
                        backgroundColor: 'rgba(44,44,44,0.7)',
                        backdropFilter: 'blur(10px)',
                        elevation: 100,
                        boxShadow: '0 0 20px -5px #fff',
                        borderRadius: '10px',
                        color: '#fff'
                    },
                }}
            >
                {menuItems.map((option) => (
                    <MenuItem key={option.id} selected={option.url === selectedMenuItem} onClick={handleClose(option)}
                              sx={{
                                  font: '700 1.1rem Kalam, sans-serif',
                                  '&:hover': {
                                      backgroundColor: 'rgba(44, 44, 44,0.9)',
                                  },
                                  '&.Mui-selected': {
                                      backgroundColor: 'rgba(97,128,251,0.66)',
                                  }
                              }}>
                        {option.name}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    )
}

export default MobileMenu