import { useState } from "react";

export default function StudentCard({ student }) {
  const {
    names: { preferredName, middleName, surname },
    username,
    dob,
    profilePhoto,
  } = student;

  const date = new Date(dob);
  const birthDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const [show, setShow] = useState(false);

  return (
    <div className="student-card">
      <section className="image-student-info">
        <img src={profilePhoto} alt={`${preferredName} ${middleName} ${surname}`} />
      </section>

      <section className="student-info color-student-info">
        <h2>
          {preferredName} {middleName[0]}. {surname}
        </h2>
        <p>{username}</p>
        <p>
          <span className="birth-date">Birthday: </span> {birthDate}
        </p>
      </section>

      <section className="show-section">
        <section className="section-show-btn">
          <h4>
            <button className="show-btn" onClick={() => setShow(!show)}>
              {show ? "Less" : "More"}
            </button>
          </h4>
        </section>
      </section>
    </div>
  );
}
