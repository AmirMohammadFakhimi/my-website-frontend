import React, {useEffect, useState} from "react";
import './Volunteering.css'
import HeaderTitle from "../../utils/headerTitle/HeaderTitle";
import InfoTile from "../../utils/infoTile/InfoTile";
import {getVolunteering} from "../../../global/ApiCalls";
import {onAxiosError, onAxiosSuccess} from "../../../global/Errors";

const Volunteering = () => {
    type CauseType = 'Animal Welfare'
        | 'Arts and Culture'
        | 'Children'
        | 'Civil Rights and Social Action'
        | 'Economic Empowerment'
        | 'Education'
        | 'Environment'
        | 'Health'
        | 'Human Rights'
        | 'Disaster and Humanitarian Relief'
        | 'Poverty Alleviation'
        | 'Science and Technology'
        | 'Social Services'
        | 'Veteran Support'

    type VolunteeringType = {
        company: string,
        role: string,
        cause: CauseType,
        startDate: Date,
        endDate: Date | 'Present',
        description: string,
        supervisor?: string,
        logoUrl: string,
        websiteUrl: string,
    }[]

    type VolunteeringResponseType = {
        volunteering: {
            company: string,
            role: string,
            cause: CauseType,
            start_date: Date,
            end_date: Date | 'Present',
            description: string,
            supervisor?: string,
            logo_url: string,
            website_url: string,
        }[]
    }

    const [volunteering, setVolunteering] = useState<VolunteeringType>([])

    function convertVolunteeringResponse(response: VolunteeringResponseType): VolunteeringType {
        console.log(response)
        const currentVolunteering = response.volunteering
        const newVolunteering: VolunteeringType = []

        currentVolunteering.forEach(volunteering => {
            newVolunteering.push({
                company: volunteering.company,
                role: volunteering.role,
                cause: volunteering.cause,
                startDate: new Date(volunteering.start_date),
                endDate: volunteering.end_date === 'Present' ? 'Present' : new Date(volunteering.end_date),
                description: volunteering.description,
                supervisor: volunteering.supervisor,
                logoUrl: volunteering.logo_url,
                websiteUrl: volunteering.website_url
            })
        })

        return newVolunteering
    }

    useEffect(() => {
        getVolunteering()
            .then(
                response =>
                    onAxiosSuccess({
                        res: response, onSuccess: () => setVolunteering(convertVolunteeringResponse(response.data))
                    }),
                error =>
                    onAxiosError({axiosError: error})
            )
    }, [])


    return (
        <div>
            <HeaderTitle text={'Volunteering'}/>
            <HeaderTitle text={`Total: ${volunteering.length}`} className={'volunteering-total'}/>
            <div id={'volunteering-container'}>
                {volunteering.map((volunteering, index) => (
                    <InfoTile index={index} title={volunteering.role} subtitle={volunteering.company}
                              startDate={volunteering.startDate} endDate={volunteering.endDate}
                              underDate={volunteering.cause}
                              descriptionHeadline={volunteering.supervisor ? volunteering.supervisor : undefined}
                              description={volunteering.description}
                              logoUrl={volunteering.logoUrl} websiteUrl={volunteering.websiteUrl}
                              isFullWidth={true} isAddTopPadding={true}/>
                ))}
            </div>
        </div>
    )
}

export default Volunteering