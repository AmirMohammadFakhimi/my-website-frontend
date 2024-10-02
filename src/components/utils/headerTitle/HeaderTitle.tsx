import React from 'react';
import './HeaderTitle.css';

function HeaderTitle({text, total, className}: { text: string, total?: number, className?: string }) {
    const isTotalProvided = total !== undefined

    return (
        <>
            <p className={`header-title ${className}`} style={{marginBlockEnd: isTotalProvided ? '0' : ''}}>
                {text}
            </p>

            {isTotalProvided &&
                <p className={`header-title total-tile`}>
                    {`Total: ${total}`}
                </p>
            }
        </>
    )
}

export default HeaderTitle