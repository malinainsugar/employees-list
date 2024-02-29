import { useState } from 'react'
import Header from "./components/Header/Header.js";
import MainPage from "./components/MainPage/MainPage.js";
import EmployeePage from './components/EmpoyeePage/EmployeePage.js';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FilterProvider } from './FilterContext.js';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? JSON.parse(storedTheme) : false;
  });

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => {
      const newTheme = !prevTheme;
      localStorage.setItem('theme', JSON.stringify(newTheme));
      return newTheme;
    });
  };

  return (
    <Router>
      <FilterProvider>
        <div className={`App ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
          <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}/>
          <main>
            <Routes>
              <Route path="/employee/:id" element={<EmployeePage />} />
              <Route path="/"  element={<MainPage />} />
            </Routes>
          </main>
        </div>
      </FilterProvider>
    </Router>
  );
}

export default App;
