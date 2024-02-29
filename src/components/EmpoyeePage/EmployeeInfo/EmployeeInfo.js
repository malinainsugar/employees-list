import "./EmployeeInfo.css";
import { formatDate, formatPhoneNumber } from "../../../utils.js";

const EmployeeInfo = ({ employeeData }) => {
    return (
        <section className="employee-main-info-section">
        <h2>Основная информация</h2>
        <table className="main-info-table">
          <tr><td className="main-label">Контактный телефон:</td><td className="main-info"><a className="employee-contact" href="tel:{employeeData.phone}">{formatPhoneNumber(employeeData.phone)}</a></td></tr>
          <tr><td className="main-label">Дата рождения:</td><td className="main-info">{formatDate(employeeData.birthdate)}</td></tr>
          <tr><td className="main-label">Дата устройства:</td><td className="main-info">{formatDate(employeeData.dateOfEmployment)}</td></tr>
        </table>
      </section>
    )
}

export default EmployeeInfo;