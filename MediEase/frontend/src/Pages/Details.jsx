import React from 'react';
import styled from 'styled-components';
import MedicalRecordForm from "../Components/RecordForm";
import PatientDetails from '../Components/PatientDetails';

const AppContainer = styled.div`
  display: flex;
  font-family: 'Arial', sans-serif;
`;

const Main = styled.main`
  flex: 1;
  padding: 20px;
  background: #f9f9f9;
`;

const Details = () => {
  return (
    <div className='text-black'>
      <PatientDetails />
      <MedicalRecordForm />
    </div>
  );
}

export default Details;