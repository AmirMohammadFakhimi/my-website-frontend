import React, {useEffect, useState} from 'react';
import './Educations.css';
import HeaderTitle from "../../utils/headerTitle/HeaderTitle";
import InfoTile from "../../utils/infoTile/InfoTile";
import Divider from "../../utils/divider/Divider";
import {getEducations} from "../../../global/ApiCalls";
import {onAxiosError, onAxiosSuccess} from "../../../global/Errors";

function Educations() {
    type EducationsType = {
        name: string,
        degree: string,
        field: string,
        startDate: Date,
        endDate: Date | 'Present',
        myGrade: number,
        maxGrade: number,
        skills: string[],
        logoUrl: string,
        websiteUrl: string,
        imageUrl: string
    }[]

    type EducationsResponseType = {
        educations: {
            name: string,
            degree: string,
            field: string,
            start_date: Date,
            end_date: Date | 'Present',
            my_grade: number,
            max_grade: number,
            skills: string[],
            logo_url: string,
            website_url: string,
            image_url: string
        }[]
    }

    const [educations, setEducations] = useState<EducationsType>([])

    function convertEducationsResponse(response: EducationsResponseType): EducationsType {
        const currentEducations = response.educations
        const newEducations: EducationsType = []

        currentEducations.forEach(education => {
            newEducations.push({
                name: education.name,
                degree: education.degree,
                field: education.field,
                startDate: new Date(education.start_date),
                endDate: education.end_date === 'Present' ? 'Present' : new Date(education.end_date),
                myGrade: education.my_grade,
                maxGrade: education.max_grade,
                skills: education.skills,
                logoUrl: education.logo_url,
                websiteUrl: education.website_url,
                imageUrl: education.image_url
            })
        })

        return newEducations
    }

    useEffect(() => {
        getEducations()
            .then(
                response =>
                    onAxiosSuccess({
                        res: response, onSuccess: () => setEducations(convertEducationsResponse(response.data))
                    }),
                error =>
                    onAxiosError({axiosError: error})
            )
    }, [])


    return (
        <div id={'educations'}>
            <HeaderTitle text={'Educations'}/>
            <div id={'educations-content'}>
                {educations.map((education, index) => {
                    return (
                        <>
                            <InfoTile index={index} title={education.name}
                                      subtitle={`${education.degree} in ${education.field}`}
                                      startDate={education.startDate} endDate={education.endDate}
                                      underDate={`Grade: ${education.myGrade} / ${education.maxGrade}`}
                                      skills={education.skills}
                                      logoUrl={education.logoUrl} websiteUrl={education.websiteUrl}
                                      imageUrl={education.imageUrl}/>
                            <Divider index={index} allCount={educations.length}/>
                        </>
                    )
                })}
            </div>
        </div>
    )
        ;
}

export default Educations;