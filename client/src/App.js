import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";

function App() {
  const [colorList, setColorList] = useState([]);
  return (
    <Router>
      <PrivateRoute exact path="/protected" redirect="/"> <li> HI </li> </PrivateRoute>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}
class PrivateRoute extends React.Component {
    render(){
      if(localStorage.getItem('bubbleToken')){
          return this.props.children;
      }
      else {
        return <Redirect to={this.props.redirect} />;
      }
    }
}
export default App;
