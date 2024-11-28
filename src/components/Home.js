import Footer from './Footer';
import './Home.css'
import { CgStopwatch } from "react-icons/cg";
import { CgSlack } from "react-icons/cg";
import { FaRankingStar } from "react-icons/fa6";
import { FaCalculator } from "react-icons/fa";
import { Link } from 'react-router-dom';  

function Home(){
    return(
        <>
        <center><h1>Welcome to the student portal</h1></center>
        <p><center>
            The Student Portal is a web application designed to provide students with a 
            centralized platform for accessing key academic and personal information.<br/> 
            It offers a user-friendly interface to streamline tasks and improve communication between students and
            the administration.
            <br/> The portal ensures an efficient and organized approach to managing educational resources,
            academic progress, and other student-related activities.</center></p>
            <div className='container1'>
            <div className="card1" >
            <CgStopwatch className='log1'/>
            <p className='text1'> 24 X 7 support</p>
            </div>
            <div className="card2">
            <CgSlack className='log2'/>
            <p className='text2'> Flexible courses</p>
            </div>
            <div className="card3">
            <FaRankingStar className='log3' />
            <p className='text3'> Ranking system</p>
            </div>
            <div className="card4">
            <FaCalculator className='log4'/>
            <p className='text4'> GPA Calculator </p>
            </div>
            </div>
            <div>
                <p className='lasttext'>Please log in to continue  <Link to='/login'>Login</Link></p> {/* Use Link for navigation */}
            </div>
            <div className='end'></div>
            <Footer/>
        </>
    );
}

export default Home;
