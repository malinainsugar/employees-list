import "./EmployeePreview.css";


const EmployeePreview = ( { employeeData } ) => {
  const isMobileScreen = window.innerWidth <= 320;

  return (
      <section className="employee-preview-section">
        {isMobileScreen ? <>
        <div className="preview-container">
          <img className="employee-photo" src={employeeData.photo} width="163" height="163" alt={`Фото сотрудника: ${employeeData.name}`}/>
          <div className="employee-preview-info">
            <h1>{employeeData.name}</h1>
            <span className="employee-position">{employeeData.position}</span>
          </div> 
        </div>
        <div className="employee-stack">
          {employeeData.stack.map((technology, index) => (
                <span key={index}>{technology}</span>
              ))}
        </div> </> : <>
          <img className="employee-photo" src={employeeData.photo} width="163" height="163" alt={`Фото сотрудника: ${employeeData.name}`}/>
          <div className="employee-preview-info">
            <h1>{employeeData.name}</h1>
            <span className="employee-position">{employeeData.position}</span>
            <div className="employee-stack">
              {employeeData.stack.map((technology, index) => (
                <span key={index}>{technology}</span>
              ))}
            </div>
          </div> </>}
    </section>
  )
}

export default EmployeePreview;