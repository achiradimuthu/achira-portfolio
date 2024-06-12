import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import {useSnackbar} from 'notistack';


function Contact() {

  const {enqueueSnackbar} = useSnackbar();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_e31z7o6", "template_chztdhp", form.current, {
        publicKey: "M4wjapt9fE4sRcszv",
      })
      .then(
        (result) => {
          console.log(result.text);
          // alert("Email sent.");
          enqueueSnackbar("Message sent successfully!", {variant: 'success'});
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact-main-div" id="contact">
      <div className="contact-content">
        <div className="contact-d1">
          <h1>Contact</h1>
          <h3>
            Feel free to reach out to me for any questions or opportunities!
          </h3>
        </div>
        <div className="contact-d2">
          <form ref={form} onSubmit={sendEmail}>
            <span>Email Me</span>
            <input
              type="email"
              placeholder="Your email"
              name="user_email"
              required
            />
            <input
              type="text"
              placeholder="Your name"
              name="user_name"
              required
            />
            <input type="text" placeholder="Subject" name="subject" required />
            <textarea placeholder="Message" name="message" required></textarea>
            <input className="send-btn" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
