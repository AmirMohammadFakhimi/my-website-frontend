import React, {useState} from "react";
import './Experience.css'
import HeaderTitle from "../../utils/headerTitle/HeaderTitle";
import BaseFilter from "../../utils/baseFilter/BaseFilter";
import ResearchExperience from "./researchExperience/ResearchExperience";
import IndustryExperience from "./industryExperience/IndustryExperience";


function Experience({header}: { header: string }) {
    const [filter, setFilter] = useState<string>('Research Experience')

    const filters: string[] = [
        'Research Experience',
        'Industry Experience'
    ]

    function onFilterChange(filter: string) {
        setFilter(filter)
    }

    return (
        <div id={'experience'}>
            <HeaderTitle text={filter === 'Research Experience' ? 'Research ' + header : 'Industry ' + header}
                         className={'experience-header'}/>
            <BaseFilter filters={filters} customOnFilterClick={onFilterChange} className={'experience-filter'}/>
            {filter === 'Research Experience' ?
                <ResearchExperience/>
                :
                <IndustryExperience/>
            }
        </div>
    )
}

export default Experience