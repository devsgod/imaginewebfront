import React, { Component } from 'react';
import Link from 'next/link';

import axios from 'axios';
import config from "../../config/config.json";

class ServiceContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            all_widgets: [],
            widgets_to_show: [],
            widget_show: 1,
            load_more_disable: false,
        };
    }
    
    async componentDidMount() {
        await axios.get(config.ALL_WIDGETS)
        .then(response => {
            if (response.data.length > 0) {
                this.setState({ all_widgets : response.data });
                this.setState({widgets_to_show: this.state.all_widgets.slice(0, this.state.widget_show * 3)});
            }
        })
        .catch((error) => {
        })
    }

    // loadMorewidget() {
    //     if ( this.state.widget_show < this.state.all_widgets.length / 3 )
    //     {
    //         this.state.widget_show = this.state.widget_show + 1;
    //         this.setState({widgets_to_show: this.state.all_widgets.slice(0, this.state.widget_show * 3)});
    //     }
    //     else {
    //         this.state.load_more_disable = true;
    //     }
    // }

    render() {
        return (
            <section className="services-area ptb-50">
                <div className="container">
                    <div className="section-title">
                        <h2 style={{marginTop:50, marginBottom:0}}>Free additional content widgets</h2>
                        <p> Battle tested features that continually improve</p>
                        <div style={{marginTop:40, marginBottom:40}} className="bar"></div>
                    </div>

                    {/* <div className="woocommerce-topbar">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="woocommerce-result-count">
                                    <p>Showing 1–16 of 100 results</p>
                                </div>
                            </div>
                           
                            <div className="sidebar-area col-lg-3 col-md-3">
                                <div className="widget widget-search">
                                    <form>
                                        <input type="text" className="form-control" placeholder="Search" />
                                        <button type="submit"><i className="icofont-search-2"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    
                    <div className="row">
                        {
                            this.state.all_widgets.map( (widget, index) => (
                                <div key={index} className="col-lg-4 col-md-6">                                    
                                    <div className="single-services">
                                        <img src={config.SERVER_BASE_URL + widget.imageurl} alt="alt" />
                                        <h3>{widget.title}</h3>
                                        <p className="line-clamp">{widget.description}</p>
                                    </div>                                    
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceContent;
