import React from "react";
import {connect} from "react-redux";
import {login} from "../redux/actions";
class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  handleChange(e){
    
    this.setState({...this.state, [e.target.name] : e.target.value });
  }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  render() {
      return (
        <>
          <div class="container">
            <label for="uname"><b>Username</b></label>
            <input onChange = {(e)=> this.handleChange(e)} type="text" placeholder="Enter Username" name="username" required />
            <label for="psw"><b>Password</b></label>
            <input onChange = {(e)=> this.handleChange(e)} type="password" placeholder="Enter Password" name="password" required />
            <button onClick={(e)=>this.props.login(this.state.userName, this.state.password)} type="submit">Login</button>
          </div>
        </>
      );
  };
}
export default connect(mapStateToProps,{login}) (Login);

function mapStateToProps(state){
  return {...state}
}