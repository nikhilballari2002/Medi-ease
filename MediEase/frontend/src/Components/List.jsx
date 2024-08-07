import React , { useState ,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPen } from '@fortawesome/free-solid-svg-icons';
import '../Styles/List.css';
import axios from 'axios';

const List = () => {
  const [allPatients,setAllPatients] = useState(null);
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/auth/allPatients');
        setAllPatients(response.data.data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  const navigate = useNavigate();

  const addNewPatient = () => {
    navigate('/registerPatient');
  }

  const handleClick = (id) => {
    console.log('Setting pid in localStorage:', id);
    localStorage.setItem('pid', id);
    const storedId = localStorage.getItem('pid');
    console.log('pid in localStorage:', storedId);

    if (storedId === id) {
      navigate(`/patient?id=${id}`);
    } else {
      console.error('Failed to set pid in localStorage')
    }
  }

  return (
    <div className="members-list-container text-black">
      <div className="main-content">
        <header className="header">
          <h1 className=' text-5xl'>Patients</h1>
          <button className="btn" onClick={addNewPatient}>Add new</button>
        </header>
        <table className="members-table">
          <thead>
            <tr className=' text-center'>
              <th>Patient ID</th>
              <th>Patient name</th>
              <th>Mobile</th>
              <th>Age</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {allPatients && allPatients.map(member => (
              <tr key={member._id}>
                <td>{member._id}</td>
                <td>{member.fullName}</td>
                <td>{member.number}</td>
                <td>{member.age}</td>
                <td>
                  <FontAwesomeIcon icon={faUserPen} className='cursor-pointer' onClick={() => handleClick(member._id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default List;