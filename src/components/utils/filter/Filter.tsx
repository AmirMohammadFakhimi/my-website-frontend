import {useState} from "react";
import './Filter.css'

function Filter({filters, onFilterChanged}: { filters: string[], onFilterChanged: (filter: string) => void }) {
    const [selectedFilter, setSelectedFilter] = useState<string>('All')

    function onFilterButtonClick(filter: string) {
        setSelectedFilter(filter)
        onFilterChanged(filter)
    }

    return (
        <p className={'filter-container'}>
            {filters.map((filter, index) => {
                return (
                    <button key={index} className={'filter-button ' + (selectedFilter === filter ? 'selected-filter' : '')}
                            onClick={() => onFilterButtonClick(filter)}>
                        {filter}
                    </button>
                )
            })}
        </p>
    )
}

export default Filter