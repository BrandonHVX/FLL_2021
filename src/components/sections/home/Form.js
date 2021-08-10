import React from "react";
import { useState, useEffect } from "react";
// you will need the css that comes with bootstrap@3. if you are using
// a tool like webpack, you can do the following:

// you will also need the css that comes with bootstrap-daterangepicker

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
    message: "",
    school: "",
    diploma: "",
    employer: "",
    employersupervisor: "",
    employerphone: "",
    startdate: "",
    enddate: "",
    jobduties: "",
    jobexp: "",
    cpuexp: "",
    manageexp: "",
    accidents: "",
    accidentsexp: "",
    violations: "",
    violationsexp: "",
    refname: "",
    refphone: "",
    refemail: "",
    signature: "",
    date: ""
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
            message: "",
            school: "",
            diploma: "",
            employer: "",
            employersupervisor: "",
            employerphone: "",
            startdate: "",
            enddate: "",
            jobduties: "",
            jobexp: "",
            cpuexp: "",
            manageexp: "",
            accidents: "",
            accidentsexp: "",
            violations: "",
            violationsexp: "",
            refname: "",
            refphone: "",
            refemail: "",
            signature: "",
            date: ""
          })
        )
        .catch(error => alert(error));
    }
  }, [errors, formData, isSubmitted]);

  // console.log(errors, formData)
  return (
    <section className="" id="contact">
      <div className="container">
        <div className=" grey-bg  ">
          <div className="m-2">
            <h6> Personal Information</h6>
            <form
              onSubmit={handleSubmit}
              name="contact"
              method="post"
              class="row g-3"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="col-md-3  ">
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
              <div className="col-md-4">
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
                <select
                  type="text"
                  name="sex"
                  id="sex"
                  value={formData.sex}
                  onChange={handleChange}
                  class="form-select"
                  id="inputGroupSelect01"
                >
                  <option selected>Select</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                </select>
                {errors.sex && <p>{errors.sex}</p>}
              </div>
              <div className="col-md-3">
                <label htmlFor="social" className="form-label">
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
              {/* /////// */}
              <div className="row mt-5">
                <h6> Education</h6>
              </div>
              <div className="col-md-3">
                <label htmlFor="firstname" className="form-label">
                  School
                </label>
                <input
                  type="text"
                  name="school"
                  id="school"
                  value={formData.school}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-2">
                <label htmlFor="sex" className="form-label">
                  Diploma
                </label>
                <input
                  type="text"
                  name="diploma"
                  id="diploma"
                  value={formData.diploma}
                  onChange={handleChange}
                />
              </div>
              <div className="row mt-5">
                <h6> Employment History</h6>
              </div>
              <div className="col-md-2">
                <label htmlFor="sex" className="form-label">
                  Employer
                </label>
                <input
                  type="text"
                  name="employer"
                  id="employer"
                  value={formData.employer}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="dob" className="form-label">
                  employersupervisor
                </label>
                <input
                  type="text"
                  name="employersupervisor"
                  id="employersupervisor"
                  value={formData.employersupervisor}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="social" className="form-label">
                  employerphone
                </label>
                <input
                  type="text"
                  name="employerphone"
                  id="employerphone"
                  value={formData.employerphone}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="email" className="form-label">
                  startdate
                </label>
                <input
                  type="text"
                  name="startdate"
                  id="startdate"
                  value={formData.startdate}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="email" className="form-label">
                  enddate
                </label>
                <input
                  type="text"
                  name="enddate"
                  id="enddate"
                  value={formData.enddate}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-10">
                <label htmlFor="email" className="form-label">
                  jobduties
                </label>
                <input
                  type="text"
                  name="jobduties"
                  id="jobduties"
                  value={formData.jobduties}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-2">
                <label htmlFor="email" className="form-label">
                  jobexp
                </label>
                <input
                  type="text"
                  name="jobexp"
                  id="jobexp"
                  value={formData.jobexp}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="email" className="form-label">
                  cpuexp
                </label>
                <input
                  type="text"
                  name="cpuexp"
                  id="cpuexp"
                  value={formData.cpuexp}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="email" className="form-label">
                  manageexp
                </label>
                <input
                  type="text"
                  name="manageexp"
                  id="manageexp"
                  value={formData.manageexp}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="email" className="form-label">
                  accidents
                </label>
                <input
                  type="text"
                  name="accidents"
                  id="accidents"
                  value={formData.accidents}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="email" className="form-label">
                  accidentsexp
                </label>
                <input
                  type="text"
                  name="accidentsexp"
                  id="accidentsexp"
                  value={formData.accidentsexp}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="email" className="form-label">
                  violations
                </label>
                <input
                  type="text"
                  name="violations"
                  id="violations"
                  value={formData.violations}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="email" className="form-label">
                  violationsexp
                </label>
                <input
                  type="text"
                  name="violationsexp"
                  id="violationsexp"
                  value={formData.violationsexp}
                  onChange={handleChange}
                />
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
