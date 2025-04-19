import React, {useState} from "react";
import './Experiences.css'
import HeaderTitle from "../../utils/headerTitle/HeaderTitle";
import BaseFilter from "../../utils/baseFilter/BaseFilter";
import ResearchExperiences from "./researchExperiences/ResearchExperiences";
import WorkExperiences from "./workExperiences/WorkExperiences";


function Experiences({header}: { header: string }) {
    const [filter, setFilter] = useState<string>('Research Experiences')

    const filters: string[] = [
        'Research Experiences',
        'Work Experiences'
    ]

    function onFilterChange(filter: string) {
        setFilter(filter)
    }

    return (
        <div id={'experiences'}>
            <HeaderTitle text={filter === 'Research Experiences' ? 'Research ' + header : 'Work ' + header}
                         className={'experiences-header'}/>
            <BaseFilter filters={filters} customOnFilterClick={onFilterChange} className={'experiences-filter'}/>
            {filter === 'Research Experiences' ?
                <ResearchExperiences/>
                :
                <WorkExperiences/>
            }
        </div>
    )
}

export default Experiences