import './css/StudentTable.css'
function Profile(props){
    return(
        <>
        <div className="profile">
            <div className="leftDiv">
            <img
            className="profile"
            src={require("../assets/profilepic/" + props.student.profilePic)}
            alt="Profile"
          />
        </div>
        <div className="rightDiv">
            <table border="1">
            <tbody>
                <tr>
                    <td>ID: {props.student.studentId}</td>
                </tr>
                <tr>
                    {" "}
                    <td>
                        Full Name:{" "}
                        {props.student.firstName+ " " +props.student.lastName}
                    </td>
                </tr>
                <tr>
                    <td>Age: {props.student.age}</td>
                </tr>
                <tr>
                    <td>Course: {props.student.course}</td>
                </tr>
                <tr>
                    {" "}
                    <td>Address: {props.student.address.country}</td>
                </tr>
                <tr>
                    <td>Skills: {props.student.skills}</td>
                </tr>
                </tbody>
            </table>
        </div>
        </div>
        </>
    );
}
export default Profile;