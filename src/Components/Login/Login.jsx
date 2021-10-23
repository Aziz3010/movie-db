import React, { Component } from 'react';
import style from './Login.module.css';
import axios from "axios";

class Login extends Component {

    state = {
        errors:"",
    };

    user = {
        email:"",
        password:""
    };

    getFormValue = (e) => {
        this.user[e.target.name] = e.target.value;
    };
    
    getDataDB = async (e) => {
        e.preventDefault(); // to stop reload from the form
        let {data} = await axios.post("https://route-egypt-api.herokuapp.com/signin",this.user);
        
        if(data.message === "success"){
            localStorage.setItem("token",data.token);
            // go to home page
            this.props.history.replace("/home");
        }else {
            this.setState({
                errors: data.message
            });
        };

    };

    render() {
        return (
            <>
                <div className={style.body}>
                    <form onSubmit={this.getDataDB} className="w-50">

                        <input onChange={this.getFormValue} className="form-control mb-2" type="email" name="email" placeholder="Email"></input>
                        <input onChange={this.getFormValue} className="form-control mb-1" type="password" name="password" placeholder="Password"></input>
    
                        {this.state.errors}<br/>

                        <button className="btn btn-primary mt-1" type="submit">login</button>
                        <a className="d-block mt-3" href="/Register">Make a new account</a>
                    </form>
                </div>
            </>
        );
    }
}

export default Login;