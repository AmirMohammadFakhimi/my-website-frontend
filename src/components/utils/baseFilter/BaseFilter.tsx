import React, {useState} from "react";
import './BaseFilter.css'

function BaseFilter({filters, customOnFilterClick, className}: {
    filters: string[],
    customOnFilterClick?: (filter: string) => void,
    className?: string
}) {
    const [selectedFilter, setSelectedFilter] = useState<string>(filters.length ? filters[0] : '')

    function onFilterClick(filter: string) {
        setSelectedFilter(filter)

        if (customOnFilterClick)
            customOnFilterClick(filter)
    }

    return (
        <p className={`filter-container ${className}`}>
            {filters.map((filter, index) => {
                return (
                    <button key={index}
                            className={'filter-button ' + (selectedFilter === filter ? 'selected-filter' : '')}
                            onClick={() => onFilterClick(filter)}>
                        {filter}
                    </button>
                )
            })
            }
        </p>
    )
}

export default BaseFilter