'use client'
import Link from "next/link";
import React from "react";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event:any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a41d5751-219f-46a7-b11f-76b46897a7dd");

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
    <section className="contact">
      <div id="contact">
        <div className="row">
          <div className="contact-left">
            <div>
              <h1 className="sub-title"> Contact Me</h1>
              <div className="contact-link">
                <p>
                  <i className="bx bx-send"></i>contact@gmail.com
                </p>
                <p>
                  <i className="bx bx-phone"></i>0987654321
                </p>
              </div>

              <div className="flex-contant">
                <div className="social-icons">
                  <Link href="">
                    <i className="bx bxl-facebook"></i>
                  </Link>
                  <Link href="">
                    <i className="bx bxl-twitter"></i>
                  </Link>
                  <Link href="">
                    <i className="bx bxl-instagram"></i>
                  </Link>
                  <Link href="">
                    <i className="bx bxl-linkedin"></i>
                  </Link>
                </div>
                <div className="btn-box">
                  <a
                    href="../images/261020.jpg"
                    download
                    className="downloadBtn"
                  >
                    Downloade CV
                  </a>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
          <div className="contact-right">
            <form onSubmit={onSubmit}>
              <input
                type="hidden"
                name="access_key"
                value="a41d5751-219f-46a7-b11f-76b46897a7dd"
              />
              <input
                type="text"
                name="name"
                autoComplete="off"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                autoComplete="off"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                rows={6}
                autoComplete="off"
                placeholder="Your Message"
              ></textarea>
              <div className="btn-box">
                <button className="btn" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
