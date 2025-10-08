import React from 'react'
import './Contact.css'
import theme from '../../assets/theme_pattern.svg'
import call from '../../assets/call_icon.svg'
import mail from '../../assets/mail_icon.svg'
import location from '../../assets/location_icon.svg'
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0aaeee45-b150-403d-afaa-1c87dbc3cba4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        toast.success("Message sent successfully! 🚀");
        event.target.reset();
      } else {
        toast.error("Something went wrong. Please try again ❌");
      }
    } catch (error) {
      toast.error("Network error. Please check your connection.");
    }
  };

  return (
    <div id='Contact' className='contact'>
      <div className="contact-title">
        <h1>Contact Me</h1>
        <img src={theme} alt="theme" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <div className="contact-detail">
            <img src={call} alt="call" /><p>+91-8100662575</p>
          </div>

          <div className="contact-detail">
            <img src={mail} alt="mail" /><p>sohammondal707@gmail.com</p>
          </div>

          <div className="contact-detail">
            <img src={location} alt="location" /><p>West Bengal, India</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' required />
          <label htmlFor="">Your E-Mail</label>
          <input type="email" placeholder='Enter Your e-mail' name='email' required />
          <label htmlFor="">Enter Message</label>
          <textarea placeholder='Enter the message' name='message' required />
          <button type='submit'>Submit</button>
        </form>
      </div>

     
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  )
}

export default Contact
