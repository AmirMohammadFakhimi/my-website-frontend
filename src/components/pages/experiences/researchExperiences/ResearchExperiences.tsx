import React, {Fragment, useEffect, useState} from "react";
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
        researchExperienceNames: string[],
        researchExperienceUrls: string[]
    }[]

    type ResearchExperiencesResponseType = {
        research_experiences: {
            title: string,
            employment_type: EmploymentType,
            company: string,
            location: string,
            location_type: LocationType,
            start_date: Date,
            end_date: Date | 'Present',
            description?: string,
            supervisors: string[],
            logo_url: string,
            website_url: string,
            research_experience_names: string[],
            research_experience_urls: string[]
        }[]
    }

    const [researchExperiences, setResearchExperiences] = useState<ResearchExperiencesType>([])

    function convertResearchExperiencesResponse(response: ResearchExperiencesResponseType): ResearchExperiencesType {
        const currentResearchExperiences = response.research_experiences
        const newResearchExperiences: ResearchExperiencesType = []

        currentResearchExperiences.forEach(researchExperience => {
            newResearchExperiences.push({
                title: researchExperience.title,
                employmentType: researchExperience.employment_type,
                company: researchExperience.company,
                location: researchExperience.location,
                locationType: researchExperience.location_type,
                startDate: new Date(researchExperience.start_date),
                endDate: researchExperience.end_date === 'Present' ? 'Present' : new Date(researchExperience.end_date),
                description: researchExperience.description,
                supervisors: researchExperience.supervisors,
                logoUrl: researchExperience.logo_url,
                websiteUrl: researchExperience.website_url,
                researchExperienceNames: researchExperience.research_experience_names,
                researchExperienceUrls: researchExperience.research_experience_urls
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
        if (!researchExperience || !researchExperience.researchExperienceNames || !researchExperience.researchExperienceUrls ||
            researchExperience.researchExperienceNames.length !== researchExperience.researchExperienceUrls.length) {
            console.log(researchExperience.researchExperienceNames.length !== researchExperience.researchExperienceUrls.length)
            return undefined
        }

        return <>
            {researchExperience.supervisors.length === 1 ? 'Supervisor:' : 'Supervisors:'}
            <ul className={'research-experience-supervisors'}>
                {researchExperience.supervisors.map((supervisor, index) => (
                    <li key={index} className={'research-experience-supervisor'}>
                        {supervisor}&nbsp;
                        <a className={'research-experience-link'}
                           href={researchExperience.researchExperienceUrls[index]}
                           target={'_blank'}
                           rel='noreferrer'>
                            ({researchExperience.researchExperienceNames[index]})
                        </a>
                    </li>
                ))}
            </ul>
        </>
    }

    return (
        <div>
            {researchExperiences.map((researchExperience, index) => (
                <Fragment key={index}>
                    <InfoTile index={index} title={researchExperience.title}
                              subtitle={`${researchExperience.company} • ${researchExperience.employmentType}`}
                              startDate={researchExperience.startDate} endDate={researchExperience.endDate}
                              underDate={`${researchExperience.location} • ${researchExperience.locationType}`}
                              descriptionHeadline={getDescriptionHeadline(researchExperience)}
                              description={researchExperience.description}
                              logoUrl={researchExperience.logoUrl} websiteUrl={researchExperience.websiteUrl}/>
                    <Divider index={index} allCount={researchExperiences.length}/>
                </Fragment>
            ))}
        </div>
    )
}

export default ResearchExperiences