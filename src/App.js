import React from "react";
import "./App.scss";
import "StartUpPage.scss";

import StudentDashboard from "./pages/student/dashboard";
import StartUpPage from "./pages/";


function App() {
  return (
    <div className="App">
      <StudentDashboard />

      <StartUpPage />
    </div>      
  );
}

export default App;
