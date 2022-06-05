import React from "react";
import "./RMS.css";
import { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

function RMS() {
  const Submitrec = () => {
    if (
      form.RMSUserName === "" ||
      form.RMSUserContact === "" ||
      form.RMSUserObjective === "Select" ||
      form.RMSUserEmployee === "" ||
      form.RMSUserAdd === ""
    ) {
      alert("Please fill the required feilds!");
    } else {
      alert("Your response has been submitted successfully!");
    }
  };

  let history = useHistory();

  const [form, setForm] = useState({
    RMSUserName: "",
    RMSUserGender: "",
    RMSUserContact: "",
    RMSUserObjective: "",
    RMSUserGuest: "",
    RMSUserEmployee: "",
    RMSUserPI: "",
    RMSUserTI: "",
    RMSUserAdd: "",
    RMSUserremark: "",
  });
  const navigate = useHistory();

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  const HandleReport = (e) => {
    history.push("/RMS");
  };

  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };

    await fetch("http://localhost:5000/rms/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({
      RMSUserName: "",
      RMSUserGender: "",
      RMSUserContact: "",
      RMSUserObjective: "",
      RMSUserGuest: "",
      RMSUserEmployee: "",
      RMSUserPI: "",
      RMSUserTI: "",
      RMSUserAdd: "",
      RMSUserremark: "",
    });
    navigate.push("/");
  }

  return (
    <div>
      <div className="RMSHeader">
        <img src={require("../../Images/interview.jpg")} />
      </div>

      <div className="RMSMain container">
        <div className="RmsHeading">
          <h2>Reception Managment System</h2>
        </div>
        <div className="Joiningdiv1heading">
          <h4>Guest Employee Details</h4>
          <hr></hr>
        </div>
        <form action="/rms/add" onSubmit={onSubmit} method="POST">
          <div className="RMSdiv1">
            <div>
              <label for="RMSUserName">Name</label>
              <input
                type="text"
                required
                class="form-control"
                id="RMSUserName"
                value={form.RMSUserName}
                aria-describedby="emailHelp"
                placeholder="Enter Your Name"
                onChange={(e) => updateForm({ RMSUserName: e.target.value })}
              />
            </div>
            <div>
              <label for="RMSUserGender">Gender</label>
              <select
                id="RMSUserGender"
                value={form.RMSUserGender}
                class="form-control"
                onChange={(e) => updateForm({ RMSUserGender: e.target.value })}
              >
                <option selected>Select</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div>
              <label for="RMSUserContact">Contact No.</label>
              <input
                type="text"
                required
                class="form-control"
                id="RMSUserContact"
                value={form.RMSUserContact}
                aria-describedby="emailHelp"
                placeholder="Enter Your Contact No."
                onChange={(e) => updateForm({ RMSUserContact: e.target.value })}
              />
            </div>
            <div>
              <label for="RMSUserObjective">Objective</label>
              <select
                id="RMSUserObjective"
                required
                value={form.RMSUserObjective}
                class="form-control"
                onChange={(e) =>
                  updateForm({ RMSUserObjective: e.target.value })
                }
              >
                <option selected>Select</option>
                <option>Personal</option>
                <option>Official</option>
                <option>Casual</option>
              </select>
            </div>
            <div>
              <label for="RMSUserGuest">No. Of Guest</label>
              <input
                type="Number"
                class="form-control"
                id="RMSUserGuest"
                value={form.RMSUserGuest}
                aria-describedby="emailHelp"
                placeholder="Enter Your Contact No."
                onChange={(e) => updateForm({ RMSUserGuest: e.target.value })}
              />
            </div>
            <div>
              <label for="RMSUserEmployee">Employee Id</label>
              <input
                type="text"
                required
                class="form-control"
                id="RMSUserEmployee"
                value={form.RMSUserEmployee}
                aria-describedby="emailHelp"
                placeholder="Enter Your Contact No."
                onChange={(e) =>
                  updateForm({ RMSUserEmployee: e.target.value })
                }
              />
            </div>
            <div>
              <label for="RMSUserPI">Personal Items</label>
              <select
                id="RMSUserPI"
                value={form.RMSUserPI}
                class="form-control"
                onChange={(e) => updateForm({ RMSUserPI: e.target.value })}
              >
                <option selected>Select</option>
                <option>Helmet</option>
                <option>Bag</option>
                <option>Raincoat</option>
                <option>Food Items</option>
                <option>Others</option>
              </select>
            </div>
            <div>
              <label for="RMSUserTI">Taken Items</label>
              <select
                id="RMSUserTI"
                value={form.RMSUserTI}
                class="form-control"
                onChange={(e) => updateForm({ RMSUserTI: e.target.value })}
              >
                <option selected>Select</option>
                <option>Files/Document</option>
                <option>Laptop</option>
                <option>Office Furniture</option>
                <option>Books</option>
                <option>Others</option>
              </select>
            </div>
          </div>

          <div className="RMSdiv2">
            <div>
              <label for="RMSUserAdd">Address</label>
              <textarea
                class="form-control"
                required
                id="RMSUserAdd"
                value={form.RMSUserAdd}
                rows="3"
                onChange={(e) => updateForm({ RMSUserAdd: e.target.value })}
              ></textarea>
            </div>
            <div>
              <label for="RMSUserremark">Remarks</label>
              <textarea
                class="form-control"
                id="RMSUserremark"
                value={form.RMSUserremark}
                rows="3"
                onChange={(e) => updateForm({ RMSUserremark: e.target.value })}
              ></textarea>
            </div>
            <div id="RMSbtn">
              <Link to="/List">
                <button type="button" class="btn btn-outline-success">
                  Report
                </button>
              </Link>
              <button
                type="button"
                class="btn btn-outline-info"
                onClick={Submitrec}
              >
                Submit
              </button>
              <Link to="/RecentList">
                <button type="button" class="btn btn-outline-warning">
                  Recent
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RMS;
