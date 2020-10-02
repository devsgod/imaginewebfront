import React, { Component } from 'react';
import config from "../../config/config.json";
import axios from 'axios';
// import {features_list} from '../../shared/constant';

class Multi extends Component {
    constructor(props) {
        super(props);
           this.state = {
          
            // for load more button
            //all_features: [],     <= data is used on top
            from:props.from,
            features_array_to_show: [],
            features_show_row_count: props.to,
            items_in_a_row: 4,
            load_more_disable: false,
            features_list:[]
        
        }
    }

    async componentDidMount() {

        await axios.get(config.ALL_FEATURES)
        .then(response => {
            if (response.data.length > 0) {
                this.setState({ features_list : response.data });
                this.setState({features_array_to_show: this.state.features_list.slice(0, this.state.widget_show * this.state.items_in_a_row)});
            }
        })
        .catch((error) => {
        })
        this.setState({features_array_to_show: this.state.features_list.slice(this.state.from, this.state.features_show_row_count * this.state.items_in_a_row)});
    }

    loadMoreFeatures() {
        if ( this.state.features_show_row_count < this.state.features_list.length / this.state.items_in_a_row )
        {
            this.state.features_show_row_count = this.state.features_show_row_count + 1;
            this.setState({features_array_to_show: this.state.features_list.slice(0, this.state.features_show_row_count * this.state.items_in_a_row)});
        }
        else {
            this.state.load_more_disable = true;
        }
    }
render(){

    return (
        <div>
             <div className="app-features-content features-area">
                    <div className="container">
                        <div className="row mb-5">
                            {
                                this.state.features_array_to_show.map( (feature, index) => (
                                    <div className="col-lg-3 col-6 p-2" key={index}>
                                        <div className="single-features-amazing row">
                                            <div>
                                                <div className="icon">
                                                    <img src={config.SERVER_BASE_URL + feature.imageurl}  alt="no" className="multi-card-img" />
                                                </div>
                                            </div>
                                            <div className="text-center feature-text">
                                                <h3 style={{wordBreak:"break-word", marginBottom:"10px"}}>{feature.title}</h3>
                                                <div className="line-clamp">
                                                    <p style={{color:"black"}}>{feature.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                            {!this.props.button?(null):(  <div className="row justify-content-center mb-5">
                            <button onClick={ (e) => this.loadMoreFeatures() } className="btn btn-primary">View more</button>
                        </div>)}                      
                    </div>
                </div>
        </div>
    )
}
     
}
 export default Multi