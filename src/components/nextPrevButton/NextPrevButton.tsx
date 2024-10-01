import React, {useEffect, useState} from "react";
import './NextPrevButton.css'
import {useRecoilState} from "recoil";
import {selectedMenuItemState} from "../header/Header";
import {menuItems} from "../../global/Variables";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';


function NextPrevButton() {
    const [selectedMenuItem, setSelectedMenuItem] = useRecoilState(selectedMenuItemState)
    const [nextMenuItem, setNextMenuItem] =
        useState<string | undefined>(undefined)
    const [prevMenuItem, setPrevMenuItem] =
        useState<string | undefined>(undefined)

    useEffect(() => {
        const selectedMenuItemIndex =
            menuItems.findIndex(menuItem => menuItem.url === selectedMenuItem)

        if (selectedMenuItemIndex > 0)
            setPrevMenuItem(menuItems[selectedMenuItemIndex - 1].name)
        else
            setPrevMenuItem(undefined)

        if (selectedMenuItemIndex < menuItems.length - 1)
            setNextMenuItem(menuItems[selectedMenuItemIndex + 1].name)
        else
            setNextMenuItem(undefined)
    }, [selectedMenuItem])

    function handleMenuItemClick(menuItemName: string | undefined) {
        const menuItemObject =
            menuItems.find(menuItem => menuItem.name === menuItemName)
        if (menuItemObject !== undefined)
            setSelectedMenuItem(menuItemObject.url)
    }

    return (
        <div id={'next-prev-button'}>
            <div id={'prev-button'} onClick={() => handleMenuItemClick(prevMenuItem)}>
                {prevMenuItem !== undefined &&
                    <div id={'prev-button-container'}>
                        <ArrowBackIosRoundedIcon/>
                        <div id={'prev-button-text'}>
                            {prevMenuItem}
                        </div>
                    </div>
                }
            </div>
            <div id={'next-button'} onClick={() => handleMenuItemClick(nextMenuItem)}>
                {nextMenuItem !== undefined &&
                    <div id={'next-button-container'}>
                        <div id={'next-button-text'}>
                            {nextMenuItem}
                        </div>
                        <ArrowForwardIosRoundedIcon/>
                    </div>
                }
            </div>
        </div>
    )
}

export default NextPrevButton