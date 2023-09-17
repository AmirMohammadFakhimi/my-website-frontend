import React from "react";
import './InfoTileLogoPart.css'

function InfoTileLogoPart({title, logoUrl, websiteUrl, className}: {
    title: string,
    logoUrl: string,
    websiteUrl: string,
    className?: string
}) {
    return (
        <a className={'tile-logo-link'} href={websiteUrl} target={'_blank'} rel="noreferrer">
            <img className={`tile-logo ${className}`} src={logoUrl} alt={title}/>
        </a>
    )
}

export default InfoTileLogoPart;