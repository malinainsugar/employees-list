import { useFilterContext } from "../../../FilterContext";
import "./SearchInput.css";

const SearchInput = () => {
  const { handleNameChange } = useFilterContext();
    return (
      <input
        className="search-input-section"
        type="text"
        name="search-input"
        placeholder="Поиск"
        onChange={handleNameChange}
      />
    )
}

export default SearchInput;