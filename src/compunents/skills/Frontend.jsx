import React from "react";
const Frontend = () => {
  return (
    <div>
      <div className="skills__content">
        <h3 className="skills__title">Technical Skills</h3>

        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">HTML & CSS</h3>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">Javascript</h3>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">React Js</h3>
              </div>
            </div>
          </div>

          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">Frameworks and Libraries</h3>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">Responsive Design</h3>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">Testing and Debugging</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
