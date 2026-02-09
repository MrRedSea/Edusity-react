import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  
// This piece of code for the contact form is from WEB3FORMS, a free form backend API for static sites. 
// I used it to handle the form submission and send the data to my email address. 
// You can find more about it on their website https://web3forms.com/
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "1d470eb0-a5ce-4565-bdf4-6366d8e7caed");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };
// Up to this point, the code is for handling the form submission and sending the data to the email address specified in the WEB3FORMS dashboard. The rest of the code is for rendering the contact form and displaying the contact information.

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send Us a Message <img src={msg_icon} alt="Message Icon" /></h3>
            <p>Feel free to reach out through contact form or find our contact
            information below.Your feedbacks,questions, and suggestions are 
            important to us as we strive toprovide exceptional services to our 
            university community.</p>
            <ul>
                <li><img src={mail_icon} alt="Mail Icon" /> Contact@edusity.edu</li>
                <li><img src={phone_icon} alt="Phone Icon" /> +234 803 456 7890</li>
                <li><img src={location_icon} alt="Location Icon" /> 123 Education Ave, Lagos City <br />Nigeria.</li>
            </ul>
        </div>

        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter full name' required/>

            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required/>

            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder='Enter your message here' required></textarea>
            <button type="submit" className='btn dark-btn'>Send Message <img src={white_arrow} alt="White Arrow" /></button>
          </form>
          <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact