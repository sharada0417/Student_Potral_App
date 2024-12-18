import Home from './pages/Home';
import './css/NavBar.css'
import { BrowserRouter as Router , Route , Link , NavLink , Routes } from 'react-router-dom';
import StudentDetails from './StudentDetails';
import Course from './pages/Course';
import Ranking from './pages/Ranking';
import ContactUs from './pages/ContactUs';
import GpaCal from './pages/GpaCal';
import Login from './pages/Login';

function NavBar(){
    return(
        <>
        <div className='Header'>
        <p className='Header'>Student Potral</p>
        </div>
        <Router>
        <table className="navBar">
            <tbody>
                <tr>
                    <nav>
                    <th><Link to='/home'>Home</Link></th>
                    <th><Link to='/stud'>Student Details</Link></th>
                    <th><Link to='/course'>Courses</Link></th>
                    <th><Link to='/gpacal'>Gpa Class</Link></th>
                    <th><Link to='/ranking'>Ranking</Link></th>
                    <th><Link to='/contact'>Contact Us</Link></th>
                    </nav>
                </tr>
            </tbody>
        </table>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/stud' element={<StudentDetails/>}/>
            <Route path='/course' element={<Course/>}/>
            <Route path='/gpacal' element={<GpaCal/>}/>
            <Route path='/ranking' element={<Ranking/>}/>
            <Route path='/contact' element={<ContactUs/>}/>
        </Routes>
        </Router>
        </>
    );
}
export default NavBar