import React, { Component } from "react";

class PdfComponent extends Component{
  validate = (response) => {
    var val = document.getElementById('bookfile').value.toLowerCase();
    var regex = new RegExp("(.*?)\.(docx|doc|pdf)$");
        if(!(regex.test(val))) {
            document.getElementById('bookfile').value = '';
            alert('Please select correct file format.');
            return false;   
        }
		return true;
		}
  render(){
    return(
<>
<div className="bg">
  <div className="formst">
    <form
      method="POST"
      encType="multipart/form-data"
      onsubmit="return validate(this)"
    >
      <h1 id="IYear">I Year</h1>
      <h4 id="bio">
        <a href="https://drive.google.com/file/d/1np3ZezegAsILhTI35qvNgPwtElVuZdej/view?usp=sharing">
          Intro to CS
        </a>
      </h4>
      <h4 id="bio">
        <a href="https://drive.google.com/file/d/1QrtfR3hqoVfX384OfZkLAEtUII-bMWEm/view?usp=sharing">
          Signals and Systems
        </a>
      </h4>
      <h4 id="elec">
        <a href="https://drive.google.com/file/d/1gw7gB9aeCLPgSpEcUzw8w05b456buaHV/view?usp=sharing">
          Principles and Applications of Electrical Engineering
        </a>
      </h4>
    </form>
  </div>
  <br />
  <div className="formst">
    <h1 id="IIYear">II Year</h1>
    <h4 id="bio">
      <a href="https://drive.google.com/file/d/1NnPSvtCFXb5SqGtOw0PSDldW0_N3IQuA/view?usp=sharing">
        Data Structures and Algorithms in C++
      </a>
    </h4>
    <h4 id="elec">
      <a href="https://drive.google.com/file/d/13yrU4E4AwQ_S4bCBDCuU39A9BfCwVIBt/view?usp=sharing">
        Introduction_to_algorithms
      </a>
    </h4>
    <h4 id="prml">
      <a href="https://drive.google.com/file/d/1AVNxSW8HDU1nTeH8aV3I0FuyVcIn-d54/view?usp=sharing">
        Machine Learning
      </a>
    </h4>
  </div>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <div className="formst">
    <input
      type="text"
      id="name"
      name="bookname"
      placeholder="Search by Book Name"
    />
    <textarea
      cols={5}
      rows={2}
      name="bookdesc"
      placeholder="Book Description"
      defaultValue={""}
    />
    <input
      type="text"
      id="password"
      name="bookauthor"
      placeholder="Search by Author name"
    />
    <select name="booklang" required="">
      <option selected="" disabled="">
        Select Trimester/Semester
      </option>
      <option value="I Trimester">I Trimester</option>
      <option value="II Trimester">II Trimester</option>
      <option value="III Trimester">III Trimester</option>
      <option value="III Semester">III Semester</option>
    </select>
    <div style={{ paddingBottom: 4 }}>
      <label>Select Book (Upload)</label>
    </div>
    <input type="file" name="bookfile" id="bookfile" required="" />
    <input
      type="text"
      id="name"
      name="uploadername"
      placeholder="Uploaded By"
    />
    <input
      type="email"
      id="name"
      name="uploaderemail"
      placeholder="Email*"
      required=""
    />
    <input type="submit" id="submit" name="submit" />
  </div>
  </div>
</>


    )
  }
}
export default PdfComponent;