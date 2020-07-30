import React from "react"
import main from "../img/main.png"
import mountain from "../img/mountain.svg"
import map from "../img/map.svg"
import lens from "../img/lens.svg"
import "../css/home.css"

const Physicshomepage = () => {
  return (
    <div className="depsection">
      <div className="dmainrow dmainrowmain">
        <div className="col-6">
          <div className="row rowmarl3">
            <h1 data-aos="zoom-in-right">Physics Department</h1>
          </div>
          <div className="row rowmarl3">
            <h2 data-aos="zoom-in-right">
              “The computer was born to solve problems that did not exist
              before.”
            </h2>
          </div>
          <div className="row rowmarl3">
            <h2 data-aos="zoom-in-right" id="aut">
              — Bill Gates
            </h2>
          </div>
        </div>
        <div className="col-6 imgcolstyle">
          <img
            data-aos="zoom-in"
            src={main}
            className="img-fluid"
            loading="lazy"
          />
        </div>
      </div>
      <div className="dmainrow">
        <div className="depabout">
          <div className="row">
            <h1 data-aos="zoom-in">About</h1>
          </div>
          <div className="row">
            <p data-aos="zoom-in">
              The Department of Physics was established in 1924 and since then
              has been functioning as an important part of the institute. As of
              now, the Department has eight faculty members and four support
              staffs at different levels.
              <br />
              <br />
              At present, there are 12 students enrolled in Integrated M. Sc.
              And 8 students enrolled in the Ph. D. program.
              <br />
              <br />
              The Department is mentored by Prof. K.L.Chopra ,Ex-Director,IIT
              Kharagpur.
            </p>
          </div>
        </div>
      </div>
      <div className="dmainrow dmainrow1">
        <div className="col-6 imgcolstyle">
          <img
            data-aos="zoom-in"
            src={mountain}
            className="img-fluid"
            loading="lazy"
          />
        </div>
        <div className="col-6">
          <div className="row rowmarr3">
            <h1 data-aos="zoom-in-left">Mission</h1>
          </div>
          <div className="row rowmarr3">
            <p data-aos="zoom-in-left">
              To train the students to be lifelong learners who will contribute
              to the creation of new knowledge, new technology, and innovation
              through excellence in research in emerging areas and disciplines.
              <br />
              <br />
              To educate students to be future leaders in science, technology,
              industry, education and other professions and succeed in a
              globally competitive environment.
              <br />
              <br />
              To create National and International collaborations for research
              engagement in strategic areas of research
              <br />
              <br />
              To create National and International collaborations for research
              engagement in strategic areas of research
            </p>
          </div>
        </div>
      </div>
      <div className="dmainrow">
        <div className="col-6">
          <div className="row rowmarl3">
            <h1 data-aos="zoom-in-right">Vision</h1>
          </div>
          <div className="row rowmarl3">
            <p data-aos="zoom-in-right">
              The vision of the Department is to achieve excellence in
              undergraduate and postgraduate education and research through a
              synergic combination and thereby lead to development of new
              knowledge.
            </p>
          </div>
        </div>
        <div className="col-6 imgcolstyle">
          <img
            data-aos="zoom-in"
            src={lens}
            className="img-fluid"
            loading="lazy"
          />
        </div>
      </div>
      <div className="dmainrow dmainrow1">
        <div className="col-6 imgcolstyle">
          <img
            data-aos="zoom-in"
            src={map}
            className="img-fluid"
            loading="lazy"
          />
        </div>
        <div className="col-6">
          <div className="row rowmarr3">
            <h1 data-aos="zoom-in-left">Contact</h1>
          </div>
          <div className="row rowmarr3">
            <p data-aos="zoom-in-left">
              Department of Physics,
              <br />
              <br />
              National Institute Of Technology Patna,
              <br />
              Ashok Rajpath, Patna - 800005.
              <br />
              <br />
              Email: head.ph@nitp.ac.in
              <br />
              <br />
              Extn: +91-612-(2371715/2715/2371929/
              <br />
              2370419/2370843/2371930) * 163
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Physicshomepage
