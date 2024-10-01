import {useState} from "react";
import './Filter.css'
import {ArrElement} from "../../../global/Types";

function Filter({values, setFilteredValues, customOnFilterChanged}: {
    values: { labels: string[], [key: string]: any }[],
    setFilteredValues: (values: any) => void,
    customOnFilterChanged?: (filter: string) => void,
}) {
    const filtersSet: Set<string> = values.reduce((acc, value) => {
        value.labels.forEach(label => acc.add(label));
        return acc;
    }, new Set<string>());

    const isOtherInFilters = filtersSet.has('Others')
    const isHighlightsInFilters = filtersSet.has('Highlights')

    filtersSet.delete('All')
    filtersSet.delete('Highlights')
    filtersSet.delete('Others')

    const filters: string[] = [
        'All',
        ...(isHighlightsInFilters ? ['Highlights'] : []),
        ...Array.from(filtersSet).sort(),
        ...(isOtherInFilters ? ['Others'] : [])
    ]
    type FilterType = ArrElement<typeof filters>


    const [selectedFilter, setSelectedFilter] = useState<FilterType>('All')

    function isFiltersInvalid(filters: FilterType[]) {
        return filters.length === 0 ||
            (filters.length === 1 && filters.includes('All')) ||
            (filters.length === 2 && filters.includes('All') && filters.includes('Others'))
    }

    function onFilterButtonClick(filter: FilterType) {
        setSelectedFilter(filter)

        if (filter === 'All')
            setFilteredValues(values)
        else {
            const filteredVolunteering = values.filter(value =>
                value.labels.includes(filter))
            setFilteredValues(filteredVolunteering)
        }

        if (customOnFilterChanged)
            customOnFilterChanged(filter)
    }

    return (
        isFiltersInvalid(filters) ? null :
            <p className={'filter-container'}>
                {filters.map((filter, index) => {
                    return (
                        <button key={index}
                                className={'filter-button ' + (selectedFilter === filter ? 'selected-filter' : '')}
                                onClick={() => onFilterButtonClick(filter)}>
                            {filter}
                        </button>
                    )
                })}
            </p>
    )
}

export default Filter