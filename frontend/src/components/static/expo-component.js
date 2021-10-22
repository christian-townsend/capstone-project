import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function ExpoProjectsFunction(props) {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        (async () => {
          const result = await axios("http://localhost:5000/projects", {
            withCredentials: true,
          });
          setProjects(result.data);
          console.log(result.data);
        })();
      }, []);

      return(
          <div class='fullpage past-project-header'>
            <div class='container' style={{maxWidth:'80%'}}>
              <h1 class="header-banner">
                Explore our Past Projects
              </h1>
              <div class="banner-text col-xs-12 col-sm-12 col-md-12">
                <p class="card-text">
                  Check out the previous projects that our students have
                  accomplished through the years
                </p>
              </div>


        {/*Banner Logo*/}


            </div>
          </div>
      )
}