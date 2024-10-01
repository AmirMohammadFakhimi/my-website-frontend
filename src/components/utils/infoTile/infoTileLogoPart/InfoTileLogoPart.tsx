import React from "react";
import './InfoTileLogoPart.css'
import LoadableImage from "../../loadableImage/LoadableImage";

function InfoTileLogoPart({title, logoUrl, websiteUrl, className}: {
    title: string,
    logoUrl: string,
    websiteUrl: string,
    className?: string
}) {
    return (
        <a className={'tile-logo-link'} href={websiteUrl} target={'_blank'} rel='noreferrer'>
            <LoadableImage className={`tile-logo ${className}`} src={logoUrl} alt={title}/>
        </a>
    )
}

export default InfoTileLogoPart