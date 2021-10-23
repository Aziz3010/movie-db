import React, { Component } from 'react';
import style from './Register.module.css';
import axios from 'axios';

class Register extends Component {

    state = {error:""}

    user = {
        first_name:"",
        last_name: "",
        email: "",
        password: ""
    };

    getFormValue = (e) => {
        this.user[e.target.name] = e.target.value;
    };

    sendDate = async (e) => {
        e.preventDefault(); // to stop reload from the form
        let { data } = await axios.post("https://route-egypt-api.herokuapp.com/signup", this.user);
        
        if(data.message === "success"){
            this.props.history.push("/login");
        }else {
            this.setState({
                error:data.message
            })
        };
    };

    render() {
        return (
            <>
                <div className={style.body}>
                    <form onSubmit={this.sendDate} className="w-50">

                        <input onChange={this.getFormValue} className="form-control mb-2" type="text" name="first_name" placeholder="First Name"></input>

                        <input onChange={this.getFormValue} className="form-control mb-2" type="text" name="last_name" placeholder="Last Name"></input>

                        <input onChange={this.getFormValue} className="form-control mb-2" type="email" name="email" placeholder="Email"></input>

                        <input onChange={this.getFormValue} className="form-control mb-1" type="password" name="password" placeholder="Password"></input>

                        {this.state.error}<br/>

                        <button className="btn btn-primary mt-1">Register</button>
                        <a className="d-block mt-3" href="/Login">Already have account</a>
                    </form>
                </div>
            </>
        );
    }
}

export default Register;