import { useFilterContext } from "../../../FilterContext";

const SearchButton = () => {
    const { setButtonClicked } = useFilterContext();
  
    const handleClick = () => {
        setButtonClicked(true);
    };
  
    return (
      <button className="btn-search" onClick={handleClick}>
        Найти
      </button>
    );
  };

export default SearchButton;