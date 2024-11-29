import '../css/ContactUs.css'
import Footer from '../Footer';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';
function ContactUs(){
        const [formData, setFormData] = useState({
            firstName: '',
            lastName: '',
            email: '',
            comment: ''
        });
    
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                ...formData,
                [name]: value
            });
        };
    
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(formData); // You can handle the form data here
            alert('Form submitted!');
        };
    return(
        <>
        <div className='fulldiv'>
            <div className='divleft'>
                <h1><center>Contact us</center></h1>
                <p>
                     We’d love to hear from you! Whether you have a question, feedback, or need assistance, our team is here <br/>to help. Reach out to us through the contact form, email, phone, or visit our office. We are dedicated <br/>
                     to providing timely support and ensuring a positive experience for all our visitors.Feel free to get in <br/>touch, and we’ll respond as quickly as possible. Your feedback matters to us!
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', alignItems: 'center' }}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} color="#4267B2" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                 <FaTwitter size={30} color="#1DA1F2" />
                 </a>
                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                 <FaInstagram size={30} color="#E4405F" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} color="#0A66C2" />
                </a>
                </div>
            </div>
            <div className="divright">
                <h1><center>Fill this form</center></h1>
            <form onSubmit={handleSubmit}>
                <label>First Name :</label>
                <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your First name"
                />
                <label>Last Name :</label>
                <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your Last name"
                />
                <label>Email :</label>
                <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your Email"
                />
                <label>Comment</label>
                <textarea 
                    name="comment" 
                    cols="2" 
                    rows="3"
                    value={formData.comment}
                    onChange={handleChange}
                    placeholder="Enter your Comment"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
        </div>
        <Footer/>
        </>
    );
}
export default ContactUs;