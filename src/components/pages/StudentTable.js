import { useState } from "react";
import '../css/StudentTable.css'
import Profile from "../Profile";


function StudentTable(props){
    const [item,setitem] = useState(props.students[0]);
    return(
        <>
        <div className="outerDiv">
            <div className="leftDiv">
                {" "}
                <table border="1">
                    <thead>
                        <tr>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Course</th>
                          <th>Country</th>
                          <th>Profile</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.students.map((item,index)=>(
                            <tr key={index}>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.course}</td>
                                <td>{item.address.country}</td>
                                <td>
                                    <button onClick={() => setitem(item)}>view</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="rightDiv">
               <Profile student={item}/>
            </div>
        </div>
        
        </>
    );
}
export default StudentTable;