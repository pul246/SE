import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import GoogleLoginComponent from "./googlebutton.component";
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="App container">
        <h1 className='title'>Pustakalaya E-library</h1>
        <GoogleLoginComponent />
      </div>
    );
  }
}

export default App;