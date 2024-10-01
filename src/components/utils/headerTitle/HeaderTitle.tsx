import React from 'react';
import './HeaderTitle.css';

function HeaderTitle({text, className}: { text: string, className?: string }) {
    return (
        <p className={`header-title ${className}`}>
            {text}
        </p>
    )
}

export default HeaderTitle