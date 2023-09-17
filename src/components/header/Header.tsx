import React, {useEffect, useState} from 'react';
import './Header.css';
import logo from './asset/logo.png';
import {urls} from "../../global/Variables";
import {getMenuItemUrl, setMenuItemUrl} from "../../global/Storages";
import {useNavigate} from "react-router-dom";

function Header() {
    const menuItems: {
        id: number,
        name: string,
        url: string
    }[] = [
        {id: 1, name: 'About Me', url: urls.aboutMe},
        {id: 2, name: 'Educations', url: urls.educations},
        {id: 3, name: 'Experiences', url: urls.experiences},
        {id: 4, name: 'Volunteering', url: urls.volunteering},
        {id: 5, name: 'Projects', url: urls.projects},
        {id: 6, name: 'Courses', url: urls.courses},
        {id: 7, name: 'Licenses & certifications', url: urls.licenses},
        {id: 8, name: 'Contact Me', url: urls.contactMe}
    ]

    const navigate = useNavigate()
    const [selectedMenuItem, setSelectedMenuItem] = useState(getMenuItemUrl())

    useEffect(() => {
        setMenuItemUrl(selectedMenuItem)
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
                               onClick={() => {
                                   setSelectedMenuItem(menuItem.url);
                                   navigate(menuItem.url)
                               }}>
                        {menuItem.name}
                    </li>
                })}
            </ul>
        </div>
    );
}

export default Header;