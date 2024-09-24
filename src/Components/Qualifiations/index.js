import React from 'react';
import './style.scss';

const Qualifications = () => {
  return (
    <>
      <div className='header'>
        <h2> Qualifications </h2>
      </div>
      <div className="qualifications">
        <div className="section">
          <h2>Experience</h2>

          <div className="experience">
            <h3>ALX Projects (2023)</h3>
            <ul>
              <li>Developed a Unix shell in C, implementing process creation, I/O redirection, and signal handling.</li>
              <li>GitHub: <a href="https://github.com/mary-garachu/simple_shell.git" target="_blank" rel="noopener noreferrer">Simple Shell</a></li>
              <li>Contributed to the Airbnb clone in Python with features like object initialization and data management.</li>
              <li>GitHub: <a href="https://github.com/mary-garachu/AirBnB_clone.git" target="_blank" rel="noopener noreferrer">Airbnb Clone</a></li>
            </ul>

            <h3>M-TIBA (2022)</h3>
            <ul>
              <li>Software Engineer Intern - Provided technical support and enhanced platform portals using TypeScript, Angular, and MySQL.</li>
            </ul>

            <h3>Andela Clone (2021)</h3>
            <ul>
              <li>Successfully cloned Andela's hire talents website using HTML and SCSS.</li>
              <li>GitHub: <a href="https://github.com/mary-garachu/andela-clone.git" target="_blank" rel="noopener noreferrer">Andela Clone</a></li>
            </ul>

            <h3>Carepay Clone (2021)</h3>
            <ul>
              <li>Created a clone of Carepay, a tech company offering insurance services in Kenya and Nigeria using HTML and CSS.</li>
              <li>GitHub: <a href="https://github.com/mary-garachu/carepay.git" target="_blank" rel="noopener noreferrer">Carepay Clone</a></li>
            </ul>
          </div>
        </div>

        <div className="divider"></div> {/* Border divider between Experience and Education */}

        <div className="section">
          <h2>Education</h2>

          <div className="education">
            <h3>ALX Africa (July 2023 - July 2024)</h3>
            <p>Software Engineering program focused on C, Python, JavaScript, with specialization in Frontend or Backend development.</p>

            <h3>Kenyatta University (2014-2019)</h3>
            <p>Bachelor's Degree in Exercise and Sport Science.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Qualifications;
