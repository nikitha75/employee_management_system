import React, { useState } from "react";
import FormRow from "../components/FormRow";
const PROJECT_ID = process.env.REACT_APP_PROJECT_ID;
const ENVIRONMENT_ID = process.env.REACT_APP_ENVIRONMENT_ID;
const URL = process.env.REACT_APP_URL;

const AddEmployee = () => {
  const [employeeData, setEmployeeData] = useState({
    name: "",
    line1: "",
    city: "",
    country: "",
    zipCode: "",
    email: "",
    phone: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployeeData({
      ...employeeData,
      [name]: value,
    });
  };

  const handleAddEmployeeDetails = async (event) => {
    event.preventDefault();
    const { name, city, country, line1, zipCode, email, phone } = employeeData;

    const employee = {
      name,
      address: {
        line1,
        city,
        country,
        zip_code: zipCode,
      },
      contact_method: {
        email,
        phone,
      },
    };
    const url = URL;
    const options = {
      method: "POST",
      headers: {
        projectId: PROJECT_ID,
        environmentId: ENVIRONMENT_ID,
      },
      body: JSON.stringify(employee),
    };
    try {
      const response = await fetch(url, options);
      const data = await response.json();
    } catch (error) {
      return console.log("Error adding employee data: ", error);
    }
  };

  return (
    <div className="add-employee-container">
      <h1 className="add-employee-heading">Add Employee</h1>
      <div className="center-container">
        <form onSubmit={handleAddEmployeeDetails} className="form">
          <FormRow
            type="text"
            name="name"
            value={employeeData.name}
            handleChange={handleChange}
            placeholder="Enter employee name"
            formGroupClass="form-group"
            labelClass="form-label"
            inputClass="form-input"
          />
          <div className="group-container">
            <div className="group-container-heading">Address</div>
            <div className="flex-container">
              <FormRow
                type="text"
                name="line1"
                value={employeeData.line1}
                handleChange={handleChange}
                placeholder="Enter address line 1"
                formGroupClass="form-group"
                labelClass="form-label"
                inputClass="form-input"
              />
              <FormRow
                type="text"
                name="city"
                value={employeeData.city}
                handleChange={handleChange}
                placeholder="Enter city name"
                formGroupClass="form-group"
                labelClass="form-label"
                inputClass="form-input"
              />
            </div>
            <div className="flex-container">
              <FormRow
                type="text"
                name="country"
                value={employeeData.country}
                handleChange={handleChange}
                placeholder="Enter country"
                formGroupClass="form-group"
                labelClass="form-label"
                inputClass="form-input"
              />
              <FormRow
                type="text"
                label="Zip Code"
                name="zipCode"
                value={employeeData.zipCode}
                handleChange={handleChange}
                placeholder="Enter zip code"
                formGroupClass="form-group"
                labelClass="form-label"
                inputClass="form-input"
              />
            </div>
          </div>
          <div className="group-container">
            <div className="group-container-heading">Contact</div>
            <FormRow
              type="email"
              name="email"
              value={employeeData.email}
              handleChange={handleChange}
              placeholder="Enter email"
              formGroupClass="form-group"
              labelClass="form-label"
              inputClass="form-input"
            />
            <FormRow
              type="text"
              name="phone"
              value={employeeData.phone}
              handleChange={handleChange}
              placeholder="Enter phone number"
              formGroupClass="form-group"
              labelClass="form-label"
              inputClass="form-input"
            />
          </div>
          <div className="btn-container">
            <button type="submit" className="btn add-btn">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
