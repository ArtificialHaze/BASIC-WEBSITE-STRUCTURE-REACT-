import React from "react";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact us</h1>
        <form action="#">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required placeholder="Name.." />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required placeholder="Email.." />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="name" rows={5} required placeholder="Message.." />
          </div>
          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
