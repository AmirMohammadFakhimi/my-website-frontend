import React from "react";
import './CustomShowMoreText.css'
import ShowMoreText from "react-show-more-text";

function CustomShowMoreText({lines, className, children}: { lines?: number, className: string, children?: string }) {

    return (
        <ShowMoreText
            lines={lines || 2}
            className={`show-more-text ${className}`}
            anchorClass={'show-more-less-clickable'}
        >
            {children}
        </ShowMoreText>
    )
}

export default CustomShowMoreText;