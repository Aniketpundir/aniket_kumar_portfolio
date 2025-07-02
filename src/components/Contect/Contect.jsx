import React from "react";
import "./contect.css";
import location from "../../assets/location_icon.svg";
import mail from "../../assets/mail_icon.svg";
import call from "../../assets/call_icon.svg";

const Contect = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a92a337a-3727-42f0-8347-cbf247e16ce1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div id="contact" className="contect">
        <h1>Get in touch</h1>
        <div className="contect-sections">
          <div className="contect-text">
            <h2>Let's talk</h2>
            <p>
              I'm currently avaliable to take on new projects, so feel free to
              send me a message about anything that you want me to work on. You
              can contact anytime
            </p>
            <hr />
            <div className="contect-info">
              <span>
                <img src={mail} /> aniketpundir348@gmail.com
              </span>
              <span>
                <img src={call} /> +91 9528745292
              </span>
              <span>
                <img src={location} /> Muzaffarnagar, Uttar Pradesh
              </span>
            </div>
          </div>
          <div className="contect-form">
            <form onSubmit={onSubmit}>
              <label htmlFor="">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                required
              />
              <label htmlFor="">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                required
              />
              <label htmlFor="">Write your message here</label>
              <textarea
                name="message"
                rows="8"
                placeholder="Enter your message"
              ></textarea>
              <button className="submit-button" type="submit">
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contect;
