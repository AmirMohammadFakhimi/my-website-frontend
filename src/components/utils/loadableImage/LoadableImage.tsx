import React from "react";
import CircularProgress from '@mui/material/CircularProgress';

function LoadableImage({className, src, alt}: { className: string, src: string, alt: string }) {
    const [isImageLoaded, setIsImageLoaded] = React.useState(false)

    return (
        <>
            <img className={className} src={src} alt={alt} onLoad={() => setIsImageLoaded(true)}
                 style={{display: isImageLoaded ? '' : 'none'}}/>
            <CircularProgress style={{display: !isImageLoaded ? '' : 'none'}}/>
        </>
    )
}

export default LoadableImage