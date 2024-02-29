import Breadcrumbs from "../Breadcrums/Breadcrumbs";
import FilterBar from "./FilterBar";
import EmployeesTable from "./EmployeesTable/EmployeesTable";

const MainPage = () => {
    return (
        <>
            <Breadcrumbs />
            <FilterBar />
            <EmployeesTable />
        </>
    )
}

export default MainPage;