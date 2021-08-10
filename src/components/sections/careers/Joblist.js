import React from "react";
import { Link } from "gatsby";

const joblisting = [
  {
    jobtitle: "Driver",
    jobtime: "Full Time",
    text:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium doloremque laudantium totam rem aperiam",
    btntext: "apply now"
  }
];

export default () => {
  return (
    <section className="job-list-section section-gap grey-bg">
      <div className="container">
        <div className="job-lists">
          {joblisting.map((item, i) => (
            <div key={i} className="single-job">
              <h4 className="title">
                {item.jobtitle}{" "}
                <span className="job-time">({item.jobtime})</span>
              </h4>
              <p>{item.text}</p>
              <Link to="/drivers" className="apply-btn">
                {item.btntext} <i className="far fa-long-arrow-right" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
