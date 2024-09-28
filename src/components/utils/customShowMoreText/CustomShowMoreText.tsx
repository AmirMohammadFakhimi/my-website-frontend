import React from "react";
import './CustomShowMoreText.css'


function CustomShowMoreText({character = 200, className, headline, children}: {
    character?: number,
    className?: string,
    headline?: string,
    children?: string
}) {
    const [isShowMore, setIsShowMore] = React.useState(false)


    return (
        <div className={`custom-show-more-text ${className}`}>
            <div className={`show-more-text ${className}`}>
                {
                    headline &&
                    <div className={'show-more-text-headline'}>
                        {headline}
                        <br/>
                    </div>
                }
                {children && children.length > character ?
                    (isShowMore ? children : children.substring(0, character) + '...') :
                    children}
            </div>
            {
                children && children.length > character &&
                <div className={'show-more-less'}
                     onClick={() => setIsShowMore(!isShowMore)}>
                    {isShowMore ? 'Show less' : 'Show more'}
                </div>
            }
        </div>
    )
}

export default CustomShowMoreText;