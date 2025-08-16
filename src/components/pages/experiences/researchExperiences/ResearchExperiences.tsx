import React, {useEffect, useState} from "react";
import './ResearchExperiences.css'
import {getResearchExperiences} from "../../../../global/ApiCalls";
import {onAxiosError, onAxiosSuccess} from "../../../../global/Errors";
import InfoTile from "../../../utils/infoTile/InfoTile";
import Divider from "../../../utils/divider/Divider";
import {EmploymentType, LocationType} from "../workExperiences/WorkExperiences";

function ResearchExperiences() {
    type ResearchExperiencesType = {
        title: string,
        employmentType: EmploymentType,
        company: string,
        location: string,
        locationType: LocationType,
        startDate: Date,
        endDate: Date | 'Present',
        description?: string,
        supervisors: string[],
        logoUrl: string,
        websiteUrl: string,
        researchExperiencesNames: string[],
        researchExperiencesUrls: string[]
    }[]

    type ResearchExperiencesResponseType = {
        research_experiences: {
            title: string,
            employmentType: EmploymentType,
            company: string,
            location: string,
            locationType: LocationType,
            start_date: Date,
            end_date: Date | 'Present',
            description?: string,
            supervisors: string[],
            logo_url: string,
            website_url: string,
            research_experiences_names: string[],
            research_experiences_urls: string[]
        }[]
    }

    const [researchExperiences, setResearchExperiences] = useState<ResearchExperiencesType>([])

    function convertResearchExperiencesResponse(response: ResearchExperiencesResponseType): ResearchExperiencesType {
        const currentResearchExperiences = response.research_experiences
        const newResearchExperiences: ResearchExperiencesType = []

        currentResearchExperiences.forEach(researchExperience => {
            newResearchExperiences.push({
                title: researchExperience.title,
                employmentType: researchExperience.employmentType,
                company: researchExperience.company,
                location: researchExperience.location,
                locationType: researchExperience.locationType,
                startDate: new Date(researchExperience.start_date),
                endDate: researchExperience.end_date === 'Present' ? 'Present' : new Date(researchExperience.end_date),
                description: researchExperience.description,
                supervisors: researchExperience.supervisors,
                logoUrl: researchExperience.logo_url,
                websiteUrl: researchExperience.website_url,
                researchExperiencesNames: researchExperience.research_experiences_names,
                researchExperiencesUrls: researchExperience.research_experiences_urls
            })
        })

        return newResearchExperiences
    }

    useEffect(() => {
        getResearchExperiences()
            .then(
                response =>
                    onAxiosSuccess({
                        res: response, onSuccess: () =>
                            setResearchExperiences(convertResearchExperiencesResponse(response.data))
                    }),
                error =>
                    onAxiosError({axiosError: error})
            )
    }, [])

    function getDescriptionHeadline(researchExperience: ResearchExperiencesType[0]) {
        if (!researchExperience || !researchExperience.researchExperiencesNames || !researchExperience.researchExperiencesUrls ||
            researchExperience.researchExperiencesNames.length !== researchExperience.researchExperiencesUrls.length) {
            return undefined
        }

        return <>
            {researchExperience.supervisors.length === 1 ? 'Supervisor:' : 'Supervisors:'}
            <ul className={'research-experience-supervisors'}>
                {researchExperience.supervisors.map((supervisor, index) => (
                    <li className={'research-experience-supervisor'}>
                        {supervisor}&nbsp;
                        <a className={'research-experience-link'}
                           href={researchExperience.researchExperiencesUrls[index]}
                           target={'_blank'}
                           rel='noreferrer'>
                            ({researchExperience.researchExperiencesNames[index]})
                        </a>
                    </li>
                ))}
            </ul>
        </>
    }

    return (
        <div>
            {researchExperiences.map((researchExperience, index) => (
                <>
                    <InfoTile index={index} title={researchExperience.title}
                              subtitle={`${researchExperience.company} • ${researchExperience.employmentType}`}
                              startDate={researchExperience.startDate} endDate={researchExperience.endDate}
                              underDate={`${researchExperience.location} • ${researchExperience.locationType}`}
                              descriptionHeadline={getDescriptionHeadline(researchExperience)}
                              description={researchExperience.description}
                              logoUrl={researchExperience.logoUrl} websiteUrl={researchExperience.websiteUrl}/>
                    <Divider index={index} allCount={researchExperiences.length}/>
                </>
            ))}
        </div>
    )
}

export default ResearchExperiences