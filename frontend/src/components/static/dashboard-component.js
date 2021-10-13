import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";

export default function Dashboard(props) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:5000/users", {
        withCredentials: true,
      });
      setUser(result.data);
      console.log(result.data);
    })();
  }, []);

  return (
    <div className="container dashboard">
      <div class="row mt-5">
        <div class="Project Text col-md-12 mt-5">
          <h1 class="dash-header">Welcome Back, User</h1>
        </div>
      </div>
    </div>
  );
}