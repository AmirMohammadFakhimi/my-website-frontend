import React from "react";
import './CustomShowMoreText.css'


function CustomShowMoreText({character = 200, className, headline, children}: {
    character?: number,
    className?: string,
    headline?: string,
    children?: string
}) {
    const [isShowMore, setIsShowMore] = React.useState(false)

    function getMoreLessButton() {
        return children && children.length > character &&
            <div className={'show-more-less'}
                 onClick={() => setIsShowMore(!isShowMore)}>
                {isShowMore ? 'Show less' : 'Show more'}
            </div>
    }

    function addDivTagToText(text: string) {
        const elements = text.split('\n')
        const elementsLength = elements.length

        return elements.map((item, key) => {
            if (key === elementsLength - 1)
                return <div key={key}>{item}{getMoreLessButton()}</div>
            else
                return <div key={key}>{item}<br/></div>
        })
    }


    return (
        <div className={`custom-show-more-text ${className}`}>
            <div className={`show-more-text ${className}`}>
                {headline &&
                    <div className={'show-more-text-headline'}>
                        {headline}
                        <br/>
                    </div>
                }
                {children && children.length > character ?
                    (isShowMore ?
                        addDivTagToText(children)
                        :
                        addDivTagToText(children.substring(0, character) + '...')) :
                    children
                }
            </div>
        </div>
    )
}

export default CustomShowMoreText;