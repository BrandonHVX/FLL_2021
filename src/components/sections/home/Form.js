import React from "react";
import { useState, useEffect } from "react";
// you will need the css that comes with bootstrap@3. if you are using
// a tool like webpack, you can do the following:

// you will also need the css that comes with bootstrap-daterangepicker

const Form = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    sex: "",
    dob: "",
    experience: "",
    email: "",
    phone: "",
    street: "",
    aptno: "",
    city: "",
    state: "",
    zip: ""
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
            sex: "",
            dob: "",
            experience: "",
            email: "",
            phone: "",
            street: "",
            aptno: "",
            city: "",
            state: "",
            zip: ""
          })
        )
        .catch(error => alert(error));
    }
  }, [errors, formData, isSubmitted]);

  // console.log(errors, formData)
  return (
    <section className="form" id="contact">
      <div className="container">
        <div className="pt-2">
          <div className="pb-5">
            <h2> Driver Job Inquiry Form </h2>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          class="row g-3 needs-validation grey-bg "
          novalidate
        >
          <input type="hidden" name="form-name" value="contact" />

          <div class="col-md-4">
            <label for="validationCustom01" class="form-label">
              First Name
            </label>

            <input
              type="text"
              className="form-control"
              name="firstname"
              id="firstname"
              value={formData.firstname}
              onChange={handleChange}
            />
            {errors.firstname && <p>{errors.firstname}</p>}
          </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              className="form-control"
              id="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
            {errors.lastname && <p>{errors.lastname}</p>}
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-3">
            <label for="validationCustom04" class="form-label">
              Sex
            </label>
            <select
              type="text"
              name="sex"
              className="form-control form-select"
              id="sex"
              value={formData.sex}
              onChange={handleChange}
              id="inputGroupSelect01"
              id="validationCustom04"
              required
            >
              <option selected disabled value="">
                Choose...
              </option>
              <option value="1">Male</option>
              <option value="2">Female</option>
            </select>
            <div class="invalid-feedback"></div>
          </div>

          <div class="col-md-4">
            <label for="validationCustom03" class="form-label">
              Date of Birth
            </label>
            <input
              type="text"
              name="dob"
              className="form-control"
              id="dob"
              value={formData.dob}
              onChange={handleChange}
            />
            {errors.dob && <p>{errors.dob}</p>}
          </div>
          <div class="col-md-4">
            <label for="validationCustom03" class="form-label">
              Email
            </label>
            <input
              type="text"
              name="email"
              className="form-control"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
            <div class="invalid-feedback">Please select a valid state.</div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom05" class="form-label">
              Phone
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom05"
              required
            />
            <div class="invalid-feedback">Please provide a valid zip.</div>
          </div>
          <div class="col-md-6">
            <label for="validationCustom03" class="form-label">
              Industry Experience
            </label>
            <select
              type="text"
              name="experience"
              className="form-control form-select"
              id="experience"
              value={formData.experience}
              onChange={handleChange}
              id="inputGroupSelect01"
              id="validationCustom04"
              required
            >
              <option selected disabled value="">
                Choose...
              </option>
              <option value="1">Box Truck Driver</option>
              <option value="2">Long Haul Driver w/CDL</option>
              <option value="3">Warehouse/Shipping</option>
            </select>
          </div>
          <div class="col-md-3">
            <label for="validationCustom04" class="form-label">
              Years of Experience
            </label>
            <select class="form-select" id="validationCustom04" required>
              <option selected disabled value="">
                Choose...
              </option>
              <option value="1">1-3 years</option>
              <option value="2">3-5 years</option>
              <option value="3">5+ Years</option>
            </select>
            <div class="invalid-feedback">Please select a valid state.</div>
          </div>

          <div class="col-12">
            <p>
              <label>
                Resume Upload (Required): <input type="file" name="picture" />
              </label>
            </p>
          </div>

          <div class="col-12 ">
            <button class="btn btn-primary m-2" type="submit">
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
