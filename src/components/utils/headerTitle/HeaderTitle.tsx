import React from 'react';
import './HeaderTitle.css';

function HeaderTitle({text, total, className}: { text: string, total?: number, className?: string }) {
    return (
        <>
            <p className={`header-title ${className}`} style={{marginBlockEnd: total ? '0' : ''}}>
                {text}
            </p>

            {total &&
                <p className={`header-title total-tile ${className}`}>
                    {`Total: ${total}`}
                </p>
            }
        </>
    )
}

export default HeaderTitle