import React, { useState } from "react";
const Anothertry = () => {
  const [userinfo, setUserInfo] = useState({
    fields: [],
    response: [],
  });

  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { fields } = userinfo;

    console.log(`${value} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        fields: [...fields, value],
        response: [...fields, value],
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setUserInfo({
        fields: fields.filter((e) => e !== value),
        response: fields.filter((e) => e !== value),
      });
    }
  };
  return (
    <div className="container-fluid top ">
      <div className="container mt-5  pb-5 pt-5">
        <h3 className="form-head-contact-h3 ">
          Your programming expertise lies in what fields?{" "}
        </h3>

        <form>
          <div className="row">
            <div className="col-md-6">
              <div className="form-check m-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="fields"
                  value="DS"
                  id="flexCheckDefault"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  DS
                </label>
              </div>
              <div className="form-check m-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="fields"
                  value="AI"
                  id="flexCheckDefault"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Artificial Intelligence
                </label>
              </div>
              <div className="form-check m-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="fields"
                  value="BS"
                  id="flexCheckDefault"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Business
                </label>
              </div>
              <div className="form-check m-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="fields"
                  value="DES"
                  id="flexCheckDefault"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  DES
                </label>
              </div>
              <div className="form-check m-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="fields"
                  value="PHP"
                  id="flexCheckDefault"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  PHP
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-check m-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="fields"
                  value="C#"
                  id="flexCheckDefault"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  C#
                </label>
              </div>
              <div className="form-check m-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="fields"
                  value="C++"
                  id="flexCheckDefault"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  C++
                </label>
              </div>
              <div className="form-check m-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="fields"
                  value="C"
                  id="flexCheckDefault"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  C
                </label>
              </div>
              <div className="form-check m-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="fields"
                  value="Typescript"
                  id="flexCheckDefault"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Typescript
                </label>
              </div>
            </div>
          </div>

          <div className="form-floating mt-3 mb-3 text-center">
            {console.log(userinfo.response)}
            <label htmlFor="exampleFormControlTextarea1">
              You're proficient in the following fields :{" "}
            </label>
            <textarea
              className="form-control text"
              name="response"
              value={userinfo.response}
              placeholder="The checkbox values will be displayed here "
              id="floatingTextarea2"
              style={{ height: "150px" }}
              onChange={handleChange}
            ></textarea>
          </div>
        </form>
        {console.log}
      </div>
    </div>
  );
};

export default Anothertry;
