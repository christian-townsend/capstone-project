import React, { useState,useEffect } from "react";
import axios from "axios";


export default function ReadProjectComponent(props) {

const url = 'http://localhost:5000/projects';
const getAllProjects = () => {
  axios.get(url)
  .then((response) => {
    const allProjects = response.data.projects.allProjects;
    console.log(allProjects);
  })
  .catch(error => console.error(`Error: ${error}`));
}

useEffect(() => {
  getAllProjects();
}, []);

return (
  <div className="container dashboard">
    <div class="row mt-5">
      <div class="Project Text col-md-12 mt-5">
        <h1 class="dash-header">Welcome Back, User</h1>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Scope</th>
              <th>Skills</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.projectsList()}</tbody>
        </table>
      </div>
    </div>
  </div>
);
}

/*   const [title, setTitle] = useState("");
  const [active, setActive] = useState("");
  const [description, setDescription] = useState("");
  const [scope, setScope] = useState("");
  const [skills, setSkills] = useState("");
  const [size, setSize] = useState("");
  const [duration, setDuration] = useState("");
  const [project_sponsors, setProject_Sponsors] = useState("");
  
  useEffect(() => {
    axios
    .get("http://localhost:5000/projects/")
    .then((response) => response.data())
  
})

deleteProject(() => {
  axios.delete("http://localhost:5000/projects/" + id).then((response) => {
    console.log(response.data);

})

} */
/* export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.deleteProject = this.deleteProject.bind(this);

    this.state = { projects: [] };
  }
   componentDidMount() {
>>>>>>> 191d9ac9cadbf76990af13b75b290a6a3eda0d6a
    axios
      .get(url)
      .then((response) => {
        const allProjects = response.data.projects.allProjects;
        console.log(allProjects);
      })
      .catch((error) => console.log("blaj"));
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div className="container dashboard">
      <div class="row mt-5">
        <div class="Project Text col-md-12 mt-5">
          <h1 class="dash-header">Welcome Back, User</h1>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Scope</th>
                <th>Skills</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{useEffect}</tbody>
          </table>
        </div>
      </div>
<<<<<<< HEAD
    </div>
  );
}
=======
    );
  }
} */


>>>>>>> 191d9ac9cadbf76990af13b75b290a6a3eda0d6a
