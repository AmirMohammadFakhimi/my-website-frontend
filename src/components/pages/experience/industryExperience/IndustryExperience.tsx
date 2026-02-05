import React, {Fragment, useEffect, useState} from 'react';
import './IndustryExperience';
import InfoTile from "../../../utils/infoTile/InfoTile";
import Divider from "../../../utils/divider/Divider";
import {MediaType} from "../../../../global/Types";
import MediaTile from "../../../utils/MediaTile/MediaTile";
import {getIndustryExperience} from "../../../../global/ApiCalls";
import {onAxiosError, onAxiosSuccess} from "../../../../global/Errors";

export type EmploymentType =
        'Full-time'
        | 'Part-time'
        | 'Self-employed'
        | 'Freelance'
        | 'Contract'
        | 'Internship'
        | 'Apprenticeship'
        | 'Seasonal'

export type LocationType = 'On-site' | 'Hybrid' | 'Remote'

function IndustryExperience() {
    type IndustryExperienceType = {
        title: string,
        employmentType: EmploymentType,
        company: string,
        location: string,
        locationType: LocationType,
        startDate: Date,
        endDate: Date | 'Present',
        description: string,
        skills: string[],
        logoUrl: string,
        websiteUrl: string,
        certificateUrl?: string,
        originalCertificateUrl?: string,
        medias: MediaType[]
    }[]

    type IndustryExperienceResponseType = {
        industry_experience: {
            title: string,
            employment_type: EmploymentType,
            company: string,
            location: string,
            location_type: LocationType,
            start_date: Date,
            end_date: Date | 'Present',
            description: string,
            skills: string[],
            logo_url: string,
            website_url: string,
            certificate_url?: string,
            original_certificate_url?: string,
            medias: MediaType[]
        }[]
    }

    const [industryExperience, setIndustryExperience] = useState<IndustryExperienceType>([])

    function convertIndustryExperienceResponse(response: IndustryExperienceResponseType): IndustryExperienceType {
        const currentIndustryExperience = response.work_experiences
        const newIndustryExperience: IndustryExperienceType = []

        currentIndustryExperience.forEach(industryExperience => {
            newIndustryExperience.push({
                title: industryExperience.title,
                employmentType: industryExperience.employment_type,
                company: industryExperience.company,
                location: industryExperience.location,
                locationType: industryExperience.location_type,
                startDate: new Date(industryExperience.start_date),
                endDate: industryExperience.end_date === 'Present' ? 'Present' : new Date(industryExperience.end_date),
                description: industryExperience.description,
                skills: industryExperience.skills,
                logoUrl: industryExperience.logo_url,
                websiteUrl: industryExperience.website_url,
                certificateUrl: industryExperience.certificate_url,
                originalCertificateUrl: industryExperience.original_certificate_url,
                medias: industryExperience.medias
            })
        })

        return newIndustryExperience
    }

    useEffect(() => {
        getIndustryExperience()
            .then(
                response =>
                    onAxiosSuccess({
                        res: response,
                        onSuccess: () => setIndustryExperience(convertIndustryExperienceResponse(response.data))
                    }),
                error =>
                    onAxiosError({axiosError: error})
            )
    }, [])


    return (
        <div>
            {industryExperience.map((experience, index) => (
                <Fragment key={index}>
                    <InfoTile index={index} title={experience.title}
                              subtitle={`${experience.company} • ${experience.employmentType}`}
                              startDate={experience.startDate} endDate={experience.endDate}
                              underDate={`${experience.location} • ${experience.locationType}`}
                              description={experience.description}
                              skills={experience.skills} logoUrl={experience.logoUrl}
                              websiteUrl={experience.websiteUrl}
                              imageUrl={experience.certificateUrl}
                              imageRedirectUrl={experience.originalCertificateUrl}>
                        <MediaTile medias={experience.medias}/>
                    </InfoTile>
                    <Divider index={index} allCount={industryExperience.length}/>
                </Fragment>
            ))}
        </div>
    );
}

export default IndustryExperience