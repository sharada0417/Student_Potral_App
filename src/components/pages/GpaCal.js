import React, { useState } from 'react';
import Footer from '../Footer';
import '../css/GpaCal.css'
function GpaCal(){
    const [students,setStudents] = useState([]);
    const [formData,setFormData] = useState({
        registrationNumber:'',
        name:'',
        age:'',
        course:'',
        gpa:'',
    });
    const[error,setError] = useState('');

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {registrationNumber,name,age,course,gpa} = formData;

        if(!registrationNumber || !name){
            setError('Registration number and name are required.');
            return;
        }

        setStudents([...students,{registrationNumber,name,age,course,gpa}]);
        setFormData({
            registrationNumber:'',
            name:'',
            age:'',
            course:'',
            gpa: '',
        });
        setError('');
    };

    const handleDelete = (registrationNumber) =>{
        setStudents(students.filter((student) => student.registrationNumber != registrationNumber));
    }
    
    const getGpaClass = (gpa) => {
        if (gpa >= 3.5) return 'first-class';
        if (gpa >= 3.0) return 'second-upper';
        if (gpa >= 2.5) return 'second-lower'; 
        return 'ordinary-gpa';
    };
    
    const getGrade = (gpa) => {
        if (gpa >= 3.5) return 'first-class';
        if (gpa >= 3.0) return 'second-upper';
        if (gpa >= 2.5) return 'second-lower';
        return 'ordinary-gpa';
      };
      
    const totalStudents = students.length;
    const averageAge = (students.reduce((sum,student) => sum + parseFloat(student.age || 0),0)/totalStudents).toFixed(2) || 0;
    const averageGpa = (students.reduce((sum,student) => sum + parseFloat(student.gpa || 0),0)/totalStudents).toFixed(2) || 0;
    return(
        <>
        <div className='fulldiv'>
            <div className='studentlist'>
            <h2 ><center>Student List</center></h2>
            <form onSubmit={handleSubmit}>
                <label>Registration number: </label>
                <input 
                    type='text'
                    name='registrationNumber'
                    placeholder='ex:- 2020/ict/51'
                    value={formData.registrationNumber}
                    onChange={handleChange}
                />
                <br/>
                <label>Name:</label>
                <input 
                    type='text'
                    name="name"
                    placeholder='Enter your name'
                    value={formData.name}
                    onChange={handleChange}
                />
                <br/>
                <label>Age:</label>
                <input 
                    type='number'
                    name="age"
                    placeholder='Enter your age'
                    value={formData.age}
                    onChange={handleChange}
                />
                <br/>
                <label>Course:</label>
                <input 
                    type='text'
                    name='course'
                    placeholder='Enter your course'
                    value={formData.course}
                    onChange={handleChange}
                />
                <br/>
                <label>GPA:</label>
                <input 
                    type='number'
                    name='gpa'
                    placeholder='please enter your gpa'
                    value={formData.gpa}
                    onChange={handleChange}
                    step="0.1"
                    max="4.0"
                />
                <br/>
                <button type="submit">Add Student</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}

      {students.length === 0 ? (
        <p>No students have been added yet.</p>
      ) : (
        <>
          <h2><center>Student Details</center></h2>
          <ul>
            {students.map((student) => (
              <li key={student.registrationNumber}>
                <p>Registration Number: {student.registrationNumber}</p>
                <p>Name: {student.name}</p>
                <p>Age: {student.age}</p>
                <p>Course: {student.course}</p>
                <p>
                     GPA: <span className={getGpaClass(student.gpa)}>{student.gpa}</span> 
                    <span className={getGpaClass(student.gpa)}> ({getGrade(student.gpa)})</span>
                </p>
                <button onClick={() => handleDelete(student.registrationNumber)}>Delete</button>
                <hr />
              </li>
            ))}
          </ul>
        </>
      )}
            </form>
            </div>
            <div className='summery'>
            <h2><center>Summary</center></h2>
            <p>Total Students: {totalStudents}</p>
            <p>Average Age: {averageAge}</p>
            <p>Average GPA: {averageGpa}</p>
            </div>
        </div>
        <div className='end'>
        <Footer/>
        </div>
        </>
    );
}
export default GpaCal;