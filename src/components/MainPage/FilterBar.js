import Filters from "./Filters/Filters.js";
import SearchInput from "./SearchInput/SearchInput.js";
import ResultFilters from "./ResultFilters/ResultFilters.js";
import "./FilterBar.css"

const FilterBar = () => {
  const isMobileScreen = window.innerWidth <= 320;

  return (
    <section className="filter-bar">
      <div className="filters-section">
        <h1>Список сотрудников</h1>
        {isMobileScreen ? <SearchInput/> : "" }
        <Filters/>
      </div>
      {isMobileScreen ? "" : <SearchInput/> }
      <ResultFilters/>
    </section>
  )
}

export default FilterBar;