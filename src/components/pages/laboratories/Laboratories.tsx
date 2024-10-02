import React, {useEffect, useState} from "react";
import './Laboratories.css'
import {getLaboratories} from "../../../global/ApiCalls";
import {onAxiosError, onAxiosSuccess} from "../../../global/Errors";
import HeaderTitle from "../../utils/headerTitle/HeaderTitle";
import InfoTile from "../../utils/infoTile/InfoTile";
import Divider from "../../utils/divider/Divider";

function Laboratories({header}: { header: string }) {
    type LaboratoriesType = {
        title: string,
        company: string,
        startDate: Date,
        endDate: Date | 'Present',
        description?: string,
        supervisors: string[],
        logoUrl: string,
        websiteUrl: string,
        laboratoriesNames: string[],
        laboratoriesUrls: string[]
    }[]

    type LaboratoriesResponseType = {
        laboratories: {
            title: string,
            company: string,
            start_date: Date,
            end_date: Date | 'Present',
            description?: string,
            supervisors: string[],
            logo_url: string,
            website_url: string,
            laboratories_names: string[],
            laboratories_urls: string[]
        }[]
    }

    const [laboratories, setLaboratories] = useState<LaboratoriesType>([])

    function convertLaboratoriesResponse(response: LaboratoriesResponseType): LaboratoriesType {
        const currentLaboratories = response.laboratories
        const newLaboratories: LaboratoriesType = []

        currentLaboratories.forEach(laboratory => {
            newLaboratories.push({
                title: laboratory.title,
                company: laboratory.company,
                startDate: new Date(laboratory.start_date),
                endDate: laboratory.end_date === 'Present' ? 'Present' : new Date(laboratory.end_date),
                description: laboratory.description,
                supervisors: laboratory.supervisors,
                logoUrl: laboratory.logo_url,
                websiteUrl: laboratory.website_url,
                laboratoriesNames: laboratory.laboratories_names,
                laboratoriesUrls: laboratory.laboratories_urls
            })
        })

        return newLaboratories
    }

    useEffect(() => {
        getLaboratories()
            .then(
                response =>
                    onAxiosSuccess({
                        res: response, onSuccess: () =>
                            setLaboratories(convertLaboratoriesResponse(response.data))
                    }),
                error =>
                    onAxiosError({axiosError: error})
            )
    }, [])

    function getDescriptionHeadline(laboratory: LaboratoriesType[0]) {
        if (!laboratory || !laboratory.laboratoriesNames || !laboratory.laboratoriesUrls ||
            laboratory.laboratoriesNames.length !== laboratory.laboratoriesUrls.length) {
            return undefined
        }

        return <>
            {laboratory.supervisors.length === 1 ? 'Supervisor:' : 'Supervisors:'}
            <ul className={'laboratory-supervisors'}>
                {laboratory.supervisors.map((supervisor, index) => (
                    <li className={'laboratory-supervisor'}>
                        {supervisor}&nbsp;
                        <a className={'laboratory-link'} href={laboratory.laboratoriesUrls[index]} target={'_blank'}
                           rel='noreferrer'>
                            ({laboratory.laboratoriesNames[index]})
                        </a>
                    </li>
                ))}
            </ul>
        </>
    }

    return (
        <div id={'experiences'}>
            <HeaderTitle text={header}/>
            <div className={'experiences-container'}>
                {laboratories.map((laboratory, index) => (
                    <>
                        <InfoTile index={index} title={laboratory.title} subtitle={laboratory.company}
                                  startDate={laboratory.startDate} endDate={laboratory.endDate}
                                  descriptionHeadline={getDescriptionHeadline(laboratory)}
                                  description={laboratory.description}
                                  logoUrl={laboratory.logoUrl} websiteUrl={laboratory.websiteUrl}/>
                        <Divider index={index} allCount={laboratories.length}/>
                    </>
                ))}
            </div>
        </div>
    )
}

export default Laboratories