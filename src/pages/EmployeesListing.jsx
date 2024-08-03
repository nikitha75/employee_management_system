import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaTrashAlt } from "react-icons/fa";
import { MdReadMore } from "react-icons/md";
const PROJECT_ID = process.env.REACT_APP_PROJECT_ID;
const ENVIRONMENT_ID = process.env.REACT_APP_ENVIRONMENT_ID;
const URL = process.env.REACT_APP_URL;

const EmployeeListing = () => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const url = `${URL}?limit=20&offset=0`;
    const options = {
      method: "GET",
      headers: {
        projectId: PROJECT_ID,
        environmentId: ENVIRONMENT_ID,
      },
    };
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setEmployees(data.data);
    } catch (error) {
      return console.log(error);
    }
  };

  const handleDeleteEmployee = async (empId) => {
    const url = `${URL}/${empId}`;
    const options = {
      method: "DELETE",
      headers: {
        projectId: PROJECT_ID,
        environmentId: ENVIRONMENT_ID,
      },
      body: JSON.stringify({}),
    };
    try {
      const response = await fetch(url, options);
      const data = await response.json();
    } catch (error) {
      return console.log(error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, [handleDeleteEmployee]);

  return (
    <div className="employee-listing-container">
      <h1 className="employee-listing-heading">Employees</h1>
      <div className="center-container">
        <table className="table-container">
          <thead className="table-head">
            <tr className="table-header">
              <th>EMPLOYEE ID</th>
              <th>NAME</th>
              <th>DETAILS</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {employees ? (
              employees.map((employee) => {
                const { name, _id: empId } = employee;
                return (
                  <tr key={empId} className="table-row">
                    <td className="table-data">
                      <div>{empId}</div>
                    </td>
                    <td className="name-container table-data">
                      <div>
                        <FaUserCircle color="#8694b0" size={20} />
                      </div>
                      <div className="emp-name">{name}</div>
                    </td>
                    <td className="table-data">
                      <Link to={`/employee/${empId}`} className="link-element">
                        <MdReadMore color="#14a651" size={22} />
                      </Link>
                    </td>
                    <td className="table-data">
                      <button
                        onClick={() => handleDeleteEmployee(empId)}
                        className="btn remove-btn"
                      >
                        <FaTrashAlt color="#ff0033" />
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr className="no-data-container">
                <td colSpan={4}>No employees in the system</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeListing;
