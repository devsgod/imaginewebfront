import React, { Component } from 'react';
import Link from 'next/link';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../store/actions/authActions';
import { clearErrors } from '../../store/actions/errorActions';
import images from "../../images/rcl/regi.png"
import logo from "../../images/logom.png"
import Router from 'next/router'
import {Col,Row} from "react-bootstrap"
import { Input } from '@material-ui/core';
import ReCAPTCHA from "react-google-recaptcha";

import axios from 'axios';

import {
    Select,
    MenuItem,
    InputLabel
} from "@material-ui/core";

class SignupBody extends Component {
    state = {
        licance:1,
        username: '',
        email: '',
        password: '',
        msg: null,
        firstName: '',
        lastName: '',
        mobile: '',
        accountname: '',
        captcha: true,
        businesstype: 'None',
        companyName: ''
    };
    
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    componentDidMount() {
        let Arrayop=[]
    }

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if (error !== prevProps.error) {
          // Check for register error
          if (error.id === 'REGISTER_FAIL') {
            this.setState({ msg: error.msg.msg });
          } else {
            this.setState({ msg: null });
          }
        }
    
        // If authenticated, do something
        if (isAuthenticated) {
            //
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    
    onSubmit = e => {
        e.preventDefault();
    
        if ( !this.state.captcha )
        {
            this.setState({msg: "Please do the human check!"});
            return;
        }

        const { username, email, password, firstName, lastName, mobile, accountname, businesstype, msg, companyName } = this.state;
    
        // Create user object
        const newUser = {
          username,
          email,
          password,
          firstName,
          lastName,
          mobile,
          accountname,
          businesstype,
          companyName,
          msg
        };

        // Attempt to register
        this.props.register(newUser);
        

        //Show send status
        if (localStorage)
        {
            Router.push('/thankyou');
        }
    };

    onCaptchaChange = e => {
        if ( !!e){
            this.setState({captcha: true});
        }
    };

    // onBusinessType = (event) => {
    //     this.setState({businesstype: event.target.value});
    // }

    // onLicance=()=>{
    //     this.setState({licance: event.target.value});
    // }

    render() {
        return (
            <section className="signup-area ptb-100">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">

                        <div className="col-lg-6 col-md-12">
                            <div className="signup-form">
                               <div className="flexcontainer" style={{padding:50}}>
                                   <img src={logo}></img>
                               </div>
                               
                                <p className = "register-guide">Fill in your details below and within 10 minutes, you are changing content.</p>
                                <form onSubmit={this.onSubmit}>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="text"
                                                    name="firstName"
                                                    id="firstName" 
                                                    className="form-control" 
                                                    placeholder="First Name"
                                                    onChange={this.onChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="text" 
                                                    name="lastName" 
                                                    id="lastName" 
                                                    className="form-control" 
                                                    placeholder="Last Name"
                                                    onChange={this.onChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="email" 
                                                    name="email" 
                                                    id="email" 
                                                    className="form-control" 
                                                    placeholder="Email adress"
                                                    onChange={this.onChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="text" 
                                                    name="mobile" 
                                                    id="mobile" 
                                                    className="form-control" 
                                                    placeholder="Phone number"
                                                    onChange={this.onChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="text" 
                                                    name="companyName" 
                                                    id="companyName" 
                                                    className="form-control" 
                                                    placeholder="Company Name"
                                                    onChange={this.onChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        
                                    {/* <Row style={{width:"100%",paddingLeft:15}}>                                      
                                        <Col>
 
                                            <Select
                                                value={this.state.businesstype}
                                                onChange={this.onBusinessType}
                                                className="selectm"
                                                style={{width: "100%", paddingLeft: "12px",marginBottom:20,marginTop:10,borderBottom:"1px solid #eeeeee",paddingRight:0}}
                                            >
                                                <MenuItem value="None">Business Type</MenuItem>
                                                <MenuItem value="Retail">Retail</MenuItem>
                                                <MenuItem value="Restaurant">Restaurant</MenuItem>
                                                <MenuItem value="Corporate">Corporate</MenuItem>
                                                <MenuItem value="Education">Education</MenuItem>
                                                <MenuItem value="Gambling">Gambling</MenuItem>
                                                <MenuItem value="Outdoor">Outdoor</MenuItem>
                                                <MenuItem value="Hospitality">Hospitality</MenuItem>
                                                <MenuItem value="Healthcare">Healthcare</MenuItem>
                                                <MenuItem value="Healthcare">Digital signage</MenuItem>
                                                <MenuItem value="Healthcare">Agency</MenuItem>
                                            </Select>

                                            </Col>
                                        <Col>         

                                             <input 
                                             placeholder="Licence"
                                              style={{width: "100%", paddingLeft: "12px",marginBottom:20,marginTop:10,paddingRight:0}}
                                              className="form-control" 
                                             id={'licance'}  min={0} max={9999} type={'number'} name={'licance'} defaultValue={"licance"} onChange={this.onLicance} required />
                                            </Col>
                                            </Row>*/}
                                     
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="text" 
                                                    name="accountname" 
                                                    id="accountname" 
                                                    className="form-control" 
                                                    placeholder="Your Dashboard Name (example: 'paulsmenus')"
                                                    onChange={this.onChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="text" 
                                                    name="username" 
                                                    id="username" 
                                                    className="form-control" 
                                                    placeholder="Username"
                                                    onChange={this.onChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="password" 
                                                    name="password" 
                                                    id="password" 
                                                    className="form-control" 
                                                    placeholder="Password"
                                                    onChange={this.onChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="text" 
                                                    name="msg" 
                                                    id="msg" 
                                                    className="form-control" 
                                                    placeholder="Your Message"
                                                    onChange={this.onChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12" style={{marginTop:20}}>
                                        <ReCAPTCHA
                                            sitekey="6LeL4_8UAAAAAKMZShZFHoqwpl284BzWCM-JFo77"
                                            onChange={this.onCaptchaChange}
                                        />
                                        </div>

                                        <div className="col-lg-12" className="flexcontainer" style={{width:"100%"}}>
                                            <button type="submit" className="btn btn-primary" style={{width:"90%"}}>Register</button>
                                            <br />
                                            <span>Have you an account ? <Link href="/login"><a>Log in!</a></Link></span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="login-image">
                                <img src={images} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});
  
export default connect( mapStateToProps, { register, clearErrors } )(SignupBody);
