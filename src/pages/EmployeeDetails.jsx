import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const PROJECT_ID = process.env.REACT_APP_PROJECT_ID;
const ENVIRONMENT_ID = process.env.REACT_APP_ENVIRONMENT_ID;
const URL = process.env.REACT_APP_URL;

const EmployeeDetails = () => {
  const { empId } = useParams();
  const [employeeData, setEmployeeData] = useState({
    name: "",
    address: {
      line1: "",
      city: "",
      country: "",
      zipCode: "",
    },
    contactMethod: {
      email: "",
      phone: "",
    },
  });

  const fetchEmployeeDetails = async () => {
    const url = `${URL}/${empId}`;
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
      const { name, address, contact_method: contactMethod } = data;
      const { city, country, line1, zip_code: zipCode } = address;
      const { email, phone } = contactMethod;
      setEmployeeData({
        name,
        address: {
          line1,
          city,
          country,
          zipCode,
        },
        contactMethod: {
          email,
          phone,
        },
      });
    } catch (error) {
      return console.log("Error fetching employee data: ", error);
    }
  };

  useEffect(() => {
    fetchEmployeeDetails();
  }, []);

  return (
    <div>
      <h1>Employee details</h1>
      <div>{employeeData?.name}</div>
      <div>{employeeData?.address?.line1}</div>
      <div>{employeeData?.address?.city}</div>
      <div>{employeeData?.address?.country}</div>
      <div>{employeeData?.address?.zipCode}</div>
      <div>{employeeData?.contactMethod?.email}</div>
      <div>{employeeData?.contactMethod?.phone}</div>
    </div>
  );
};

export default EmployeeDetails;
