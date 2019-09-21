import React from "react";
import { axiosInstance } from "./helper/axiosHelper";
import "./App.less";

const App = () => {

    axiosInstance.get("https://localhost:44397/api/values")
      .then((response) => {
          console.log(response.data);
      })
      .catch((error) => {
          console.log(error);
      });

    return (
        <div className="App">
            <header className="App-header">
            <div>ahh</div>
            </header>
        </div>
    );
};

export default App;
