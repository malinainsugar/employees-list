import EmployeePreview from "./EmployeePreview/EmployeePreview.js";
import EmployeeInfo from "./EmployeeInfo/EmployeeInfo.js";
import Breadcrumbs from "../Breadcrums/Breadcrumbs.js";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from "react";

const EmployeePage = () => {
    const { id } = useParams();
    const [employeeData, setEmployeeData] = useState(null);

    useEffect(() => {
        const fetchEmployeeData = async () => {
          try {
            const response = await axios.get(`https://frontend-test-api.stk8s.66bit.ru/api/Employee/${id}`);
            setEmployeeData(response.data);
          } catch (error) {
            console.error('Ошибка при получении данных о сотруднике:', error);
          }
        };
    
        fetchEmployeeData();
      }, [id]);
      
    if (!employeeData) {
        return <div className="message">Загрузка...</div>;
    }

    return (
        <>
        <Breadcrumbs employeeData={employeeData} />
        <EmployeePreview employeeData={employeeData}/>
        <EmployeeInfo employeeData={employeeData} />
        </>
    )
}

export default EmployeePage;