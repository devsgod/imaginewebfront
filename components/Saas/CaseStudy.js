import React, { Component } from 'react';

import axios from 'axios';
import config from "../../config/config.json";
import Img from 'react-cool-img';
import Link from 'next/link';

class CaseStudy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rand_three_blogs: [],
        }
    }

    async componentDidMount() {
        await axios.get(config.ALL_BLOGS)
        .then(response => {
            if (response.data.length > 3) {
                let rand_num = Math.floor(Math.random()*10)%(response.data.length-3);
                this.setState({rand_three_blogs: response.data.slice(rand_num, rand_num + 3)});
            }
            else if(response.data.length>0 && response.data.length <= 3)
            {
                this.setState({rand_three_blogs: response.data});
            }
        })
        .catch((error) => {
        })
    }

    render() {
        return (
            <section className="blog-area blog-section ptb-100 case-study">
                <div className="container">
                    <div className="section-title">
                        <h2>Imagine Digital Signage <br/>Case Studies</h2>
                        <div className="bar"></div>
                        <p>View all our stories, articles and latest news</p>
                        <p className="mt-2"><a href="/blog">All resources ➟</a></p>
                    </div>
                    <div className="row">
                    {this.state.rand_three_blogs.map( (blog, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <div className="single-blog-post">
                                <Link href={{ pathname:"/blog-details", query:{name:blog.title}}}>                                    
                                    <a href="#"><Img src={config.SERVER_BASE_URL + blog.imageurl} alt="blog-image" /></a>                                 
                                </Link>
                                <div className="blog-post-content">
                                    <Link href={{ pathname:"/blog-details", query:{name:blog.title}}}>
                                        <h3><a href="#">{blog.title}</a></h3>
                                    </Link>
                                    <Link href={{ pathname:"/blog-details", query:{name:blog.title}}}>
                                        <div><a href="#">Read More</a> <i className="icofont-rounded-double-right"></i></div>
                                    </Link>
                                </div>
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

export default CaseStudy;
