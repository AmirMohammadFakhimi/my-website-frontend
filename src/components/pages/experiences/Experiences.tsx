import React, {useEffect, useState} from 'react';
import './Experiences.css';
import HeaderTitle from "../../utils/headerTitle/HeaderTitle";
import InfoTile from "../../utils/infoTile/InfoTile";
import Divider from "../../utils/divider/Divider";
import {MediaType} from "../../../global/Types";
import MediaTile from "../../utils/MediaTile/MediaTile";
import {getExperiences} from "../../../global/ApiCalls";
import {onAxiosError, onAxiosSuccess} from "../../../global/Errors";

function Experiences({header}: { header: string }) {
    type EmploymentType =
        'Full-time'
        | 'Part-time'
        | 'Self-employed'
        | 'Freelance'
        | 'Contract'
        | 'Internship'
        | 'Apprenticeship'
        | 'Seasonal'

    type LocationType = 'On-site' | 'Hybrid' | 'Remote'

    type ExperiencesType = {
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

    type ExperiencesResponseType = {
        experiences: {
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

    const [experiences, setExperiences] = useState<ExperiencesType>([])

    function convertExperiencesResponse(response: ExperiencesResponseType): ExperiencesType {
        const currentExperiences = response.experiences
        const newExperiences: ExperiencesType = []

        currentExperiences.forEach(experience => {
            newExperiences.push({
                title: experience.title,
                employmentType: experience.employment_type,
                company: experience.company,
                location: experience.location,
                locationType: experience.location_type,
                startDate: new Date(experience.start_date),
                endDate: experience.end_date === 'Present' ? 'Present' : new Date(experience.end_date),
                description: experience.description,
                skills: experience.skills,
                logoUrl: experience.logo_url,
                websiteUrl: experience.website_url,
                certificateUrl: experience.certificate_url,
                originalCertificateUrl: experience.original_certificate_url,
                medias: experience.medias
            })
        })

        return newExperiences
    }

    useEffect(() => {
        getExperiences()
            .then(
                response =>
                    onAxiosSuccess({
                        res: response, onSuccess: () => setExperiences(convertExperiencesResponse(response.data))
                    }),
                error =>
                    onAxiosError({axiosError: error})
            )
    }, [])


    return (
        <div id={'experiences'}>
            <HeaderTitle text={header}/>
            <div className={'experiences-container'}>
                {experiences.map((experience, index) => (
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
                        <Divider index={index} allCount={experiences.length}/>
                    </>
                ))}
            </div>
        </div>
    );
}

export default Experiences