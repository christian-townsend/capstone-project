import React, { Component } from 'react';
import axios from 'axios';


const Project = props => (
  <tr>
    <td>{props.project.title}</td>
    <td>{props.project.active}</td>
    
    <td>{props.project.description}</td>
    <td>{props.project.scope}</td>
    <td>{props.project.skills}</td>
    <td>{props.project.size}</td>
    <td>{props.project.duration}</td>
    <td>{props.project.project_sponsors}</td>
  </tr>
)

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.deleteProject = this.deleteProject.bind(this)

    this.state = {projects: []};
  }
  componentDidMount() {
    axios.get('http://localhost:5000/projects/')
      .then(response => {
        this.setState({ projects: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }


  deleteProject(id) {
    axios.delete('http://localhost:5000/projects/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      projects: this.state.projects.filter(el => el._id !== id)
    })
  }

  projectsList() {
    return this.state.projects.map(currentproject => {
      return <Project projects={currentproject} deleteProject={this.deleteProject} key={currentproject._id}/>;
    })
  }


  render (){
        return (
          <div className="container dashboard">
            <div class="row mt-5">
              <div class="Project Text col-md-12 mt-5">
                <h1 class="dash-header">
                  Welcome Back, User</h1>
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
                    <tbody>
                      { this.projectsList() }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
        )
    }
  }










        {/*
              <div className="container dashboard">
                  <div class="row">
                    <div class="row">
                        <div class="col-lg-12 divider-section">
                        </div>
                    </div>
                <div class="col-sm-8">
                  <h1 className="header-title">Your Project</h1>
                  <div class="card card-project">
                    <div class="card-body">
                      <h3 class="card-title">Project Title</h3>
                      <p class="card-text">What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it to make a type specimen book. It has survived 
                            not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..</p>

                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                <h1 className="header-title">Your Group</h1>
                  <div class="card card-team">
                    <div class="card-body">
                      <h3 class="card-title">Group Number</h3>
                      <p class="card-text">What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it to make a type specimen book. It has survived 
                            not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }
} */}