import React, {useEffect, useState} from 'react';
import './WorkExperiences';
import InfoTile from "../../../utils/infoTile/InfoTile";
import Divider from "../../../utils/divider/Divider";
import {MediaType} from "../../../../global/Types";
import MediaTile from "../../../utils/MediaTile/MediaTile";
import {getWorkExperiences} from "../../../../global/ApiCalls";
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

function WorkExperiences() {
    type WorkExperiencesType = {
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

    type WorkExperiencesResponseType = {
        work_experiences: {
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

    const [workExperiences, setWorkExperiences] = useState<WorkExperiencesType>([])

    function convertWorkExperiencesResponse(response: WorkExperiencesResponseType): WorkExperiencesType {
        const currentWorkExperiences = response.work_experiences
        const newWorkExperiences: WorkExperiencesType = []

        currentWorkExperiences.forEach(workExperience => {
            newWorkExperiences.push({
                title: workExperience.title,
                employmentType: workExperience.employment_type,
                company: workExperience.company,
                location: workExperience.location,
                locationType: workExperience.location_type,
                startDate: new Date(workExperience.start_date),
                endDate: workExperience.end_date === 'Present' ? 'Present' : new Date(workExperience.end_date),
                description: workExperience.description,
                skills: workExperience.skills,
                logoUrl: workExperience.logo_url,
                websiteUrl: workExperience.website_url,
                certificateUrl: workExperience.certificate_url,
                originalCertificateUrl: workExperience.original_certificate_url,
                medias: workExperience.medias
            })
        })

        return newWorkExperiences
    }

    useEffect(() => {
        getWorkExperiences()
            .then(
                response =>
                    onAxiosSuccess({
                        res: response,
                        onSuccess: () => setWorkExperiences(convertWorkExperiencesResponse(response.data))
                    }),
                error =>
                    onAxiosError({axiosError: error})
            )
    }, [])


    return (
        <div>
            {workExperiences.map((experience, index) => (
                <>
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
                    <Divider index={index} allCount={workExperiences.length}/>
                </>
            ))}
        </div>
    );
}

export default WorkExperiences