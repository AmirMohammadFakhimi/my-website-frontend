import React from "react";
import "./InfoTile.css";
import InfoTileInfoPart from "./infoTileInfoPart/InfoTileInfoPart";
import InfoTileLogoPart from "./infoTileLogoPart/InfoTileLogoPart";


function InfoTile({
                      index,
                      title,
                      subtitle,
                      startDate,
                      endDate,
                      underDate,
                      description,
                      skills,
                      logoUrl,
                      websiteUrl,
                      imageUrl,
                      imageRedirectUrl = websiteUrl,
                      children,
                      isFullWidth = false,
                      isAddTopPadding = false,
                  }: {
    index: number,
    title: string,
    subtitle: string,
    startDate: Date,
    endDate?: Date | 'Present',
    underDate?: string,
    description?: string,
    skills?: string[],
    logoUrl: string,
    websiteUrl: string,
    imageUrl?: string,
    imageRedirectUrl?: string,
    children?: React.ReactNode,
    isFullWidth?: boolean,
    isAddTopPadding?: boolean,
}) {
    return (
        <div key={index} className={'tile-container'} style={{paddingTop: isAddTopPadding ? '30px' : '0'}}>
            <div className={'tile-container-except-image'} style={{width: isFullWidth ? '100%' : '50%'}}>
                <InfoTileLogoPart title={title} logoUrl={logoUrl} websiteUrl={websiteUrl}/>
                <InfoTileInfoPart title={title} subtitle={subtitle} startDate={startDate} endDate={endDate}
                                  underDate={underDate} description={description} skills={skills} websiteUrl={websiteUrl}>
                    {children}
                </InfoTileInfoPart>
            </div>
            {
                imageUrl &&
                <a className={'tile-image-link'} href={imageRedirectUrl} target={'_blank'} rel="noreferrer">
                    <img className={'tile-image'} src={imageUrl} alt={'Certificate'}/>
                </a>
            }

        </div>
    )
}

export default InfoTile;