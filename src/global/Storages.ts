const menuItemsKey = 'menu-item-id'

export function setMenuItemId(menuItem: number) {
    sessionStorage.setItem(menuItemsKey, String(menuItem))
}

export function getMenuItemId() {
    const tab = sessionStorage.getItem(menuItemsKey)
    return tab ? Number(tab) : 1
}