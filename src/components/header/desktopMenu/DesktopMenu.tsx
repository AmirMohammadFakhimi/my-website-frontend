import React from "react";
import './DesktopMenu.css'
import {menuItems} from "../../../global/Variables";


function DesktopMenu({selectedMenuItem, setSelectedMenuItem}: {
    selectedMenuItem: string,
    setSelectedMenuItem: Function
}) {
    return (
        <ul id={'desktop-menu'}>
            {menuItems.map(menuItem => {
                return <li key={menuItem.id} id={menuItem.id === menuItems.length ? 'contact-me-header' : ''}
                           className={'desktop-menu-item ' + (selectedMenuItem === menuItem.url ? 'desktop-menu-item-selected' : '')}
                           onClick={() => setSelectedMenuItem(menuItem.url)}>
                    {menuItem.name}
                </li>
            })}
        </ul>
    )
}

export default DesktopMenu;