import { createContext, useContext, useState, useEffect } from 'react';

const FilterContext = createContext();

export const useFilterContext = () => {
  return useContext(FilterContext);
};

export const FilterProvider = ({ children }) => {
  const [params, setParams] = useState(() => {
    const savedParams = localStorage.getItem('params');
    return savedParams ? JSON.parse(savedParams) : {
      Name: '', 
      Position: [],
      Gender: [], 
      Stack: [] 
    };
  });

  useEffect(() => {
    localStorage.setItem('params', JSON.stringify(params));
  }, [params]);

  const handleNameChange = (value) => {
    setParams(prevParams => ({ ...prevParams, Name: value }));
  };

  const handleFilterChange = (filter, value) => {
    setParams(prevParams => {
      const updatedParams = { ...prevParams };
      const index = updatedParams[filter].indexOf(value);
  
      if (index !== -1) {
        updatedParams[filter].splice(index, 1);
      } else {
        updatedParams[filter].push(value);
      }
  
      return updatedParams;
    });
  };

  function generateApiUrl() {
    const baseUrl = `https://frontend-test-api.stk8s.66bit.ru/api/Employee?Count=100`;
    const queryParams = [];

    for (const key in params) {
        if (params.hasOwnProperty(key)) {
            const value = params[key];
            if (value !== undefined && value.length > 0 && value !== '') {
                const encodedValue = Array.isArray(value) ? value.join(',') : value;
                queryParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(encodedValue)}`);
            }
        }
    }

    const queryString = queryParams.join('&');
    const apiUrl = `${baseUrl}&${queryString}`;

    return apiUrl;
  }

  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <FilterContext.Provider value={{ params, handleNameChange, handleFilterChange, generateApiUrl, buttonClicked, setButtonClicked}}>
      {children}
    </FilterContext.Provider>
  );
};

