import React, { Component } from 'react';
import Link from 'next/link';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../store/actions/authActions';
import Router from 'next/router';

class Topbar extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    };

    constructor(){
        super();        
        this.state = {
            isAuthStatus : false
        };
    }

    componentDidMount(){
        if (localStorage.getItem('token') != null && localStorage.getItem('token') != "") {
            this.setState({
                isAuthStatus:true
            })
        } else {
            this.setState({
                isAuthStatus:false
            });
        }
    }

    onLogout(){
        // this.props.logout;
        localStorage.removeItem('token');
        this.setState({
            isAuthStatus:false
        });
    }

    render() {
        // const { isAuthenticated, user } = this.props.auth;
        let { isAuthStatus } = this.state;

        const loggedin = (
            <div className="col-lg-6 col-md-5 col-sm-4 col-12 topbar-text-right sign-btns">
                <Link href="/login">
                    <a onClick={this.onLogout} className="btn btn-primary sign-btn" style={{textTransform:"none",border:"1px solid white"}}>Logout</a>
                </Link>
            </div>
        );
    
        const guest = (
            <div className="col-lg-6 col-md-5 col-sm-4 col-12 topbar-text-right sign-btns">
                <Link href="/login">
                    <a className="btn btn-primary sign-btn" style={{textTransform:"none",border:"1px solid white"}}>Login</a>
                </Link>&nbsp;&nbsp;&nbsp;
                <Link href="/signup">
                    <a className="btn btn-primary sign-btn" style={{textTransform:"none",border:"1px solid white"}}>Register</a>
                </Link>&nbsp;&nbsp;&nbsp;
            </div>
        );

        return (
            <section className="topbar" style={{backgroundColor:"#FB6520"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-7 col-sm-8 col-12">
                            <div className="contact-list">
                                <Link href="tel:+27218510119"><a className="topbar-contact-phone"><i className="icofont-phone" style={{color:"white"}}></i> +27 21 851 0119</a></Link> &nbsp;&nbsp;|&nbsp;&nbsp; 
                                <Link href="mailto:support@imaginesignage.com"><a className="topbar-contact-email"><i className="icofont-envelope" style={{color:"white"}}></i> info@imaginesignage.com</a></Link>
                            </div>
                        </div>
                        {isAuthStatus ? loggedin : guest}
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
});
  
export default connect(
    mapStateToProps,
    { logout }
)(Topbar);