import React from "react";
import './InfoTileInfoPart.css'
import CustomShowMoreText from "../../customShowMoreText/CustomShowMoreText";

function InfoTileInfoPart({
                              title,
                              subtitle,
                              startDate,
                              endDate,
                              underDate,
                              description,
                              skills,
                              websiteUrl,
                              children,
                          }: {
    title: string,
    subtitle?: string,
    startDate: Date,
    endDate?: Date | 'Present',
    underDate?: string,
    description?: string,
    skills?: string[],
    websiteUrl: string,
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
            <a className={'tile-title'} href={websiteUrl} target={'_blank'} rel="noreferrer">
                {title}
            </a>
            <div
                className={'tile-subtitle'}>{subtitle}</div>
            {getDateText(startDate, endDate)}
            <div
                className={'tile-under-date'}>{underDate}</div>
            <CustomShowMoreText className={'tile-description'}>
                {description}
            </CustomShowMoreText>
            <div className={'tile-skills-container'}>
                {skills && <div className={'tile-skills-title'}>Skills:</div>}
                <CustomShowMoreText className={'tile-skills'}>
                    {skills?.join(', ')}
                </CustomShowMoreText>
            </div>
            {children}
        </div>
    )
}

export default InfoTileInfoPart;