import {urls} from "./Variables";

const menuItemsKey = 'menu-item-id'

export function setMenuItemUrl(menuItem: string) {
    sessionStorage.setItem(menuItemsKey, menuItem)
}

export function getMenuItemUrl() {
    const menuItem = sessionStorage.getItem(menuItemsKey)
    return menuItem ? menuItem : urls.aboutMe
}