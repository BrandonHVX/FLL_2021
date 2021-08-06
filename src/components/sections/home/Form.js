import React from "react";
import { useState, useEffect } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    dob: "",
    social: "",
    email: "",
    street: "",
    aptno: "",
    sex: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
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
    if (!formData.firstname) {
      formErrors.firstname = "Name required";
    }
    if (!formData.email) {
      formErrors.email = "Email required";
    }
    if (!formData.lastname) {
      formErrors.lastname = "Message is required";
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
            aptno: "",
            sex: "",
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
    <section className="" id="contact">
      <div className="container">
        <div className=" grey-bg">
          <div className="">
            <h1> Sample Form </h1>
            <form
              onSubmit={handleSubmit}
              name="contact"
              method="post"
              class="row g-3"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="col-md-3">
                <label htmlFor="firstname" className="form-label">
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
              <div className="col-md-3">
                <label htmlFor="lastname" className="form-label">
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
              <div className="col-md-2">
                <label htmlFor="sex" className="form-label">
                  Sex
                </label>
                <input
                  type="text"
                  name="sex"
                  id="sex"
                  value={formData.sex}
                  onChange={handleChange}
                />
                {errors.sex && <p>{errors.sex}</p>}
              </div>
              <div className="col-md-4">
                <label htmlFor="dob" className="form-label">
                  Date Of Birth
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
              <div className="col-md-4">
                <label htmlFor="social" className="form-label">
                  Social Security Number
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
              <div className="col-md-4">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
              </div>
              <div className="col-md-4">
                <label htmlFor="email" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <p>{errors.phone}</p>}
              </div>
              <div className="col-md-10">
                <label htmlFor="email" className="form-label">
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
              <div className="col-md-2">
                <label htmlFor="email" className="form-label">
                  Apt #
                </label>
                <input
                  type="text"
                  name="aptno"
                  id="aptno"
                  value={formData.aptno}
                  onChange={handleChange}
                />
                {errors.aptno && <p>{errors.aptno}</p>}
              </div>
              <div className="col-md-4">
                <label htmlFor="email" className="form-label">
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
              <div className="col-md-4">
                <label htmlFor="email" className="form-label">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  value={formData.state}
                  onChange={handleChange}
                />
                {errors.state && <p>{errors.state}</p>}
              </div>
              <div className="col-md-4">
                <label htmlFor="email" className="form-label">
                  Zip
                </label>
                <input
                  type="text"
                  name="zip"
                  id="zip"
                  value={formData.zip}
                  onChange={handleChange}
                />
                {errors.zip && <p>{errors.zip}</p>}
              </div>

              <button type="submit" className="form-input-btn">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
