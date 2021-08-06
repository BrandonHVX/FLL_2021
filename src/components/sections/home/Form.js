import React from "react";
import { useState, useEffect } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const [errors, setErrors] = useState({});
  const validate = formData => {
    let formErrors = {};
    if (!formData.name) {
      formErrors.name = "Name required";
    }
    if (!formData.email) {
      formErrors.email = "Email required";
    }
    if (!formData.message) {
      formErrors.message = "Message is required";
    }
    return formErrors;
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = e => {
    setErrors(validate(formData));
    setIsSubmitted(true);
    e.preventDefault();
  };

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitted) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData })
      })
        .then(() => alert("Success!"))
        .then(() => setIsSubmitted(false))
        .then(() =>
          setFormData({
            firstname: "",
            lastname: "",
            dob: "",
            social: "",
            email: "",
            street: "",
            city: "",
            state: "",
            zip: "",
            phone: "",
            message: ""
          })
        )
        .catch(error => alert(error));
    }
  }, [errors, formData, isSubmitted]);

  // console.log(errors, formData)
  return (
    <section className="contact-section " id="contact">
      <div className="container">
        <div className="contact-inner mt-negative grey-bg">
          <div className="contact-form">
            <form
              onSubmit={handleSubmit}
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              {" "}
              <div className="row gutters">
                <div className="col-sm-6">
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="row">
                    <div className="col-lg-6">
                      {" "}
                      <label htmlFor="name" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                      />
                      {errors.firstname && <p>{errors.firstname}</p>}
                    </div>
                    <div className="col-lg-6">
                      {" "}
                      <label htmlFor="name" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                      />
                      {errors.lastname && <p>{errors.lastname}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="form-label">
                      Social Security #
                    </label>
                    <input
                      type="text"
                      name="social"
                      id="social"
                      value={formData.social}
                      onChange={handleChange}
                    />
                    {errors.social && <p>{errors.social}</p>}
                  </div>
                </div>
                <div className="col-sm-6">
                  <input type="hidden" name="form-name" value="contact" />
                  <div>
                    <label htmlFor="name" className="form-label">
                      Date of Birth
                    </label>
                    <input
                      type="text"
                      name="dob"
                      id="dob"
                      value={formData.dob}
                      onChange={handleChange}
                    />
                    {errors.dob && <p>{errors.dob}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                  </div>
                </div>
                <div className="row">
                  <h6>Hello</h6>
                  <div className="col-sm-6">
                    <input type="hidden" name="form-name" value="contact" />
                    <div>
                      <label htmlFor="name" className="form-label">
                        Street Address
                      </label>
                      <input
                        type="text"
                        name="street"
                        id="street"
                        value={formData.street}
                        onChange={handleChange}
                      />
                      {errors.street && <p>{errors.street}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="form-label">
                        State
                      </label>
                      <input
                        type="state"
                        name="state"
                        id="state"
                        value={formData.state}
                        onChange={handleChange}
                      />
                      {errors.state && <p>{errors.state}</p>}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <input type="hidden" name="form-name" value="contact" />
                    <div>
                      <label htmlFor="name" className="form-label">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        value={formData.city}
                        onChange={handleChange}
                      />
                      {errors.city && <p>{errors.city}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="form-label">
                        Zip
                      </label>
                      <input
                        type="zip"
                        name="zip"
                        id="zip"
                        value={formData.zip}
                        onChange={handleChange}
                      />
                      {errors.zip && <p>{errors.zip}</p>}
                    </div>{" "}
                    <button type="submit" className="form-input-btn">
                      Send
                    </button>
                  </div>{" "}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
