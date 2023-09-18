import React, {useEffect} from 'react';
import './Header.css';
import logo from './asset/logo.png';
import {menuItems} from "../../global/Variables";
import {getMenuItemUrl, setMenuItemUrl} from "../../global/Storages";
import {useNavigate} from "react-router-dom";
import {atom, useRecoilState} from "recoil";

export const selectedMenuItemState = atom({
    key: 'selectedMenuItemState',
    default: getMenuItemUrl()
})

function Header() {
    const navigate = useNavigate()
    const [selectedMenuItem, setSelectedMenuItem] = useRecoilState(selectedMenuItemState)

    useEffect(() => {
        setMenuItemUrl(selectedMenuItem)
        navigate(selectedMenuItem)
    }, [selectedMenuItem])

    return (
        <div id={'header'}>
            <div id={'header-left'}>
                <img id={'header-logo'} src={logo} alt={'logo containing a single A character.'}/>
                <div id={'name-slogan'}>
                    <div id={'header-name'}>Amir Mohammad Fakhimi</div>
                    <div id={'header-slogan'}>Laugh to Life :)</div>
                </div>
            </div>
            <ul id={'menu'}>
                {menuItems.map(menuItem => {
                    return <li key={menuItem.id} id={menuItem.id === 8 ? 'contact-me-header' : ''}
                               className={'menu-item ' + (selectedMenuItem === menuItem.url ? 'menu-item-selected' : '')}
                               onClick={() => setSelectedMenuItem(menuItem.url)}>
                        {menuItem.name}
                    </li>
                })}
            </ul>
        </div>
    );
}

export default Header;