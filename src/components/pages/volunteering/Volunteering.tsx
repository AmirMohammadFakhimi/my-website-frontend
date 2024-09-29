import React, {useEffect, useState} from "react";
import './Volunteering.css'
import HeaderTitle from "../../utils/headerTitle/HeaderTitle";
import InfoTile from "../../utils/infoTile/InfoTile";
import {getVolunteering} from "../../../global/ApiCalls";
import {onAxiosError, onAxiosSuccess} from "../../../global/Errors";
import Filter from "../../utils/filter/Filter";

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
        label: string,
        startDate: Date,
        endDate: Date | 'Present',
        description?: string,
        supervisor?: string,
        logoUrl: string,
        websiteUrl: string,
    }[]

    type VolunteeringResponseType = {
        volunteering: {
            company: string,
            role: string,
            cause: CauseType,
            label: string,
            start_date: Date,
            end_date: Date | 'Present',
            description?: string,
            supervisor?: string,
            logo_url: string,
            website_url: string,
        }[]
    }

    const [volunteering, setVolunteering] = useState<VolunteeringType>([])
    const [filteredVolunteering, setFilteredVolunteering] = useState<VolunteeringType>([])
    const [filters, setFilters] = useState<string[]>([])

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
                websiteUrl: volunteering.website_url,
                label: volunteering.label
            })
        })

        return newVolunteering
    }

    useEffect(() => {
        getVolunteering()
            .then(
                response =>
                    onAxiosSuccess({
                        res: response, onSuccess: () => {
                            const convertedResponse = convertVolunteeringResponse(response.data)
                            setVolunteering(convertedResponse)
                            setFilteredVolunteering(convertedResponse)

                            const filtersSet = new Set<string>()
                            convertedResponse.forEach(volunteering =>
                                filtersSet.add(volunteering.label))
                            filtersSet.delete('All')
                            filtersSet.delete('Other')
                            const isOtherInFilters = filtersSet.has('Other')
                            setFilters(['All', ...Array.from(filtersSet).sort(),
                                ...(isOtherInFilters ? ['Other'] : [])])
                        }
                    }),
                error =>
                    onAxiosError({axiosError: error})
            )
    }, [])

    function onFilterChanged(filter: string) {
        if (filter === 'All')
            setFilteredVolunteering(volunteering)
        else {
            const filteredVolunteering = volunteering.filter(volunteering => volunteering.label === filter)
            setFilteredVolunteering(filteredVolunteering)
        }
    }


    return (
        <div>
            <HeaderTitle text={'Volunteering'} className={'volunteering-header'}/>
            <HeaderTitle text={`Total: ${filteredVolunteering.length}`} className={'volunteering-total'}/>
            <Filter filters={filters} onFilterChanged={onFilterChanged}/>
            <div id={'volunteering-container'}>
                {filteredVolunteering.map((volunteering, index) => (
                    <InfoTile index={index} title={volunteering.role} subtitle={volunteering.company}
                              startDate={volunteering.startDate} endDate={volunteering.endDate}
                              underDate={volunteering.cause}
                              descriptionHeadline={volunteering.supervisor ? volunteering.supervisor : undefined}
                              description={volunteering.description} characterLimit={100}
                              logoUrl={volunteering.logoUrl} websiteUrl={volunteering.websiteUrl}
                              isFullWidth={true} isAddTopPadding={true}/>
                ))}
            </div>
        </div>
    )
}

export default Volunteering