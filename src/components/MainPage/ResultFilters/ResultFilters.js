import SearchButton from "./SearchButton";
import "./ResultFilters.css";
import { filtersData } from "../../../utils";
import { useFilterContext } from "../../../FilterContext";

const ResultFilters = () => {
  const { params, handleFilterChange } = useFilterContext();

  const getSelectedFilters = () => {
    const selectedFilters = [];

    for (const name in params) {
      if (name !== 'Name' && params[name].length > 0) {
        const filter = filtersData.find(filter => filter.name === name);
        if (filter) {
          const selectedValues = params[name].map(value => {
            const option = filter.options.find(option => option.value === value);
            return { 
              name, 
              label: option ? option.label : value, 
              value 
            };
          });
          selectedFilters.push(...selectedValues);
        }
      }
    }

    return selectedFilters;
  };

  const renderSelectedFilters = () => {
    const selectedFilters = getSelectedFilters();

    return selectedFilters.map((filter, index) => (
      <span name={index} className="result-filter" onClick={() => handleFilterChange(filter.name, filter.value)}>
        {filter.label}
      </span>
    ));
  };

  return (
    <div className="result-section">
      <span className="result-section-label">Выбранные фильтры:</span>
      <div className="result-filters">
        {renderSelectedFilters()}
      </div>
      <SearchButton />
    </div>
  );
};

export default ResultFilters;