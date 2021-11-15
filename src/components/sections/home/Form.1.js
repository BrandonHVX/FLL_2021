// import React from "react";
// import { useState, useEffect } from "react";

// const Form = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const [errors, setErrors] = useState({});
//   const validate = formData => {
//     let formErrors = {};
//     if (!formData.name) {
//       formErrors.name = "Name required";
//     }
//     if (!formData.email) {
//       formErrors.email = "Email required";
//     }
//     if (!formData.message) {
//       formErrors.message = "Message is required";
//     }
//     return formErrors;
//   };

//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = e => {
//     setErrors(validate(formData));
//     setIsSubmitted(true);
//     e.preventDefault();
//   };

//   const encode = data => {
//     return Object.keys(data)
//       .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//       .join("&");
//   };

//   useEffect(() => {
//     if (Object.keys(errors).length === 0 && isSubmitted) {
//       fetch("/", {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: encode({ "form-name": "contact", ...formData })
//       })
//         .then(() => alert("Success!"))
//         .then(() => setIsSubmitted(false))
//         .then(() => setFormData({ name: "", email: "", message: "" }))
//         .catch(error => alert(error));
//     }
//   }, [errors, formData, isSubmitted]);

//   // console.log(errors, formData)
//   return (
//     <div className="contact-form">
//       <h1> Sample Form </h1>
//       <form
//         onSubmit={handleSubmit}
//         name="contact"
//         method="post"
//         data-netlify="true"
//         data-netlify-honeypot="bot-field"
//       >
//         <input type="hidden" name="form-name" value="contact" />
//         <div>
//           <label htmlFor="name" className="form-label">
//             Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//           {errors.name && <p>{errors.name}</p>}
//         </div>
//         <div>
//           <label htmlFor="email" className="form-label">
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           {errors.email && <p>{errors.email}</p>}
//         </div>
//         <div className="form-inputs">
//           <label htmlFor="message" className="form-label">
//             Message
//           </label>
//           <textarea
//             name="message"
//             id="message"
//             value={formData.message}
//             onChange={handleChange}
//           />
//           {errors.message && <p>{errors.message}</p>}
//         </div>
//         <button type="submit" className="form-input-btn">
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Form;

<form>
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
      className="form-control"
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
      className="form-control"
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
      className="form-control"
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
      className="form-control"
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
      className="form-control"
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
      className="form-control"
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
      className="form-control"
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
      className="form-control"
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
      className="form-control"
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
      className="form-control"
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
      className="form-control"
      name="zip"
      id="zip"
      value={formData.zip}
      onChange={handleChange}
    />
    {errors.zip && <p>{errors.zip}</p>}

    <p>
      <label>
        Dog’s Picture: <input type="file" name="picture" />
      </label>
    </p>
  </div>
  {/* /////// */}

  <button type="submit" className="form-input-btn">
    Send
  </button>
</form>;
