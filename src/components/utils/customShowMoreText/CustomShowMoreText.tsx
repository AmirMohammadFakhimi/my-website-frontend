import React from "react";
import './CustomShowMoreText.css'


function CustomShowMoreText({character = 200, className, headline, children}: {
    character?: number,
    className?: string,
    headline?: string | React.ReactNode,
    children?: string
}) {
    const [isShowMore, setIsShowMore] = React.useState(false)

    function parseMarkdown(text: string) {
        // convert **text** to <strong>text</strong>
        text = text.replace(/(\*\*)(.*?)\1/g, '<strong class="custom-bold">$2</strong>')

        // convert [text](url) to <a href="url">text</a>
        text = text.replace(/\[(.*?)]\((.*?)\)/g,
            '<a href="$2" target="_blank" class="custom-link" rel="noreferrer">$1</a>')

        return <span dangerouslySetInnerHTML={{__html: text}}/>
    }

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
                return <div key={key}>{parseMarkdown(item)}{getMoreLessButton()}</div>
            else
                return <div key={key}>{parseMarkdown(item)}<br/></div>
        })
    }

    function getUntilCharacterIfNotBetweenMarkdown(text: string) {
        text = text.substring(0, character)
        const boldCount = (text.match(/\*\*/g) || []).length
        const linkCount = (text.match(/\[/g) || []).length

        if (boldCount % 2 === 0 && linkCount % 2 === 0) {
            return text
        } else if (boldCount % 2 === 1 && linkCount % 2 === 0) {
            return text + '**'
        } else if (boldCount % 2 === 0 && linkCount % 2 === 1) {
            const lastLinkIndex = text.lastIndexOf('[')
            return text.substring(0, lastLinkIndex)
        } else {
            const boldIndex = text.indexOf('**')
            const lastLinkIndex = text.lastIndexOf('[')
            return text.substring(0, Math.min(boldIndex, lastLinkIndex))
        }
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
                        addDivTagToText(getUntilCharacterIfNotBetweenMarkdown(children) + '...')) :

                    children && addDivTagToText(children)
                }
            </div>
        </div>
    )
}

export default CustomShowMoreText;