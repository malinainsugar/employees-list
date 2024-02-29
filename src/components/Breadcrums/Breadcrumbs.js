import "./Breadcrumbs.css";

const Breadcrumbs = ({employeeData = null}) => {
    const isMobileScreen = window.innerWidth <= 320;
    return (
        <ul className="breadcrumbs">
            {isMobileScreen ? "" : <li className="breadcrumbs-item"><a href="/">Главная</a></li>}
            <li className="breadcrumbs-item">{employeeData ? <a href="/">Список сотрудников</a> : "Список сотрудников"}</li>
            {employeeData && <li className="breadcrumbs-item">{employeeData.name}</li>}
        </ul>
    );
}

export default Breadcrumbs;