import { useState, useEffect } from "react";
import axios from 'axios';
import { formatDate, formatPhoneNumber } from "../../../utils.js";
import { useNavigate } from "react-router-dom";
import "./EmployeesTable.css"
import { useFilterContext } from "../../../FilterContext.js";

const EmployeesTable = () => {

    const [employees, setEmployees] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { generateApiUrl, buttonClicked, setButtonClicked} = useFilterContext();
    const [isInfinityScrollActive, setIsInfinityScrollActive] = useState(true);

    let navigate = useNavigate();

    const fetchEmployees = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.get(buttonClicked ? generateApiUrl() : `https://frontend-test-api.stk8s.66bit.ru/api/Employee?Page=${page}`);

            setEmployees(prevEmployees => [...prevEmployees, ...response.data]);
            setPage(prevPage => prevPage + 1);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchEmployees();
    }, []);

    const handleScroll = () => {
        if (!isInfinityScrollActive || window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
            return;
        }
        fetchEmployees();
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading]);

    useEffect(() => {
        if (buttonClicked) {
            setEmployees([]);
            fetchEmployees();
            setButtonClicked(false);
            setIsInfinityScrollActive(false); 
        }
    }, [buttonClicked, setButtonClicked]);


    return (
        <div className="table-container">
            <table className="employees-table">
                <thead>
                    <tr>
                        <th>ФИО</th>
                        <th>Должность</th>
                        <th>Телефон</th>
                        <th>Дата рождения</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id} onClick={() => { navigate(`/employee/${employee.id}`);}}>
                            <td>{employee.name}</td>
                            <td>{employee.position}</td>
                            <td>{formatPhoneNumber(employee.phone)}</td>
                            <td>{formatDate(employee.birthdate)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isLoading && <div className="message">Загрузка...</div>}
            {error && <div className="message">Ошибка: {error.message}</div>}
        </div>
    )
}

export default EmployeesTable;