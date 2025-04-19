import './Filter.css'
import {ArrElement} from "../../../global/Types";
import BaseFilter from "../baseFilter/BaseFilter";

function Filter({values, setFilteredValues, customOnFilterClick}: {
    values: { labels: string[], [key: string]: any }[],
    setFilteredValues: (values: any) => void,
    customOnFilterClick?: (filter: string) => void,
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

    function isFiltersInvalid(filters: FilterType[]) {
        return filters.length === 0 ||
            (filters.length === 1 && filters.includes('All')) ||
            (filters.length === 2 && filters.includes('All') && filters.includes('Others'))
    }

    function onFilterClick(filter: FilterType) {
        if (filter === 'All')
            setFilteredValues(values)
        else {
            const filteredValues = values.filter(value =>
                value.labels.includes(filter))
            setFilteredValues(filteredValues)
        }

        if (customOnFilterClick)
            customOnFilterClick(filter)
    }

    return (
        isFiltersInvalid(filters) ? null :
            <BaseFilter filters={filters} customOnFilterClick={onFilterClick}/>
    )
}

export default Filter