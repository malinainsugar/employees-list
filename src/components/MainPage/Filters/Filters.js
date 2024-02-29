import "./Filters.css";
import { useState } from "react";
import { filtersData } from "../../../utils";
import { useFilterContext } from "../../../FilterContext";


const Filters = () => {
  const [filterModalOpen, setFilterModalOpen] = useState({});
  const { handleFilterChange } = useFilterContext();

  const toggleFilterModal = (filterName) => {
    setFilterModalOpen(prevState => ({
      ...prevState,
      [filterName]: !prevState[filterName]
    }));
  };

  return (
    <ul className="filters">
      {filtersData.map((filter, index) => (
        <li className="filter" key={index}>
          <span onClick={() => toggleFilterModal(filter.name)}>{filter.label}</span>
          <ul className={`select ${filterModalOpen[filter.name] ? 'show' : ''}`}>
            {filter.options.map((option, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  id={option.value}
                  name={filter.name}
                  value={option.value}
                  onChange={() => handleFilterChange(filter.name, option.value)}
                />
                <label htmlFor={option.value}>{option.label}</label>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Filters;