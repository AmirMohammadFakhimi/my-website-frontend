import React, {useEffect} from 'react';
import './Header.css';
import logo from './asset/logo.png';
import {getMenuItemUrl, setMenuItemUrl} from "../../global/Storages";
import {useNavigate} from "react-router-dom";
import {atom, useRecoilState} from "recoil";
import DesktopMenu from "./desktopMenu/DesktopMenu";
import MobileMenu from "./mobileMenu/MobileMenu";

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
                    <div id={'header-slogan'}>Laugh at Life :)</div>
                </div>
            </div>
            <DesktopMenu selectedMenuItem={selectedMenuItem} setSelectedMenuItem={setSelectedMenuItem}/>
            <MobileMenu selectedMenuItem={selectedMenuItem} setSelectedMenuItem={setSelectedMenuItem}/>
        </div>
    );
}

export default Header