import {urls} from "./Variables";

const menuItemsKey = 'menu-item-id'

export function setMenuItemUrl(menuItem: string) {
    sessionStorage.setItem(menuItemsKey, menuItem)
}

export function getMenuItemUrl() {
    const currentUrl = window.location.pathname
    let lastUrlSection: string | undefined = undefined
    if (currentUrl && currentUrl.endsWith('/')) {
        const urlSections = currentUrl.split('/')
        lastUrlSection = urlSections[urlSections.length - 2]
    } else if (currentUrl) {
        lastUrlSection = currentUrl.split('/').pop()
    }

    const menuItem = sessionStorage.getItem(menuItemsKey)

    if (lastUrlSection && lastUrlSection !== '' && Object.values(urls).includes(lastUrlSection))
        return lastUrlSection
    else if (menuItem && menuItem !== '')
        return menuItem
    else
        return urls.aboutMe
}