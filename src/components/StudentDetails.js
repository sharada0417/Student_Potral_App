import { useState } from "react";
import StudentTable from "./StudentTable"
import { students } from "./data/studentsDb";
import './StudentTable.css'
import Footer from "./Footer";
function StudentDetails(){
    const [fontSize,setFontSize] = useState("16px");
    const changeFontSize=(size)=>{
        switch(size){
            case "small":
                setFontSize("16px");
                break;
            case "medium":
                setFontSize("20px");
                break;
            case "large":
                setFontSize("24px");
                break;
            default:
                setFontSize("16px")
        }
    }
    return(
        <>
        <div style={{fontSize}}>
            <div>
            <p>
                Font Size :
                <button onClick={()=>changeFontSize("small")} variant="primary">S</button>
                <button onClick={()=>changeFontSize("medium")} variant="success">M</button>
                <button onClick={()=>changeFontSize("large")} variant="warning">L</button>
            </p>
            </div>
            <hr/>
            <StudentTable students={students}></StudentTable>
        </div>
        <div className="footer">
            <Footer/>
        </div>
        </>
    );
}
export default StudentDetails;