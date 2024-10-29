"use client";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: any) => {
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
      toast.success("Form Submitted Successfully")
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section id="contact" className="contact">
      <button onClick={()=>name}>nirmalaala</button>
      <div>
        <div className="row">
          <div className="contact-left">
            <div>
              <h1 className="sub-title font-nunito"> Contact Me</h1>
              <div className="contact-link">
                <p className="font-nunito">
                  <i className="bx bx-send"></i>contact@gmail.com
                </p>
                <p className="font-nunito">
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
                    className="downloadBtn font-nunito"
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
                className="font-nunito"
                type="hidden"
                name="access_key"
                value="a41d5751-219f-46a7-b11f-76b46897a7dd"
              />
              <input
                className="font-nunito"
                type="text"
                name="name"
                autoComplete="off"
                placeholder="Your Name"
                required
              />
              <input
                className="font-nunito"
                type="email"
                name="email"
                autoComplete="off"
                placeholder="Your Email"
                required
              />
              <textarea
                className="font-nunito"
                name="message"
                rows={6}
                autoComplete="off"
                placeholder="Your Message"
              />
              <div className="btn-box">
                <button className="btn font-nunito" type="submit">
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
