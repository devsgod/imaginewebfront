import React, { Component } from 'react';
import axios from 'axios';
import Router from 'next/router';
import config from "../config/config.json";
// import config from "../config/config_local.json";

class Success extends Component {
    constructor() {
        super();
        
        this.state = {
            user_id : ''
        };
    }
    
    componentDidMount() {
        const link_route = window.location.href;
        var url = new URL(link_route);
        var user_id = url.searchParams.get("id");
        const config_header = {
            headers: {
              'Content-Type': 'application/json'
            }
        };

        let email = localStorage.getItem('email');
        const body = JSON.stringify({ user_id, email });

        console.log(body)
        axios
        .post(config.CONFIRM_USER_ID, body, config_header)
        .then(res => {            
            console.log(res.data);
            if (res.data.signupStatus == "Setting Up"){
                localStorage.setItem('token',res.data.token);
                Router.push("/success");
            } else {
                Router.push("/error");                
            }
        })
        .catch(err => {
            console.log(err)
            Router.push("/error");
        });
    }
    
    render() {
        return (
            <React.Fragment>
               
            </React.Fragment>
        );
    }
}

export default Success;
