import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const PatientDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const PatientInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  line-height: 1.5;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 5px;
  }
`;

const PatientDetails = () => {
  const location = useLocation();
  const [patientDetails, setPatientDetails] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const searchParams = new URLSearchParams(location.search);
        const id = searchParams.get('id');
        const response = await axios.get(`http://localhost:3001/api/auth/getPatient/${id}`);
        setPatientDetails(response.data.data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <PatientDetailsContainer>
      {patientDetails ? (
        <PatientInfo>
          <h3>{patientDetails.fullName}</h3>
          <p>Gender: {patientDetails.gender}</p>
          <p>Phone Number: {patientDetails.number}</p>
          <p>Age: {patientDetails.age}</p>
        </PatientInfo>
      ) : (
        <p>Loading patient details...</p>
      )}
    </PatientDetailsContainer>
  );
};

export default PatientDetails;
