import React from "react";
import emailjs from "emailjs-com";

function mailer() {
  function sendEmail(event) {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_escf7mf",
        "template_lvzhhma",
        event.target,
        "user_9W0zDMPkyDJCBEnO65xtf"
      )
      .then(alertMessage);
  }

  function alertMessage() {
    alert("Thank you for your message");
    window.location.reload();
  }

  return (
    <div className="mailer">
      <div
        className="container border"
        style={{
          marginTop: "50px",
          width: "50%",
          backgroundImage:
            "url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1 style={{ marginTop: "25px" }}>Contact Form</h1>
        <form
          className="row"
          style={{ margin: "25px 85px 75px 100px" }}
          onSubmit={sendEmail}
        >
          <label>Name</label>
          <input type="text" name="name" className="form-control" />

          <label>Email</label>
          <input type="text" name="user_email" className="form-control" />

          <label>Message</label>
          <textarea name="message" rows="4" className="form-control" />
          <input
            type="submit"
            value="Send"
            className="form-control btn btn-primary"
            style={{ marginTop: "30px" }}
          />
        </form>
      </div>
    </div>
  );
}

export default mailer;
