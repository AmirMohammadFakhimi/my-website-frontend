import React from "react";
import './InfoTileInfoPart.css'
import CustomShowMoreText from "../../customShowMoreText/CustomShowMoreText";

function InfoTileInfoPart({
                              title,
                              subtitle,
                              startDate,
                              endDate,
                              underDate,
                              descriptionHeadline,
                              description,
                              skills,
                              characterLimit,
                              websiteUrl,
                              children,
                          }: {
    title: string,
    subtitle?: string,
    startDate: Date,
    endDate?: Date | 'Present',
    underDate?: string,
    descriptionHeadline?: string | React.ReactNode,
    description?: string,
    skills?: string[],
    characterLimit?: number,
    websiteUrl?: string,
    children?: React.ReactNode,
}) {
    function getDateText(startDate: Date, endDate?: Date | 'Present') {
        if (endDate) {
            return (
                <div className={'tile-date'}>
                    {startDate.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long'
                    })} - {endDate === 'Present' ? endDate : endDate.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long'
                })}
                </div>
            )
        } else {
            return (
                <div className={'tile-date'}>
                    {startDate.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long'
                    })}
                </div>
            )
        }
    }

    return (
        <div className={'tile-info'}>
            {websiteUrl ?
                <a className={'tile-title-link'} href={websiteUrl} target={'_blank'} rel='noreferrer'>
                    {title}
                </a>
                :
                <div className={'tile-title'}>
                    {title}
                </div>
            }
            <div
                className={'tile-subtitle'}>{subtitle}</div>
            {getDateText(startDate, endDate)}
            <div
                className={'tile-under-date'}>{underDate}</div>
            <CustomShowMoreText className={'tile-description'} character={characterLimit}
                                headline={descriptionHeadline}>
                {description}
            </CustomShowMoreText>
            <div className={'tile-skills-container'}>
                {skills && <div className={'tile-skills-title'}>Skills:</div>}
                <CustomShowMoreText character={characterLimit} className={'tile-skills'}>
                    {skills?.join(', ')}
                </CustomShowMoreText>
            </div>
            {children}
        </div>
    )
}

export default InfoTileInfoPart